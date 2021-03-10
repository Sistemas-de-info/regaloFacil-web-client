import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

import userProductsFetch from "../hooks/useProductsFetch";

import useFormAlert from "../hooks/useFormAlert";
import ProductoCardWidget from "../widgets/productos/ProductoCardWidget";
import CreateProductForm from "../widgets/productos/CreateProductForm";
import TiendaCardWidget from "../widgets/tiendas/TiendaCardWidget";

const DIAGRAM_LOAD = "diagramLoad"; //Session Storage item
const ProductosPage = () => {
	const [productos, deleteTienda,getAllProductsOfShop] = userProductsFetch();
	const { form, setForm, handlers, open, setOpen, text } = useFormAlert(getAllProductsOfShop);
	const history = useHistory();
	const handleClickDelete = (tiendaId) => {
		deleteTienda(tiendaId);
	};
	const handleClickBegin = (tienda) => {
		sessionStorage.setItem(DIAGRAM_LOAD, "true");
		sessionStorage.setItem("tipoParticipante", "host");
		history.push(`/tienda/${tienda.id}`);
	};
	return (
		<div style={{ padding: "3vh" }}>
			<CreateProductForm
				form={form}
				setForm={setForm}
				open={open}
				title={text.title}
				description={text.description}
				handleSubmit={handlers.clickSubmit}
				handleClose={handlers.clickClose}
			></CreateProductForm>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Grid container justify="center">
						<Grid item xs={3}>
							<Button
								fullWidth
								variant="contained"
								onClick={() => {
									setOpen(true);
								}}
								color="primary"
							>
								Crear
							</Button>
						</Grid>
					</Grid>
				</Grid>
				{productos.map((producto) => (
					<ProductoCardWidget
						key={producto.itemId}
						nombre={producto.nombre}
						imagen={producto.imageUrl}
						descripcion={producto.descripcion}
						handleClickDelete={() => handleClickDelete(producto.id)}
						handleClickBegin={() => handleClickBegin(producto)}
					></ProductoCardWidget>
				))}
			</Grid>
		</div>
	);
};

export default ProductosPage;
