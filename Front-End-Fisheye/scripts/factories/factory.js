function factory(video) {
    switch (video._video) {
        case undefined:
            return new Picture(video)

        default:
            return new Movie(video)

    }
}

function factoryCarousel(video) {
    switch (video._video) {
        case undefined:
            return new LeCarouselPicture(video)

        default:
            return new LeCarouselMovie(video)

    }
}