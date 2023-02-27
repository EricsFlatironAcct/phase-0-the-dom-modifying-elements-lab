// Write your code here!
const mainMain = document.getElementById("main");
mainMain.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Eric is the champion";
document.body.append(newHeader);