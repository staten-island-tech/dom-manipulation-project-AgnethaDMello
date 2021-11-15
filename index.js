const DOMSelectors = {
    title: document.getElementById("title"),
    artist: document.getElementById("artist"),
    url: document.getElementById("url"),
    submit: document.querySelector(".btn"),
    form: document.getElementById("form")
};

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
    DOMSelectors.submit.insertAdjacentHTML("afterend", `<p> ${titleInput}</p>`);
    DOMSelectors.title.value = "";
    console.log(titleInput)
});

DOMSelectors.submit.addEventListener("click", function () {
    let artistInput = DOMSelectors.artist.value;
    DOMSelectors.submit.insertAdjacentHTML("afterend", `<p> ${artistInput}</p>`);
    DOMSelectors.artist.value = "";
    console.log(artistInput)
});

DOMSelectors.submit.addEventListener("click", function () {
    let urlInput = DOMSelectors.url.value;
    DOMSelectors.submit.insertAdjacentHTML("afterend", `<p> ${urlInput}</p>`);
    DOMSelectors.url.value = "";
    console.log(urlInput)
});