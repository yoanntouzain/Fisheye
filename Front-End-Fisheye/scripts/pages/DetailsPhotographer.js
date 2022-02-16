
class DetailsPhotographerApps {
    constructor() {
        this.$mediaSection = document.querySelector(".media-section")
        this.$photographHeader = document.querySelector(".photograph-header")

        //Pour garder le ID concernant mes photographers
        this.idUrl = document.location.href.substring(document.location.href.lastIndexOf("?id=")+4)

        //tableau pour mon filtre
        this.popularitef = []


        //Permet de parcourir mon json suivant les données voulues
        this.mediaApi = new MediaApi('/data/photographers.json')
        this.photographersApi = new PhotographersApi("/data/photographers.json")
    }

    async HeaderPhotographer() {
        const mediaHeader = await this.photographersApi.getPhotographers()

        mediaHeader
        .map(photographers => new Photographers(photographers))
        .forEach(photographers => {
            if (this.idUrl == photographers._id) {
                const Template = new PhotographerCard(photographers)
                this.$photographHeader.appendChild(Template.createHeaderPhotographerCard())
            }
        })
    }

    //on execute le tri par la popularité
    async SectionPhotographersCardPop() {
        const populariteData = await this.mediaApi.getMedia()

        populariteData
        .map(popularite => new Media(popularite))
        .forEach(popularite => {
            if (this.idUrl == popularite._photographerId) {
                this.popularitef.push(popularite)
                this.popularitef.sort(function(a,b) {
                    return b._likes - a._likes
                })
            }
        })
        this.popularitef.forEach(popularite => {
            this.$mediaSection.appendChild(factory(popularite).createMediaCard())
        })
        actionLike(this.popularitef)
    }
    
    //on execute le tri par date
    async SectionPhotographersCardDate() {
        const dateData = await this.mediaApi.getMedia()

        dateData
        .map(date => new Media(date))
        .forEach(date => {
            if (this.idUrl == date._photographerId) {
                this.popularitef.push(date)
                this.popularitef.sort(function(a,b) {
                    if(a._date > b._date) {
                        return -1
                    }
                    if(a._date < b._date) {
                    return 1
                    }
                    return 0
                })
            }
        })
        this.popularitef.forEach(date => {
            this.$mediaSection.appendChild(factory(date).createMediaCard())
        })
        actionLike(this.popularitef)
    }

    //on execute le tri par titre
    async SectionPhotographersCardTitle() {
        const titleData = await this.mediaApi.getMedia()

        
        titleData
        .map(title => new Media(title))
        .forEach(title => {
            if (this.idUrl == title._photographerId) {
                this.popularitef.push(title)
                this.popularitef.sort(function(a,b) {
                if(a._title > b._title) {
                return 1
                }
                    if(a._title < b._title) {
                return -1
                }
                if (a._title === undefined) {
                    return -1
                }
                return 0
                })
            }
        })
        this.popularitef.forEach(title => {
            this.$mediaSection.appendChild(factory(title).createMediaCard())
        })
        actionLike(this.popularitef)
    }

    //Pour afficher le bandeau en bas a droite
    async FlagLikes() {
        const FlagLikesBar = await this.photographersApi.getPhotographers()


        FlagLikesBar
        .map(photographers => new Photographers(photographers))
        .forEach(photographers => {
            if (this.idUrl == photographers._id) {
                const Template = new PhotographerCard(photographers)
                main.appendChild(Template.LikePriceDay())
            }
        })
    }

    async filterMenu() {
        const Filter = new SorterForm()
        Filter.render()
    }
}

// Affiche mon cadre en dessous de mon header
const Head = new DetailsPhotographerApps()
Head.HeaderPhotographer()

// Affiche mon menu déroulant
const menu = new DetailsPhotographerApps()
menu.filterMenu()

// Affiche mon cadre en bas a droite concernant les likes et le prix/jours
const Flag = new DetailsPhotographerApps()
Flag.FlagLikes()

// A partir du moment ou je change le filtre dans mon menu déroulant, je vérifie les conditions. Si la valeur de ma séléction de filtre est égal à ma value popularite, 
// alors je crée une constante qui aura pour valeur une nouvelle instance de ma classe, puis j'executerai ma fonction

const selectElem = document.getElementById("sorter-select")

selectElem.addEventListener('change', function(){
    const mediaSection = document.querySelector(".media-section")
    const filtre = new DetailsPhotographerApps()
    mediaSection.innerHTML = ""
    switch (selectElem.value) {
        case "popularite":
            return filtre.SectionPhotographersCardPop()

        case "date":
            return filtre.SectionPhotographersCardDate()

        case "title":
            return filtre.SectionPhotographersCardTitle()

        default:
            return console.log(selectElem.value)
    }
})


// Affiche ma section concernant mes images
const filtrePop = new DetailsPhotographerApps()
filtrePop.SectionPhotographersCardPop()

const banniere = new LeCarousel()