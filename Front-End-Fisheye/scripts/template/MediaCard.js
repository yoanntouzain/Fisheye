class MediaCard {
    constructor(media) {
        this._media = media
    }
}
class Picture extends MediaCard {
    constructor(media) {
        super(media)
    }
    createMediaCardPicture() {
        const $article = document.createElement( 'article' )

        const mediaCard = 
        `<a href="${this._media.image}" alt="lien vers image" class="vignette">
            <div>
                <div class="containerMedia">
                    <img src="${this._media.image}" alt=" ">
                </div>
            </div>
        </a>
        <div class="description">
            <div class="titre">
                <p>${this._media.title}</p>
            </div>
            <div class="numberLike">
                <p class="likes">${this._media.likes}</p>
                <i class="fas fa-heart" aria-hidden="true"></i>
            </div>
        </div>`
        $article.innerHTML = mediaCard
        return $article
    }
}

class Movie extends MediaCard {
    constructor(media) {
        super(media)
    }
    createMediaCardMovie() {
        const $article = document.createElement( 'article' )

        const mediaCard =
        `<a href="#" alt="lien vers image">
            <div>
                <div class="containerMedia">
                    <video controls>
                        <source src="${this._media.video}" type="video/mp4">
                    </video>
                </div>
            </div>
        </a>
        <div class="description">
            <div class="numberLike">
                <p class="likes">${this._media.likes}</p>
                <i class="fas fa-heart" aria-hidden="true"></i>
            </div>
        </div>`
        $article.innerHTML = mediaCard
        return $article
    }
}


class LeCarousel extends MediaCard {
    constructor(media) {
        super(media)
    }
    createCarousel() {
        const $sousContainer = document.createElement( 'div' )
        $sousContainer.setAttribute('id', 'carousel1')

        const $containerImage =
            `<div class="item">
                <div class="items__image">
                    <img class="image" src="/assets/images/Sample_photos/sport_water_tunnel.jpg">
                </div>
            </div>
            <div class="item">
                <div class="items__image">
                    <img class="image" src="/assets/images/Sample_photos/sport_water_tunnel.jpg">
                </div>
            </div>
            <div class="item">
                <div class="items__image">
                    <img class="image" src="/assets/images/Sample_photos/sport_water_tunnel.jpg">
                </div>
            </div>
            <div class="item">
                <div class="items__image">
                    <img class="image" src="/assets/images/Sample_photos/sport_water_tunnel.jpg">
                </div>
            </div>
            <div class="item">
                <div class="items__image">
                    <img class="image" src="/assets/images/Sample_photos/sport_water_tunnel.jpg">
                </div>
            </div>`
            main.appendChild($sousContainer)
            $sousContainer.innerHTML = $containerImage

        return $sousContainer
    }
}
