const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let container = document.getElementById("container");
const autore = "author"

posts.forEach((element) =>{

    //DICHIARAZIONE CONTENITORE
    let padre = document.createElement("div");
    padre.className = "post";

    //DICHIARAZIONE HEADER
    let primoFiglio = document.createElement("div");
    primoFiglio.className = "post__header";

    //dichiarazione elementi dell'header
    let primoContainer = document.createElement("div");
    primoContainer.className = "post-meta";

    let primoContent = document.createElement("div");
    primoContent.className = "post-meta__icon";
    primoContent.innerHTML = `<img class="profile-pic" src="${element["author"].image}" alt="Phil Mangione">`;

    let primoContent1 = document.createElement("div");
    primoContent1.className = "post-meta__data";
    primoContent1.innerHTML = '<div class="post-meta__author">'+element["author"].name+'</div><div class="post-meta__time">4 mesi fa</div>';

    //ASSEMBLO L'HEADER
    primoContainer.append(primoContent);
    primoContainer.append(primoContent1);
    primoFiglio.append(primoContainer);


    //DICHIARAZIONE MAIN TEXT   
    let secondoFiglio = document.createElement("div");
    secondoFiglio.className = "post__text";
    secondoFiglio.innerHTML = `${element["content"]}`;


    //DICHIARAZIONE MAIN IMAGE
    let terzoFiglio = document.createElement("div");
    terzoFiglio.className = "post__image";
    terzoFiglio.innerHTML = '<img src="'+element["media"]+'" alt="">'

    //DICHIARAZIONE FOOTER
    let quartoFiglio = document.createElement("div");
    quartoFiglio.className = "post__footer";

    //dichiarazione elementi del footer
    let secondoContainer = document.createElement("div");
    secondoContainer.className = "likes js-likes";

    let secondoContent = document.createElement("div");
    secondoContent.className = "likes__cta";

    let like = document.createElement("a");
    like.className = "like-button  js-like-button";
    like.setAttribute = ("href", "#");
    like.setAttribute = ("data-postid", "1");
    like.innerHTML = '<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>';
    like.innerHTML += '<span class="like-button__label">Mi Piace</span>'

    let secondoContent1 = document.createElement("div");
    secondoContent1.className = "likes__counter";
    secondoContent1.innerHTML = 'Piace a <b id="like-counter-1" class="js-likes-counter">'+element["likes"]+'</b> persone';

    //ASSEMBLO FOOTER
    secondoContent.append(like);

    secondoContainer.append(secondoContent);
    secondoContainer.append(secondoContent1);
    
    quartoFiglio.append(secondoContainer);

    //ASSEMBLO L'INTERO BLOCCO
    padre.append(primoFiglio);
    padre.append(secondoFiglio);
    padre.append(terzoFiglio);
    padre.append(quartoFiglio);

    //INSERIMENTO BLOCCO NELLA PAGINA
    container.append(padre);
});
