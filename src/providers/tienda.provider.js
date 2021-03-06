import urlProvider from "./url.provider";

const url = urlProvider;
class TiendaProvider {

    static async create(body) {
        let headers= this.getHeaders();
        
        let config = {
            method: 'POST',
            headers:headers,
            body: JSON.stringify(body)
        }
        let res = await fetch(`${url}/room/create`, config);
        let json = await res.json();
        
        return json
    }


    static async delete(codigo) {
        let headers= this.getHeaders();
        
        let config = {
            method: 'DELETE',
            headers:headers
        }
        let res = await fetch(`${url}/room/delete/${codigo}`, config);
        let json = await res.json();
        return json
    }
    static async getAll (body){
        let headers= this.getHeaders();
        
        let config = {
            method: 'GET',
            headers:headers,
            body: JSON.stringify(body)
        }
        let res = await fetch(`${url}/shops`, config);
        let json = await res.json();
        return json
    }

    static getHeaders=()=>{
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('token')
        }
    }
   
}

export default TiendaProvider