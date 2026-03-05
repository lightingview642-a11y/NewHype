
function copyAddress(id){
const text = document.getElementById(id).innerText;
navigator.clipboard.writeText(text);
alert("Address copied!");
}
