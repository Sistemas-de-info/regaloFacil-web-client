import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavbarWidget from "./widgets/navbar/NavbarWidget";

import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import TiendasListPage from "./pages/TiendasPage";
import ProductosPage from "./pages/ProductosPage";
function App() {
	const [vistas, setvistas] = useState([
		{ id: "1", ruta: "/tiendas", texto: "Menu Principal", icono: "home" },
	]);
	// const [showChat, setShowChat] = useState(false);
	// const [toggleDrawerChat, settoggleDrawerChat] = useState(()=>);
	return (
		<BrowserRouter>
			<NavbarWidget
				parentStateVistas={vistas}
				// isChatActive={showChat}
			></NavbarWidget>
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Redirect to="/tiendas" />
					</Route>
					{/* <Route path="/mainMenu" component={MenuPrincipalPage} />
					<Route path="/misPizarras" component={SavedRoomsPage} /> */}

					<Route path="/login" component={() => <LoginPage></LoginPage>} />
					<Route path="/tiendas" component={() => <TiendasListPage/>} />
					<Route path="/productos/:tiendaId" component={() => <ProductosPage/>} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
