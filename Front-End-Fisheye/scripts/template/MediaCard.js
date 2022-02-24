class MediaCard {
    constructor(media) {
        this._media = media

        this.div = document.createElement('div')
    }
    createMediaCard(){
        throw new Error('must implente')
    }
}
class Picture extends MediaCard {
    constructor(media) {
        super(media)
    }

    createMediaCard() {
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
                <p class="like-count">${this._media.title}</p>
            </div>
            <div class="numberLike">
                <p class="likes">${this._media.likes}</p>
                <svg class="heart" viewBox="0 0 241.59736 220.05746">
                    <g transform="translate(-175.32265,-1696.4765)">
                        <path d="m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z" />
                    </g>
                </svg>
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


    createMediaCard() {
        const $article = document.createElement( 'article' )

        const mediaCard =
        `<a href="#" alt="lien vers image" class="vignette">
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
                <svg class="heart" viewBox="0 0 241.59736 220.05746">
                    <g transform="translate(-175.32265,-1696.4765)">
                        <path d="m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z" />
                    </g>
                </svg>
            </div>
        </div>`
        $article.innerHTML = mediaCard
        return $article
    }
}


class LeCarouselPicture extends MediaCard {
    constructor(media) {
        super(media)
    }
    createMediaCard() {
        const $sousContainer = this.div
        $sousContainer.setAttribute("class", "item")

        const $containerImage =
            `<div class="items__image">
                    <img src="${this._media.image}" class="image">
            </div>
            <div class="description">
                <p class="titre">
                    ${this._media.title}
                </p>
            </div>`
            $sousContainer.innerHTML = $containerImage

        return $sousContainer
    }
}

class LeCarouselMovie extends MediaCard {
    constructor(media) {
        super(media)
    }
    createMediaCard() {
        const $sousContainer = this.div
        $sousContainer.setAttribute("class", "item")

        const $containerImage =
            `<div class="items__image">
                <video controls>
                    <source src="${this._media.video}" type="video/mp4">
                </video>
            </div>`
            $sousContainer.innerHTML = $containerImage

        return $sousContainer
    }
}