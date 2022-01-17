
class App {
    constructor() {
        this.$photographerSection = document.querySelector('.photographer_section')
        this.$mediaSection = document.querySelector(".media-section")

        this.photographersApi = new PhotographersApi('/data/photographers.json')
        this.mediaApi = new MediaApi('/data/photographers.json')
    }

    async main() {
        const photographersData = await this.photographersApi.getPhotographers()
        
        photographersData
            .map(photographers => new Photographers(photographers))
            .forEach(photographers => {
            const Template = new PhotographerCard(photographers)
            this.$photographerSection.appendChild(Template.createPhotographerCard())
        })
        /*pomme()*/

        
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
}

const app = new App()
app.main()

/*function pomme() {
    const bonjour = document.querySelectorAll(".photographe-lien")
    bonjour.forEach((lien) => lien.addEventListener("click", banane))
    function banane() {
        const apps = new App()
        apps.mains()
    }
}*/


/*pseudo code 
ton app.js sert a afficher ta page index.html
ton index.js sert a afficher tous ceux qui se trouvent sur ton index.html
ton photographer.js sert a afficher tous ceux qui se trouvent sur ton photographer.html
*/