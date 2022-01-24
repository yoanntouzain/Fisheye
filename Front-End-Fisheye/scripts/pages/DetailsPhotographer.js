
class DetailsPhotographerApps {
    constructor() {
        this.$mediaSection = document.querySelector(".media-section")
        this.$photographHeader = document.querySelector(".photograph-header")

        this.mediaApi = new MediaApi('/data/photographers.json')
        this.photographersApi = new PhotographersApi("/data/photographers.json")
    }

    async HeaderPhotographer() {
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

    async SectionPhotographersCard() {
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
        bonjour()
    }

    async FlagLikes() {
        const idUrl = document.location.href.substring(document.location.href.lastIndexOf("?id=")+4)
        const FlagLikesBar = await this.photographersApi.getPhotographers()

        FlagLikesBar
        .map(photographers => new Photographers(photographers))
        .forEach(photographers => {
            if (idUrl == photographers._id) {
                const Template = new PhotographerCard(photographers)
                main.appendChild(Template.LikePriceDay())
            }
        })
    }
}

const Head = new DetailsPhotographerApps()
Head.HeaderPhotographer()

const Section = new DetailsPhotographerApps()
Section.SectionPhotographersCard()



const Flag = new DetailsPhotographerApps()
Flag.FlagLikes()
