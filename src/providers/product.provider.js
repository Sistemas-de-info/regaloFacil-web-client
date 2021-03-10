import urlProvider from "./url.provider";

const url = urlProvider;
class ProductProvider {

    static async getOfTienda(tiendaId) {
        let headers= this.getHeaders();
        console.log('tienda:',tiendaId);
        let config = {
            method: 'GET',
            headers:headers,
           
        }
         let res = await fetch(`${url}/shopProducts/${tiendaId}`, config);
        let json = await res.json();
        
        return json
    }

    static async crear(body) {
        let headers= this.getHeaders();
      
        let config = {
            method: 'POST',
            headers:headers,
            body:body
        }
         let res = await fetch(`${url}/product`, config);
        let json = await res.json();
        
        return json
    }
    static async crearConImagen(body) {
       
        for (var pair of body.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        let headers= {
            'Authorization': 'Bearer '+localStorage.getItem('token')
        } //Para subir imagenes no se debe usar el getheaders();
        let config = {
            method: 'POST',
            headers:headers,
            body:body
        }
         let res = await fetch(`${url}/productWithImage`, config);
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

export default ProductProvider