function updateCount(){updateCharacterCount(),updateTokenCount(),updateWordCount()}function updateWordCount(){var t=document.getElementById("text-box").value.split(" ").length;document.getElementById("word-count").innerHTML=t}function updateCharacterCount(){var t=document.getElementById("text-box").value.trim().replace(/\s+/g," ").length;document.getElementById("character-count").innerHTML=t}function updateTokenCount(){var t=parseInt(document.getElementById("text-box").value.trim().replace(/\s+/g," ").length/4);document.getElementById("token-count").innerHTML=t}