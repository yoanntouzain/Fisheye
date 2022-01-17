
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
                    const Templates = new MediaCardImage(media)
                    this.$mediaSection.appendChild(Templates.createMediaCard())
                }
        })
    }
}


const oui = new DetailsPhotographerApps()
oui.detailHeader()

const apps = new DetailsPhotographerApps()
apps.mains()