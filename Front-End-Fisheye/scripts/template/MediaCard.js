class MediaCard {
    constructor(media, photographer) {
        this._media = media
        this._photographer = photographer
    }

    //doit se retrouver dans .photograph-header

    createHeaderCard() {
        const $div0 = document.createElement('div')
            $div0.setAttribute("class", "container-photograph")
            
    
        const getUserPage =
            `<div class="presentation">
                <h2>${this._photographer.name}</h2>
                <p class="location-photographer">${this._photographers.city}, ${this._photographers.country}</p>
                <p class="tagline-photographer">${this._photographers.tagline}</p>
            </div>
            <div class="button">
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <div class="photo">
                <img src="${this._photographers.portrait}" alt="image du profil du photographe"/>
            </div>`
    
            $div0.innerHTML = getUserPage
            return $div0
    }
    

    createMediaCard() {
        const $article = document.createElement( 'article' )

        const mediaCard = 
        `<article>
            <a href="#" alt="lien vers image">
                <div>
                    <div class="containerImage">
                        <img src="${this._media.image}" alt=" ">
                    </div>
                    <div class="description">
                        <div class="titre">
                            <p>${this._media.image}</p>
                        </div>
                        <div class="numberLike">
                            <p class="likes">${this._media.likes}</p>
                            <i class="fas fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </a>
        </article>`

        $article.innerHTML = mediaCard
        return $article
    }
}
/*
//pseudo code =
    Crée une action quand tu clique sur un photographe
    Aller chercher les données dans le .json
    L'action dois faire le lien entre le photographe et ses données stockées dans le .json
    Générer les données du photographe partir du .json
    Les afficher sur la page photographer.html
    Final: Quand je clique sur un photographe je dois générer unique ces données et les afficher sur photographer.html
*/