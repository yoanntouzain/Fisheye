function factory(video) {
    switch (video._video) {
        case undefined:
            return new Picture(video)

        default:
            return new Movie(video)

    }
}