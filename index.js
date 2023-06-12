
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
    var render_header = document.getElementById("main_header");
    var render = document.getElementById('template');

    if(current_url){
        current_url.innerHTML = window.location.href;
    }

    if(render){
        renderHello();
    }

    if(render_header){
        fetch("src/html/header.html").then((response) => response.text()).then((template) => {
            const rendered_header = Mustache.render(template);
            render_header.outerHTML = rendered_header;
        })
        
    }


}