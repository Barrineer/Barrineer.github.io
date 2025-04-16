window.onload = () => {

    let data = "{player=Giron Pecur}";
    let get_url = "https://secure.runescape.com/m=itemdb_rs/api/catalogue/category.json?category=9";
    let header_data = "{username=helloworld}"

    //We want post requests
    async function getData(){
        try{
            const res = await fetch(get_url, {
                method:"GET",
                headers:JSON.stringify(header_data),
            });
            const result = await res.json;
            console.log("Success",result);
        } catch(e){
            console.log("Error getting data",e);
        }
        
    }

    //getData();

    //Final consensus:
    //It is impossible to only use GitHub Pages as a website for grabbing api calls. You need some sort of backend server to make the api calls and serve them onto a website.
    //The only use for GitHub Pages is for creating static pages ONLY. CORS prevents any api calls using pure js on the frontend unless the server the data it is requesting it 
    //from allows the resource to be shared (unless its your own server, its most likely not allowed).

}