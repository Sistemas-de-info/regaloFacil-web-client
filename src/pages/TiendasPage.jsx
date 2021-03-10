import { Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

import useTiendasListFetch from "../hooks/useTiendasListFetch";
import TiendaCardWidget from "../widgets/tiendas/TiendaCardWidget";

const DIAGRAM_LOAD='diagramLoad' //Session Storage item
const TiendasListPage = () => {
	const [tiendas, deleteTienda] = useTiendasListFetch();
    const history=useHistory();
	const handleClickDelete = (tiendaId) => {
		deleteTienda(tiendaId);
	};
    const handleClickShowProducts = (tienda) => {
		sessionStorage.setItem(DIAGRAM_LOAD,'true');
		sessionStorage.setItem('tipoParticipante','host');
        history.push(`/productos/${tienda.id}`);
	};
	return (
		<div style={{ padding: "3vh" }}>
			<Grid container spacing={2}>
				{tiendas.map((tienda) => (
					<TiendaCardWidget
						nombre={tienda.datos.nombre}
						descripcion={'tienda.datos.descripcion'}
						handleClickDelete={() => handleClickDelete(tienda.id)}
                        handleClickBegin={() => handleClickShowProducts(tienda)}
					></TiendaCardWidget>
				))}
			</Grid>
		</div>
	);
};

export default TiendasListPage;