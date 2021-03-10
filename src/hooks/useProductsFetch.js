import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductProvider from "../providers/product.provider";

const useSavedRoomsFetch=()=>{
    const [products, setProducts] = useState([]);
    const {tiendaId}=useParams();
    useEffect(() => {
        getAllProductsOfShop()
        return () => {
           
        };
    }, []);
    const  getAllProductsOfShop=async()=>{
       const roomsJSON= await ProductProvider.getOfTienda(tiendaId);
        setProducts(roomsJSON.products);
    }
    const deleteTienda=async(productId)=>{
        await ProductProvider.delete(productId);
        getAllProductsOfShop();
    }
    return [products,deleteTienda,getAllProductsOfShop];
}
export default useSavedRoomsFetch