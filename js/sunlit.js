const aboutLink = document.getElementById("about-link");
const findUsLink = document.getElementById("find-us-link");
const ourWorkLink = document.getElementById("our-work-link");
let divsToHide = document.querySelectorAll('.chg-pos');

aboutLink.addEventListener('click', showHiddenDiv);
ourWorkLink.addEventListener('click', showHiddenDiv);
findUsLink.addEventListener('click', showHiddenDiv);

function showHiddenDiv(){
    for (var i=0; i < divsToHide.length; i++){
        divsToHide[i].classList.add('hidden');
    }
    let currnetLink = this.id;
    let theTarget = "";
    switch (currnetLink){
        case "about-link":
            theTarget = document.getElementById("about");
            break;
        case "find-us-link": 
           theTarget = document.getElementById("find-us");  
            break; 
        case "our-work-link":  
            theTarget = document.getElementById("our-work");  
            break;
    }
    theTarget.classList.remove("disp-none");
    if (theTarget.id=="about"){
        typeWriter()
    }
}

const closeButtons = document.querySelectorAll(".fa-times");
for (var i=0; i< closeButtons.length; i++){
    closeButtons[i].addEventListener('click', closeDiv)
}

function closeDiv(){
    var parentId  = this.parentNode.parentNode.parentNode.id;
    var parentDiv = document.getElementById(parentId);
    parentDiv.classList.add('disp-none');
    for (var i=0; i < divsToHide.length; i++){
        divsToHide[i].classList.remove('hidden');
    }
    if (parentId=="about"){
        document.getElementById("about-txt").innerHTML = '';
        j=0;
    }
}
let aboutTxt = `Lorem ipsum dolor sit amet, consectetur adipis cing elit. Aliquam at dignissim dolor, sagittis ornare diam. 
Etiam vitae tempor elit. Nulla consequat semper ullamc orper consec tetur adipiscing elit. Aliquam at dignissim dolor, sagittis ornare diam. 
Etiam vitae tempor elit. Nulla consequat  semper ullamc orper conse ctetur adipiscing elit. Aliquam at dignissim dolor, sagittis ornare diam. 
Etiam vitae tempor elit. Nulla consequat`;
let j = 0; 
function typeWriter(){
    if (j < aboutTxt.length) {
      document.getElementById("about-txt").innerHTML += aboutTxt.charAt(j);
      j++;
      setTimeout(typeWriter, 40);
    }
  }