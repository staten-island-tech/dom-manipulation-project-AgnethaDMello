const DOMSelectors = {
    title: document.getElementById("title"),
    artist: document.getElementById("artist"),
    url: document.getElementById("url"),
    submit: Document.querySelector(".btn"),
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let album = {};
    album.title = document.getElementById("title").value;
    album.artist = document.getElementById("artist").value;
    album.url = document.getElementById("url").value;
    console.log(album);
});

DOMSelectors.submit.addEventListener("click", function () {
    let titleInput = DOMSelectors.title.value;
    DOMSelectors.submit.insertAdjacentHTML("beforeend", `<p> ${titleInput}</p>`);
    DOMSelectors.titleInput.value = "";
})