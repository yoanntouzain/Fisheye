class MediaCard {
    constructor(media) {
        this._media = media
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