let loopTimer;

function writeText(text, index) {
    if(index === 0) {
        document.getElementById("text").textContent = "";
    }
    if(index < text.length) {
        document.getElementById("text").textContent += text.charAt(index);
    }
    else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout(() => writeText(text, ++index), 50);
}

writeText("Chollum ami sob chocolate niye😊", 0);