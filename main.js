var jojos=["a1.jpg","a2.png","a3.png","a4.jpg",
"a5.png","a6.jpg","a7.png","a8.jpg","a9.png","a10.jpg",
"a11.png","a12.png","a13.webp","a14.jpg"];
var nomes=["Família Joestar","George Joestar","Jonathan Joestar","Erina Pendleton","George Joestar","Lisa Lisa(Elizabeth Joestar)",
"Joseph Joestar","Suzi Q","Holy Kujo","Jotaro Kujo",
"Josuke Higashikata","Shizuka","Mãe da Jolyne","Jolyne Cujoh"];
var i = 0;

function update() {
    i++;
    var numbersOfFamilyMemberInArray = 14
        if(i > numbersOfFamilyMemberInArray)
    {
        i = 0;
    }
    var updatedImage = jojos[i];
    var updatedName = nomes[i];
    document.getElementById("joestars").src = updatedImage;
    document.getElementById("familia").innerHTML = updatedName;
}