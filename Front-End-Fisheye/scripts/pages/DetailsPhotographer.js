
class DetailsPhotographerApps {
    constructor() {
        this.$mediaSection = document.querySelector(".media-section")
        this.$photographHeader = document.querySelector(".photograph-header")

        this.mediaApi = new MediaApi('/data/photographers.json')
        this.photographersApi = new PhotographersApi("/data/photographers.json")
    }
        
    async mains() {
        const mediaData = await this.mediaApi.getMedia()

        mediaData
            .map(media => new Media(media))
            .forEach(media => {
            const Templates = new MediaCard(media)
            this.$mediaSection.appendChild(Templates.createMediaCard())
        })
    }

    async lePetitNoir() {
        const DetailsPhotographerData = await this.photographersApi.getPhotographers(this._id)

        DetailsPhotographerData
        .map(photographers => new Photographers(photographers))
        .forEach(photographers => {
        const Template = new MediaCard(photographers)
        this.$photographHeader.appendChild(Template.createHeaderCard())
        console.log("le petit noir s'execute")
        })
    }
}

/*const apps = new DetailsPhotographerApps()
apps.mains()*/