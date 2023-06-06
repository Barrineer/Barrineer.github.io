window.onload = () => {

    //index js

    function changeText(){
        document.getElementById("b1").innerText = "Bye";
    }

    //404 js
    var url_404 = document.getElementById("404_url");

    if(url_404){
        url_404.innerHTML = window.location.href;
    }
    
}