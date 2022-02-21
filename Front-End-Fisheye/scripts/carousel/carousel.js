
class Carousel {
    /**
    * This callback type is called `requestCallback` and is displayed as a global symbol.
    *
    * @callback moveCallbacks
    * @param {number} index
    */


    /**
     * 
     * @param {HTMLElement}  element
     * @param {Object}  options
     * @param {Object}  [options.slidesToScroll=1]  Nombre d'éléments à faire défiler
     * @param {Object}  [options.slidesVisible=1] Nombre d'éléments visible dans un slide
     * @param {boolean}  [options.loop=false] Doit-t-on boucler en fin de carousel
     */
    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {//retourne toutes les propriété et leurs valeurs
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        let children = [].slice.call(element.children)/** Cette variable est égale au premier enfant de l'élément auquel on a fait appel avec une valeur this qui renverra un objet tableau et contiendra une copie du tableau */
        this.isMobile = false
        this.currentItem = 0
        this.moveCallbacks = []

        //Modification du DOM
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel__container')
        this.root.setAttribute('tabindex', '0')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.item = children.map((child) => {
            let item = this.createDivWithClass('carousel__item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.closeWindow()
        this.createNavigation()

        //Evenement
        this.moveCallbacks.forEach(cb => cb(0))
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))
        this.root.addEventListener('keyup', e => {
            if (e.key === 'ArrowRight' || e.key === 'Right') {
                this.next()
            } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
                this.prev()
            }
        })
    }

    /**
     * Applique les bonnes dimensions aux éléments du carousel
     */
    setStyle() {
        let ratio = this.item.length / this.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.item.forEach(item =>
            item.style.width = ((100 / this.slidesVisible) / ratio) + "%"
        )
    }



    closeWindow() {
        this.close = document.createElement( 'bouton' )
        this.close.setAttribute('class', 'modal-close-btn')
        this.close.setAttribute('alt', 'Croix permettant de fermer le diaporama des images')
        this.close.setAttribute('onclick', 'closeModal()')

        this.containerImage =
            `<svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="transparant"/>
            </svg>`
            
        this.root.appendChild(this.close)
            
            this.close.innerHTML = this.containerImage

        return this.close

    }


    createNavigation() {
        let nextButton = this.createDivWithClass('carousel__next')
        let prevButton = this.createDivWithClass('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
        if (this.options.loop === true) {
            return
        }
        this.onMove(index => {
            if (index === 0) {
                prevButton.classList.add('carousel__prev--hidden')
            } else {
                prevButton.classList.remove('carousel__prev--hidden')
            }
            if (this.item[this.currentItem + this.slidesVisible] === undefined) {
                nextButton.classList.add('carousel__next--hidden')
            } else {
                nextButton.classList.remove('carousel__next--hidden')
            }
        })
    }


    next() {
        this.gotoItem(this.currentItem + this.slidesToScroll)
    }

    prev() {
        this.gotoItem(this.currentItem - this.slidesToScroll)
    }

    /**
     * Déplacer le carousel vers l'élément ciblé
     * @param {number} index 
     */
    gotoItem(index) {
        if (index < 0) {
            if (this.options.loop) {
                index = this.item.length - this.slidesVisible
            } else {
                return
            }
            index = this.item.length - this.options.slidesVisible
        } else if (index >= this.item.length || (this.item[this.currentItem + this.slidesVisible] === undefined && index > this.currentItem)) {
            if (this.options.loop) {
                index = 0
            } else {
                return
            }

        }
        let translateX = index * -100 / this.item.length
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }

    /**
     * 
     * @param {moveCallbacks} cb
     */
    onMove(cb) {
        this.moveCallbacks.push(cb)
    }

    onWindowResize() {
        let mobile = window.innerWidth < 800
        if (mobile !== this.isMobile) {
            this.isMobile = mobile
            this.setStyle()
            this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
    }

    /**
    * 
    * @param {string} className
    * @returns {HTMLElement}
    */
    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

    /**
     * 
     * @returns {number}
     */
    get slidesToScroll() {
        return this.isMobile ? 1 : this.options.slidesToScroll
    }

    /**
     * 
     * @returns {number}
     */
    get slidesVisible() {
        return this.isMobile ? 1 : this.options.slidesVisible
    }
}


function bonjour() {
    let eventOnClick = document.querySelectorAll('.vignette')
    eventOnClick.forEach(Vignette => Vignette.addEventListener("click", actionCarousel))
}


function actionCarousel(e) {
    e.preventDefault()
    new Carousel(document.querySelector('#carousel1')), {
        loop: true,
    }
    document.querySelector('#carousel1').style.display = "block"
}

/**Un carousel est une fenetre permettant d'afficher des image et les faire défiler à l'aide du clavier ou de la souris
 * 
 * quand tu clique sur une image une fenetre s'ouvre
 * 1. crée une lightbox qui contiendra mon carousel
 *  1.1 empecher le fonctionnement du Lien
 *  1.2 ouvre la lightbox au moment du clique sur une image
 * 
 * si il veut fermer la fenetre il peut soit cliquer sur la croix en a droite soit utiliser la touche echap du clavier
 * 2. il contiendra une Croix en haut a droite
 *  2.1 cette croix seras cliquable et aura pour fonction de fermer la lightbox
 *  2.2 lorsque la lightbox est ouverte permettre a la touche echap du clavier de le fermer
 * 
 * 3. dans cette fenetre tu affiche toute les image de la page, mais tu montre a l'utilisateur d'abord celle qu'il a cliquer
 * 
 * l'utilisateur peut faire defiler les images soit, en cliquant sur les flèche de chaque coter de l'image soit en utilisant les flèche du clavier
 * 4. crée les fleches pour le defilement
 *  4.1 en mettre une de chaque coter de l'image
 *  4.2 les rendre cliquable
 *  4.3 quand tu clique dessus tu passe a l'image suivant ou précédente suivant la fleche cliquer
 *  4.4 le felche son utilisable avec les fleche du clavier
 * 
 * final: Quand l'utilisateur clique sur image, il affiche le carousel avec l'image sur laquelle il a cliquer. il peut faire defiler les images soit, en cliquant
 *          sur les fleche pour aller a droite ou a gauche, ou a l'aide du clavier. Pour fermer le carousel il pourras soit, cliquer sur la croix, soit utiliser 
 *          la touche echap
 */