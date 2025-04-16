window.onload = () => {

    let data = "{player=Giron Pecur}";
    let get_url = "https://secure.runescape.com/m=itemdb_rs/api/catalogue/category.json?category=9";

    //We want post requests
    async function getData(){
        try{
            const res = await fetch(get_url);
            const result = await res.json;
            console.log("Success",result);
        } catch(e){
            console.log("Error getting data",e);
        }
        
    }

    getData();

}