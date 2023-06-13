
window.onload = () => {

    //current_url: Displays the current page's full url
    var current_url = document.getElementById("current_url");
    var render_header = document.getElementById("main_header");
    var render_footer = document.getElementById('main_footer');

    if(current_url){
        current_url.innerHTML = window.location.href;
    }

    if(render_header){
        fetch("src/html/header.html").then((response) => response.text()).then((template) => {
            const rendered_header = Mustache.render(template);
            render_header.outerHTML = rendered_header;
        });
    }

    if(render_footer){
        fetch("src/html/footer.html").then((response) => response.text()).then((template) => {
            const rendered_footer = Mustache.render(template);
            render_footer.outerHTML = rendered_footer;
        });
    }


}