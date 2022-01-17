class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('ERROR!', err))
    }
}

class PhotographersApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.get()
    }
}

class Apis {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('ERROR Apis !!!', err))
    }
}

class MediaApi extends Apis {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getMedia() {
        return await this.get()
    }
}