function redirect() {
    alert('Now you will be redirected to a blank page!');
    window.location.href="about:blank";
}

function delContent(){
    var elementText = document.getElementById("textElem");
    elementText.innerHTML = "";
}

var openNewPage = document.getElementById('newButton');
var delContentPage = document.getElementById('delButton');

openNewPage.addEventListener('click', redirect);
delContentPage.addEventListener('click', delContent);





