window.onload = () => {

    let data = "{username=helloworld}";
    let url = "https://script.google.com/macros/s/AKfycbzw7uxapqtbVNuTi360p9aN8DCjF8o8CtweU04B68yYe-KdPWSh84Tgrl4EDwZoI2qN/exec";

    //We want post requests
    async function postData(data){

        try{
            const resp = await fetch(url, {
                method:"POST",
                redirect:"follow",
                headers:{
                    "Content-Type": "text/plain;charset=utf-8",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(data),
            });

            const result = await resp.json;
            console.log("Success!",result)
        } catch(e){
            console.log(`Error posting data to ${url}`,e)
        }

    }

    postData(data);

}