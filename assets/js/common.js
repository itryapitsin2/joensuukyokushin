function toggleBackground() {
    var body = document.getElementsByTagName("body")[0];
    var hasClass = body.classList.contains("inverted-colors");
    if (hasClass) {
        body.classList.remove("inverted-colors");
    } else {
        body.classList.add("inverted-colors");
    }

}
