
window.onload = () => {

    function renderHello() {
        const template = document.getElementById('template').innerHTML;
        const rendered = Mustache.render(template, { name: 'Luke' });
        document.getElementById('target').innerHTML = rendered;
      }
    /**
     * Just a test function
     */
    function changeText(){
        document.getElementById("b1").innerText = "Bye";
    }

    //current_url: Displays the current page's full url
    var current_url = document.getElementById("current_url");

    if(current_url){
        current_url.innerHTML = window.location.href;
    }

}