function updateCount() {
    updateCharacterCount();
    updateTokenCount();
    updateWordCount();
}

function updateWordCount() {
    var text = document.getElementById("text-box").value;
    var wordCount = text.split(" ").length;
    document.getElementById("word-count").innerHTML = wordCount;
}

function updateCharacterCount() {
    var text = document
        .getElementById("text-box")
        .value.trim()
        .replace(/\s+/g, " ");
    var characterCount = text.length;
    document.getElementById("character-count").innerHTML = characterCount;
}

function updateTokenCount() {
    var text = document
        .getElementById("text-box")
        .value.trim()
        .replace(/\s+/g, " ");
    var characterCount = text.length;
    var tokenCount = parseInt(characterCount / 4);
    document.getElementById("token-count").innerHTML = tokenCount;
}