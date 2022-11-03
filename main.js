var jojos=["joestars.jpg","george jonathan.png","jonathan.png","erina.jpg",
"george joseph.png","Lisa Lisa.jpg","joseph.png","Suzi Q.jpg","Holy kujo.png","jotaro.jpg",
"josuke.png","shizuka.png","mãejolyne.webp","jolyne.jpg"];
var nomes=["Família Joestar","George Joestar","Jonathan Joestar","Erina Pendleton","George Joestar","Lisa Lisa(Elizabeth Joestar)",
"Joseph Joestar","Suzi Q","Holy Kujo","Jotaro Kujo",
"Josuke Higashikata","Shizuka","Mãe da Jolyne","Jolyne Cujoh"];
var i = 0;
function click() {
    document.getElementById("joestars").src = jojos[i];
document.getElementById("familia").innerHTML = nomes[i];
    i++;
if (i==14) {
    i=0;
}
}