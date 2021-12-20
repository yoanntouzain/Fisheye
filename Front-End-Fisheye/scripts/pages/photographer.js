//Mettre le code JavaScript lié à la page photographer.html
async function getPhotograph() {
    const photograph = [
        {
            "name": "Mimi Keel",
            "id": 243,
            "city": "London",
            "country": "UK",
            "tagline": "Voir le beau dans le quotidien",
            "portrait": "Portrait_Nora.jpg"
        },
    ]
    return ({
        photograph: [...photograph]})
}

async function displayDatas(photograph) {
    const photographHeader = document.querySelector(".photograph-header");

    photograph.forEach((photographer) => {
        const photographerModels = photographerPage(photographer);
        const userPage = photographerModels.getUserPage();
        console.log("bonjour");
        photographHeader.appendChild(userPage);
        console.log("en revoir");
    });
};

async function inite() {
    // Récupère les datas des photographes
    const { photograph } = await getPhotograph();
    displayDatas(photograph);
};

inite();

//les vignettes
async function getMedia() {
    const media = [
        {
            "id": 95234343,
            "photographerId": 243,
            "title": "Rainbow Bird",
            "image": "Animals_Rainbow.jpg",
            "likes": 59,
            "date": "2019-07-02",
            "price": 60
        },
        {
            "id": 623534343,
            "photographerId": 243,
            "title": "Lonesome",
            "image": "Travel_Lonesome.jpg",
            "likes": 88,
            "date": "2019-02-03",
            "price": 45
        },
        {
            "id": 2534342,
            "photographerId": 243,
            "title": "Seaside Wedding",
            "image": "Event_SeasideWedding.jpg",
            "likes": 25,
            "date": "2019-06-21",
            "price": 45
        },
        {
            "id": 398847109,
            "photographerId": 243,
            "title": "Raw Black Portrait",
            "image": "Portrait_Background.jpg",
            "likes": 55,
            "date": "2019-06-20",
            "price": 45
        },
        {
            "id": 65235234,
            "photographerId": 243,
            "title": "Boulder Wedding",
            "image": "Event_PintoWedding.jpg",
            "likes": 52,
            "date": "2019-06-25",
            "price": 45
        },
        {
            "id": 2525345343,
            "photographerId": 243,
            "title": "Wednesday Potrait",
            "image": "Portrait_Wednesday.jpg",
            "likes": 34,
            "date": "2019-04-07",
            "price": 45
        },
    ]
    return ({
        media: [...media]})
}

async function displayMedias(media) {
    const mediasection = document.querySelector(".media-section");

    media.forEach((medias) => {
        const mediasModels = mediaFactory(medias);
        const userPages = mediasModels.getUserCardMedia();
        console.log("bonjour");
        mediasection.appendChild(userPages);
        console.log("en revoir");
    });
};

async function initial() {
    // Récupère les datas des images
    const { media } = await getMedia();
    displayMedias(media);
};

initial();
