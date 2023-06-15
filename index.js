
//window.on
window.onload = () => {

    //current_url: Displays the current page's full url
    //elements
    var current_url = document.getElementById("current_url");
    var render_header = document.getElementById("main_header");
    var render_footer = document.getElementById('main_footer');
    var render_content = document.getElementById('main_content');

    //views
    const view_main_content = {
        "header": [
            {
                "title" : "Projects",
                "attributes" : [
                    {
                        "id":"h_project",
                    }
                ],
                "section" : [
                    {
                        "subtitle":"Academic",
                        "attributes" : [
                            {
                                "id":"s_academic",
                            }
                        ],
                        "project":[
                            {
                                "name":"Bros R Us",
                                "description":"Shopping Cart application created using Java.",
                                "image":"",
                                "link":"",
                            },
                            {
                                "name":"Academic Malware : Keylogger",
                                "description":"Sends the infected users keyboard inputs to the malware owner. Created using Python.",
                                "image":"",
                                "link":"",
                            },
                        ],
                    },
                    {
                        "subtitle":"Personal",
                        "attributes" : [
                            {
                                "id":"s_personal",
                            }
                        ],
                        "project":[
                            {
                                "name":"WIP",
                                "description":"Basic JavaScript game using the html canvas.",
                                "image":"",
                                "link":"",
                            },
                        ],
                    },
                    {
                        "subtitle":"Job Application",
                        "attributes" : [
                            {
                                "id":"s_jobapp",
                            }
                        ],
                        "project":[
                            {
                                "name":"Node.js API",
                                "description":"Created a basic API using Node.js",
                                "image":"",
                                "link":"",
                            },
                        ],
                    },
                ],
                "description": false,
            },
            {
                "title" : "About Me",
                "attributes" : [
                    {
                        "id":"h_about",
                    }
                ],
                "section" : false,
                "description":"Computer Scientist with a passion for all things computer sciency. Graduated from Florida Atlantic University with a Bachelor in Computer Science.",
            },
            {
                "title" : "Experience",
                "attributes" : [
                    {
                        "id":"h_experience",
                    }
                ],
                "section" : false,
                "description":"Experienced as a Full-Stack Developer using the languages HTML, CSS, JavaScript, PHP, and MySQL and frameworks such as WordPress, CodeIgniter, Drupal and Angular.",
            },
        ],
        
    };

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

    if(render_content){
        fetch("src/templates/content.mustache").then((response) => response.text()).then((template) => {
            const rendered_content = Mustache.render(template,view_main_content);
            render_content.outerHTML = rendered_content;
        });
    }

    //Now that the main content is loaded, add the navigation (if any)
    var render_nav = document.getElementById('main_nav');

    if(render_nav){
        fetch("src/templates/nav.mustache").then((response) => response.text()).then((template) => {
            const rendered_nav = Mustache.render(template);
            render_nav.outerHTML = rendered_nav;
        });
    }


}