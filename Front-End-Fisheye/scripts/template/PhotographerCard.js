class PhotographerCard {
    constructor(photographers) {
        this._photographers = photographers
    }

    createPhotographerCard() {
        const $article = document.createElement( 'article' )

        const photographerCard = 
        `<a href="photographer.html" onclick="location.href=this.href+'?id='+id;return false;" id="${this._photographers.id}" class="photographe-lien lien" alt="Lien vers le photographe">
            <img 
                src="${this._photographers.portrait}" 
                alt="image du profil du photographe"
            />
            <h2>${this._photographers.name}</h2>
        </a>
        <p class="location">${this._photographers.city}, ${this._photographers.country}</p>
        <p class="tagline">${this._photographers.tagline}</p>
        <p class="price">${this._photographers.price}€/jours</p>`
        $article.innerHTML = photographerCard
        return $article
    }

    createHeaderPhotographerCard() {
        const $div0 = document.createElement('div')
            $div0.setAttribute("class", "container-photograph")


        const getUserPage =
            `<div class="presentation">
                <h2>${this._photographers.name}</h2>
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
}
