class PhotographerCard {
    constructor(photographers) {
        this._photographers = photographers
    }

    createPhotographerCard() {
        const $article = document.createElement( 'article' )

        const photographerCard = 
        `<a href="photographer.html" onclick="location.href=this.href+'?id='+id;return false;" id="${this._photographers.id}" class="photographe-lien lien" alt="Lien vers le photographe">
            <div class="container-portrait">
                <img src="${this._photographers.portrait}" alt="image du profil du photographe"/>
            </div>
            <h2>${this._photographers.name}</h2>
        </a>
        <p class="location">${this._photographers.city}, ${this._photographers.country}</p>
        <p class="tagline">${this._photographers.tagline}</p>
        <p class="price">${this._photographers.price}€/jours</p>`
        $article.innerHTML = photographerCard
        return $article
    }

    createHeaderPhotographerCard() {
        const $div0 = document.querySelector('.container-photograph')

        const getUserPage =
            `<div class="presentation">
                <h2>${this._photographers.name}</h2>
                <p class="location-photographer">${this._photographers.city}, ${this._photographers.country}</p>
                <p class="tagline-photographer">${this._photographers.tagline}</p>
            </div>
            <div class="button_modal"><!--Container pour ouvrir la modal-->
              <button id="modal" title="Ouvrir cette fenêtre modale" type="button" aria-haspopup="dialog" aria-controls="dialog" class="contact_button">Contactez-moi</button>
            </div>
            <div class="photo">
                <img src="${this._photographers.portrait}" alt="image du profil du photographe"/>
            </div>`

            $div0.innerHTML = getUserPage
            return $div0
    }
    createForm() {
        const $titre = document.querySelector('#dialog-title')

        const titleForm =
            `Contactez-moi ${this._photographers.name}`
            $titre.textContent = titleForm
            return $titre

    }

    LikePriceDay() {
        const $bar = document.createElement('div')
        $bar.setAttribute("class", "like-price")

        const FlagPrice =
        `<div class="price-background">
            <div class="like-photographer">
                <p class="numberLikes" tabindex="0"></p>
                <svg class="heart" viewBox="0 0 241.59736 220.05746">
                    <g transform="translate(-175.32265,-1696.4765)">
                        <path d="m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z" />
                    </g>
                </svg>
            </div>
             <div class="price-day">
                <p tabindex="0">
                    ${this._photographers.price}€ / jours
                </p>
            </div>
        </div>`
        $bar.innerHTML = FlagPrice
        return $bar
    }
}
