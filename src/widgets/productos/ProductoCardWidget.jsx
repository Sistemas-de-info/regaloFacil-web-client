import {
	Button,
	Card,
	CardActions,
	CardContent,
    CardMedia,
	Grid,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
});

const ProductoCardWidget = ({
	nombre,
	descripcion,
	imagen: urlImagen,
	handleClickDelete,
	handleClickBegin,
}) => {
	const classes = useStyles();

	return (
		<Grid item xs={3}>
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography variant="h5" component="h3">
						{nombre}
					</Typography>
					<CardMedia
						className={classes.media}
						image={urlImagen}
						title="Product Image"
					/>
					<Typography variant="body2" color="textSecondary" component="p">
						{descripcion}
					</Typography>
				</CardContent>
				<CardActions>
                    
					<Button size="small" onClick={handleClickDelete} color="primary">
						Eliminar
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ProductoCardWidget;
