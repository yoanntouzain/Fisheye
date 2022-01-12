
class Media {
    constructor(data) {
        this._id = data.id
        this._photographeId = data.photographeId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
    }

    get id() {
        return this._id
    }

    get photographeId() {
        return this._photographeId
    }

    get title() {
        return this._title
    }
    
    get image() {
        return `assets/images/Sample_photos/Mimi/${this._image}`
    }

    get likes() {
        return this._likes
    }

    get date() {
        return this._date
    }

    get price() {
        return this._price
    }
    
}