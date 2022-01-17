
class DetailsPhotographerApps {
    constructor() {
        this.$mediaSection = document.querySelector(".media-section")
        this.$photographHeader = document.querySelector(".photograph-header")

        this.mediaApi = new MediaApi('/data/photographers.json')
        this.photographersApi = new PhotographersApi("/data/photographers.json")
    }

    async detailHeader() {
        const idUrl = document.location.href.substring(document.location.href.lastIndexOf("?id=")+4)
        const mediaHeader = await this.photographersApi.getPhotographers()

        mediaHeader
            .map(photographers => new Photographers(photographers))
            .forEach(photographers => {
                if (idUrl == photographers._id) {
                    const Template = new PhotographerCard(photographers)
                    this.$photographHeader.appendChild(Template.createHeaderPhotographerCard())
                }
        })
    }

    async mains() {
        const idUrl = document.location.href.substring(document.location.href.lastIndexOf("?id=")+4)
        const mediaData = await this.mediaApi.getMedia()

        mediaData
            .map(media => new Media(media))
            .forEach(media => {
                if (idUrl == media._photographerId) {
                        if (media._video == undefined) {
                            const Templates = new Picture(media)
                            this.$mediaSection.appendChild(Templates.createMediaCardPicture())
                        } else if(media._image == undefined) {
                            const Templates = new Movie(media)
                            this.$mediaSection.appendChild(Templates.createMediaCardMovie())
                        }
                }
        })
    }
}

const app = new DetailsPhotographerApps()
app.detailHeader()

const apps = new DetailsPhotographerApps()
apps.mains()


/*
// Pseudo code:
1// Tu lis le ID qui se trouve dans URL
1.1// Tu parcours le JSON pour trouver le même ID que URL
1.2// Si tu le trouve tu affiche ses données sinon tu fais rien
2// Une fois trouver tu parcours les données du photographe correspondant
2.1// Quand c'est une
// Final : tu affiche les données du photographe, pour les video tu utilise MediaCardVideo et quand ce sont des images tu utilise MediaCardImage
*/