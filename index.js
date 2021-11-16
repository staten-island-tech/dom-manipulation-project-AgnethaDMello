const DOMSelectors = {
    title: document.getElementById("title"),
    artist: document.getElementById("artist"),
    url: document.getElementById("url"),
    submit: document.querySelector(".btn"),
    form: document.getElementById("form"),
    display: document.getElementById("display"),
};

function add(album) {
    DOMSelectors.display.insertAdjacentHTML("afterbegin",
        `<div class = "display-card">
    <img class = "img" src = "${album.url}"/>
    <h2 class ="artistname">"${album.artist}"</h2>
    <h3 class = "albumtitle">"${album.title}"</h3>
    <button class = "remove-btn"> Remove Album </button>
    </div>`
    );
};

function clear(album) {
    DOMSelectors.title.value = "";
    DOMSelectors.artist.value = "";
    DOMSelectors.url.value = "";
}

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    let album = {};
    album.title = document.getElementById("title").value;
    album.artist = document.getElementById("artist").value;
    album.url = document.getElementById("url").value;
    console.log(album);
    add(album);
    clear(album);

    const removeBtns = document.querySelectorAll(".display-card");
    removeBtns.forEach((btn) => btn.addEventListener("click", function (e) {
        e.target.parentElement.remove();
    }));
});