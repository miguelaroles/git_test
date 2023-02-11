import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import "./Home.css";
import {NavLink} from "react-router-dom";


const Home = () => {
    return(<section>
        <div className="container">
            <div className="grid-layout-container">
                <GridLayout
                    gap={{ rows: 6, cols: 10 }}
                    rows={[
                        { height: 200 },
                    ]}
                    cols={[{ width: "auto" }, { width: "auto" }]}
                >
                    <NavLink to="beers">
                        <GridLayoutItem className="card-wrapper" row={1} col={1}>
                            <span className="number">1</span>
                            <div className="card">
                                <h3>Beers</h3>
                                <p>Réalisation d'une appli affichant le résultat de l'API www.punkapi.com dans une grille (grid) ...</p>
                            </div>
                        </GridLayoutItem>
                    </NavLink>
                    <NavLink to="members">
                        <GridLayoutItem className="card-wrapper" row={1} col={2}>
                            <span className="number">2</span>
                            <div className="card">
                                <h3>Members</h3>
                                <p>Créer une fonction en JS (ou Typescript). Avec un tableau de membres d'un club</p>
                            </div>
                        </GridLayoutItem>
                    </NavLink>
                </GridLayout>
            </div>
        </div>
    </section>);
};

export default Home;