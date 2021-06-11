import Ejemplo2 from "./Mis_trabajos/Ejemplo2/Principal";
import Ejemplo3 from "./Mis_trabajos/Ejemplo3/Principal";
import Ejemplo4 from "./Mis_trabajos/Ejemplo4/Principal";
import Ejemplo5 from "./Mis_trabajos/Ejemplo5/Principal";
import Ejemplo7 from "./Mis_trabajos/Ejemplo7/Principal";
import Ejemplo9 from "./Mis_trabajos/Ejemplo9/Principal";
import Ejemplo10 from "./Mis_trabajos/Ejemplo10/Principal";
import Ejemplo11 from "./Mis_trabajos/Ejemplo11/Principal";
import Home from "./Mis_trabajos/Home/Home";
import "./styles.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <nav className="navegation__container">
                <ul className="navegation__content">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/ejemplo1">Ej1</Link>
                    </li>
                    <li>
                        <Link to="/ejemplo2">Ej2</Link>
                    </li>
                    <li>
                        <Link to="/ejemplo3">Ej3</Link>
                    </li>
                    <li>
                        <Link to="/ejemplo4">Ej4</Link>
                    </li>
                    <li>
                        <Link to="/ejemplo5">Ej5</Link>
                    </li>
                    <li>
                        <Link to="/ejemplo6">Ej6</Link>
                    </li>
                    <li>
                        <Link to="/ejemplo7">Ej7</Link>
                    </li>
                    <li>
                        <Link to="/ejemplo8">Ej8</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/ejemplo1">
                    <Ejemplo2 />
                </Route>
                <Route exact path="/ejemplo2">
                    <Ejemplo3 />
                </Route>
                <Route exact path="/ejemplo3">
                    <Ejemplo4 />
                </Route>
                <Route exact path="/ejemplo4">
                    <Ejemplo5 />
                </Route>
                <Route exact path="/ejemplo5">
                    <Ejemplo7 />
                </Route>
                <Route exact path="/ejemplo6">
                    <Ejemplo9 />
                </Route>
                <Route exact path="/ejemplo7">
                    <Ejemplo10 />
                </Route>
                <Route exact path="/ejemplo8">
                    <Ejemplo11 />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
