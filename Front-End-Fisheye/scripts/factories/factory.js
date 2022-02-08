function factory(video) {
    const $mediaSection = document.querySelector(".media-section")
    switch (video._video) {
        case undefined:
            return $mediaSection.appendChild(new Picture(video).createMediaCardPicture())

        default:
            return $mediaSection.appendChild(new Movie(video).createMediaCardMovie())

    }
}