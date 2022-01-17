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
        `<a href="#" alt="lien vers image">
            <div>
                <div class="containerMedia">
                    <img src="${this._media.image}" alt=" ">
                </div>
                <div class="description">
                    <div class="titre">
                        <p>${this._media.title}</p>
                    </div>
                    <div class="numberLike">
                        <p class="likes">${this._media.likes}</p>
                        <i class="fas fa-heart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </a>`
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
                <div class="description">
                    <div class="numberLike">
                        <p class="likes">${this._media.likes}</p>
                        <i class="fas fa-heart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </a>`
        $article.innerHTML = mediaCard
        return $article
    }
}