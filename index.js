window.onload = () => {

    let data = "{username=helloworld}";
    let post_url = "https://script.google.com/macros/s/AKfycbzw7uxapqtbVNuTi360p9aN8DCjF8o8CtweU04B68yYe-KdPWSh84Tgrl4EDwZoI2qN/exec";
    let get_url = post_url + "?username=helloworld";

    //We want post requests
    async function postData(data){

        try{
            const resp = await fetch(post_url, {
                method:"POST",
                body: JSON.stringify(data),
            });

            const result = await resp.json;
            console.log("Success!",result)
        } catch(e){
            console.log(`Error posting data to ${post_url}`,e)
        }

    }

    async function getData(){
        try{
            const res = await fetch(get_url);
            const result = await res.json;
            console.log("Success",result);
        } catch(e){
            console.log("Error getting data",e);
        }
        
    }
    postData(data);
    //getData();

}