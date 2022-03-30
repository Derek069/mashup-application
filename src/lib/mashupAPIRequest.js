const URL = "https://mashup-series-api.herokuapp.com/"

class http{
    static instance = new http()
getSeries = async() => {
    try{
        const request = await fetch (`${URL}series/`)
        const response = await request.json()
        return response
    }catch(err){
        throw new Error(err);
    }
 
}
getSerie = async(id) => {
    try{
        const request = await fetch (`${URL}serie/${id}/`)
        const response = await request.json()
        return response
    }catch(err){
        throw new Error(err);
    }
}
}export default http;
