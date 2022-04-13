const imgs = [
    { src: "./assets/278216765_996998341021926_6258374670432842178_n.jpg", title: "Picture", desc: "A long description of the art A long description of the art A long description of the art " },
    { src: "./assets/278227793_4947074635390430_4753790350343935391_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278284031_110187734877623_5199219830527013741_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278301137_161553479581742_4761664630371862016_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278306877_478874850604983_4254870354216129447_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278314601_344563184309777_7397575145941950545_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278339645_125061186786445_6897911170007803922_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278359238_688046622315958_2767268722591649447_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278364475_668453764437227_2531432208067764677_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278390951_889000319165994_8022089470594705169_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278391319_1194095524741161_7679275024499230695_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278396105_502821901412906_8106451280265378838_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278433263_379691914053055_3138764704133067544_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278439712_349983687187658_6909757717297602974_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278453420_829174455151761_7494471873713847657_n.jpg", title: "Picture", desc: "A short description of the art" },
    { src: "./assets/278464893_386254473578859_8433708215475563282_n.jpg", title: "Picture", desc: "A short description of the art" },
];

const columns = document.getElementsByClassName("column");
let dialog = document.getElementById("dialog");
let dialogImg = document.getElementById("dialog__img");
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
    dialogImg.src = e.target.src;
    dialogP.textContent = imgs[e.target.dataset.index].desc;
    dialog.showModal();
}