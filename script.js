function updateCount() {
  updateCharacterCount(), updateTokenCount(), updateWordCount();
}
function updateWordCount() {
  var text = document.getElementById("text-box").value.split(" ").length;
  document.getElementById("word-count").innerHTML = text;
}
function updateCharacterCount() {
  var text = document
    .getElementById("text-box")
    .value.trim()
    .replace(/\s+/g, " ").length;
  document.getElementById("character-count").innerHTML = text;
}
function updateTokenCount() {
  var text = parseInt(
    document.getElementById("text-box").value.trim().replace(/\s+/g, " ")
      .length / 4
  );
  document.getElementById("token-count").innerHTML = text;
}

var banners = document.querySelectorAll(".banner");

banners.forEach(function (banner) {
  banner.addEventListener("click", function () {
    window.open("https://getshopgpt.com", "_blank");
  });
});