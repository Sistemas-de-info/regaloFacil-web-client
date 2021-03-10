import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductProvider from "../providers/product.provider";
import { v4 as uuidv4 } from 'uuid';
const useFormAlert = (getAllProductsOfShop) => {
	
	const [open, setOpen] = useState(false);
	const [form, setForm] = useState({
		nombre: "",
		descripcion: "",
		categoria: "",
		imagen: [],
	});
	const text = {
		title: "Crear Producto",
		description: "Rellene los datos por favor",
	};
	const { tiendaId } = useParams();
	const handlers = {
		clickSubmit:async (e) => {
			e.preventDefault();
			let formData = new FormData();
			await enviarForm(formData);
			await getAllProductsOfShop();
			setOpen(false);
		},
		clickClose: () => {
			setOpen(false);
		},
	};
	const enviarForm= async(formData)=>{
		console.log(form.imagen[0]);
		formData.append('id',uuidv4());
		formData.append('nombre',form.nombre);
		formData.append('descripcion',form.descripcion);
		formData.append('image',form.imagen[0]);
		formData.append('tiendaId',tiendaId);
		formData.append('categoriaId',form.categoria);
		await ProductProvider.crearConImagen(formData);
	}
	useEffect(() => {
		return () => {};
	}, [open, form]);
	
	return { form, setForm, handlers, open, setOpen, text };
};
export default useFormAlert;
