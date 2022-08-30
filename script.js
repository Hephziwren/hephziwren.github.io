const imgs = [
    { src: "./assets/Adeleine_Cindius_Dart-loss.png", title: "Adeleine Cindius Dart", desc: "" },
    { src: "./assets/catwoman_x_batman_02-loss.JPG", title: "Catwoman x Batman", desc: "Collab with @misterloon. I drew Catwoman." },
    { src: "./assets/chilling_in_the_carpark_with_friends,_setting_fire_to_bins-loss.png", title: "Chilling in the carpark with friends, setting fire to bins", desc: "" },
    { src: "./assets/finished_new_pfp-loss.png", title: "Profile Picture", desc: "" },
    { src: "./assets/lockscreen-loss.png", title: "Lockscreen", desc: "" },
    { src: "./assets/New_profile_pic_(smiling)-loss.jpg", title: "Smiling Profile Picture", desc: "" },
    { src: "./assets/Of_Kate-loss.png", title: "Of Kate", desc: "" },
    { src: "./assets/perspective_at_a_party_-_Fanta-loss.png", title: "Perspective at a party - Fanta", desc: "" },
    { src: "./assets/Stuck_ugh-loss.JPG", title: "Stuck Ugh", desc: "" },
    { src: "./assets/vampire_with_braces-loss.png", title: "Vampier With Braces", desc: "" },
    { src: "./assets/You_liar-loss.png", title: "You Liar", desc: "" },
    { src: "./assets/Zoe_Wilkins-loss.png", title: "Zoe Wilkins", desc: "" },
];

const columns = document.getElementsByClassName("column");
let dialog = document.getElementById("dialog");
let dialogImg = document.getElementById("dialog__img");
let dialogH3 = document.getElementById("dialog__h3");
let dialogP = document.getElementById("dialog__p");

for (let i = 0; i < imgs.length; i++) {
    let img = new Image();
    img.src = imgs[i].src;
    img.alt = imgs[i].title;
    img.setAttribute("data-index", i);
    img.addEventListener("click", showDialog);
    columns[i % 4].appendChild(img);
}

document.getElementById("dialog__button").addEventListener("click", e => dialog.close());

function showDialog(e) {
    let index = e.target.dataset.index;
    dialogImg.src = e.target.src;
    dialogH3.textContent = imgs[index].title;
    dialogP.textContent = imgs[index].desc;
    dialog.showModal();
}