const reffered = document.getElementById("refferedby");
const otherText = document.getElementById("other-text");
const otherTextLabel = document.getElementById("other-text-label");

function otherTextpopup() {
    console.log(reffered.value)
    if (reffered.value == "Other") {
       otherText.style.display = "block";
       otherTextLabel.style.display = "block";
    }else if(reffered.value == "Magic") {
        otherText.style.display = "block";
        otherTextLabel.style.display = "block";
    }else {
        otherText.value = "";
        otherText.style.display = "none";
        otherTextLabel.style.display = "none";
    }
}
reffered.addEventListener("change", otherTextpopup);