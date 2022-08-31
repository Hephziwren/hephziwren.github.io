const imgs = [
    { src: "./assets/Adeleine_Cindius_Dart-loss.png", title: "Adeleine Cindius Dart", desc: "" },
    { src: "./assets/catwoman_x_batman_02-loss.JPG", title: "Catwoman x Batman", desc: "Collab with @misterloon. I drew Catwoman." },
    { src: "./assets/chilling_in_the_carpark_with_friends,_setting_fire_to_bins-loss.png", title: "Chilling in the carpark with friends, setting fire to bins", desc: "" },
    { src: "./assets/finished_new_pfp-loss.png", title: "Profile Picture", desc: "" },
    { src: "./assets/Elyon-Vesper-Sachiel-loss.png", title: "Elyon - Vesper - Sachiel", desc: "" },
    { src: "./assets/lockscreen-loss.png", title: "Lockscreen", desc: "" },
    { src: "./assets/New_profile_pic_(smiling)-loss.jpg", title: "Smiling Profile Picture", desc: "" },
    { src: "./assets/Of_Kate-loss.png", title: "Of Kate", desc: "" },
    { src: "./assets/perspective_at_a_party_-_Fanta-loss.png", title: "Perspective at a party - Fanta", desc: "" },
    { src: "./assets/Stuck_ugh-loss.JPG", title: "Stuck Ugh", desc: "" },
    { src: "./assets/vampire_with_braces-loss.png", title: "Vampire With Braces", desc: "" },
    { src: "./assets/You_liar-loss.png", title: "You Liar", desc: "" },
    { src: "./assets/Zoe_Wilkins-loss.png", title: "Zoe Wilkins", desc: "" },
    { src: "./assets/angelie_and_azreal_orange_version-loss.png", title: "Angelie and Azreal", desc: "" },
    { src: "./assets/Grey_wilderdale-loss.png", title: "Gery Wilderdale", desc: "" },
    { src: "./assets/Paris_and_Vincent-loss.png", title: "Paris and Vincent", desc: "" },
    { src: "./assets/semi-realism_practice-loss.png", title: "Semi-Realism Practice", desc: "" },
    { src: "./assets/sona_lamp_blue-loss.png", title: "Sona Lamp (blue)", desc: "" },
    { src: "./assets/sona_lamp_pfp-loss.png", title: "Sona Lamp (green)", desc: "" },
];

const masonry = document.getElementById("art-container");

for (let i = 0; i < imgs.length; i++) {
    const btn = document.createElement("button")
    const img = new Image();

    img.src = imgs[i].src;
    img.alt = imgs[i].title;
    img.setAttribute("data-index", i);
    
    btn.type = "button";
    btn.addEventListener("click", showmodal);

    btn.appendChild(img);
    masonry.appendChild(btn);
}

const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modal__container");
const modalImg = document.getElementById("modal__img");
const modalH3 = document.getElementById("modal__h3");
const modalP = document.getElementById("modal__p");

const hideModal = () => {
    modalContainer.classList.remove("visible");
    modal.classList.remove("visible");
};

document.addEventListener("click", (e) => {
    // Check if close button
    // Or modal backdrop pressed
    if (e.target.matches("#modal__button") ||
        e.target === e.target.closest("#modal__container")
    ) {
        hideModal();
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
        hideModal();
    }
});

document.addEventListener("scroll", () => {
    const btn = document.getElementById("button-top");
    if (window.scrollY > 20) {
        btn.style.opacity = 1;
        btn.style.cursor = "pointer";
    } else {
        btn.style.opacity = 0;
        btn.style.cursor = "default";
    }
})

function showmodal(e) {
    const index = e.target.dataset.index;

    modalImg.src = e.target.src;
    modalImg.alt = imgs[index].title;
    modalH3.textContent = imgs[index].title;
    modalP.textContent = imgs[index].desc;

    modal.classList.add("visible");
    modalContainer.classList.add("visible");
}