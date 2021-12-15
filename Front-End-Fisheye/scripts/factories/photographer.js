function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
    const picture = `assets/images/Sample_photos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        a.setAttribute("href", "photographer.html");
        a.setAttribute("alt", "Lien vers le photographe");
        article.appendChild(a);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "image du profil du photographe");
        a.appendChild(img);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        a.appendChild(h2);
        const pLocation = document.createElement( 'p' );
        pLocation.setAttribute("class", "location");
        pLocation.innerHTML = city + ", " + country;
        article.appendChild(pLocation);
        const pTagline = document.createElement( 'p' );
        pTagline.setAttribute("class", "tagline");
        pTagline.innerHTML = tagline;
        article.appendChild(pTagline);
        const pPrice = document.createElement( 'p' );
        pPrice.setAttribute("class", "price");
        pPrice.innerHTML = price + "€/jours";
        article.appendChild(pPrice);
        return (article);
    };
    return { data, getUserCardDOM }
}