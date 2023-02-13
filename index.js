let loopTimer;
let c = 0;
let texts = ["Aiiii...no te hat dao ken😭😭", "ABAR!! Baron korlam na no korte😡", "Yes kornaaaaaaaa😥"];

function writeText(text, index) {
    if(index === 0) {
        document.getElementById("yes").style.display = "none";
        document.getElementById("no").style.display = "none";
        document.getElementById("text").textContent = "";
    }
    if(index < text.length) {
        document.getElementById("text").textContent += text.charAt(index);
    }
    else {
        clearTimeout(loopTimer);
        document.getElementById("yes").style.display = "inline";
        document.getElementById("no").style.display = "inline";
        return false;
    }
    loopTimer = setTimeout(() => writeText(text, ++index), 50);
}

function yes() {
    window.location.replace("yes.html");
}

function no() {
    c++;
    if(c === 4) {
        window.location.replace("no.html");
        return false;
    }
    let gif = "gifs/no" + c + ".webp";
    document.getElementById("gif").src = gif;
    writeText(texts[c-1], 0);
}

document.getElementById("yes").addEventListener("click", yes);
document.getElementById("no").addEventListener("click", no);

writeText("Wilst thou beest my julientine🥺?", 0);
