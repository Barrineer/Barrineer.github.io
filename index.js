
window.onload = () => {

    /**
     * Just a test function
     */
    function changeText(){
        document.getElementById("b1").innerText = "Bye";
    }

    //current_url: Displays the current page's full url
    var current_url = document.getElementById("current_url");
    var render = document.getElementById('template');

    if(current_url){
        current_url.innerHTML = window.location.href;
    }

    if(render){
        renderHello();
    }


}