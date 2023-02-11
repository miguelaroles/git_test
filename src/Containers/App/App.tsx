import './App.css';
import { Route, Routes } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Home from "../Home/Home";
import List from "../List/List";
import Graph from "../Graph/Graph";
import NotFound from "../NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Wrapper/>}>
                    <Route index element={<Home />} />
                    <Route path="/beers" element={<List/>}/>
                    <Route path="/members" element={<Graph/>}/>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;