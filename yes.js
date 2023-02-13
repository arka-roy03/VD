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
        document.getElementById("chocolates").style.display = "block";
        return false;
    }
    loopTimer = setTimeout(() => writeText(text, ++index), 50);
}

writeText("Here...haveth your chocolates😁😁😁", 0);