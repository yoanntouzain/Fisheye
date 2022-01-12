class PhotographerCard {
    constructor(photographers) {
        this._photographers = photographers
    }

    createPhotographerCard() {
        const $article = document.createElement( 'article' )

        const photographerCard = 
        `<a href="photographer.html" id="${this._photographers.id}" class="photographe-lien lien" alt="Lien vers le photographe">
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
}
