import { useEffect, useState } from "react";
import TiendaProvider from "../providers/tienda.provider";

const useSavedRoomsFetch=()=>{
    const [tiendas, setTiendas] = useState([]);
    useEffect(() => {
        getAllRooms()
        return () => {
           
        };
    }, []);
    const  getAllRooms=async()=>{
       const roomsJSON= await TiendaProvider.getAll();
        setTiendas(roomsJSON.shopList);
       
    }
    const deleteTienda=async(roomId)=>{
        await TiendaProvider.delete(roomId);
        getAllRooms();
    }
    return [tiendas,deleteTienda];
}
export default useSavedRoomsFetch