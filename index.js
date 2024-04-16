window.onload = () => {

    let data = "{username=helloworld}";
    let post_url = "https://script.google.com/macros/s/AKfycbyf6mVEpxdzKgreGXlH3pYCvv5MHPU8swIKYeIA211sNcVTi_i18QsPYffANtZIHEOk/exec"; //V3
    let get_url = post_url + "?username=helloworld";

    /* Comparison - Apps Script VS MongoDB
    ___________Apps Script______________ (Slow, slighly)
    - More secure since urls cannot be directly accessed that are used for processing data. No visibility of access keys.
    - slower load time
    - About 600k requests per month
    - Not directly connected to the db, may be slower fetching data
    - Each function can run for at most 6 minutes.
    - Can set triggers to preload longer functions and cache that data.

    ___________MongoDB________________
    - NOT SECURE. You NEED to send an authorization key no matter what, thus it would be forced to be put here and that would NOT be secure.
    - Closer to db and has faster load times
    - 1 Million requests per month, but they count for both db r/w and function calls

    Will continue using Apps Script for security. Might use functions in conjuction with Apps Script for faster execution.
    */

    //We want post requests
    async function postData(data){

        try{
            const resp = await fetch(post_url, {
                method:"POST",
                body: JSON.stringify(data),
            });

            const result = await resp.text();
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