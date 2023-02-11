import {Outlet, NavLink} from "react-router-dom";
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
} from "@progress/kendo-react-layout";
import "./Wrapper.css";

const Wrapper = ()=>{
    return(<section>
        <AppBar className="nav-bar">
            <AppBarSection>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
                    <span className="k-icon k-i-menu" />
                </button>
            </AppBarSection>

            <AppBarSpacer style={{ width: 4 }} />

            <AppBarSection>
                <h1 className="title">Technical test GIT</h1>
            </AppBarSection>

            <AppBarSpacer style={{ width: 32 }} />

            <AppBarSection>
                <div className="link-wrapper">
                    <NavLink to="/"><span>Home</span></NavLink>
                    <NavLink to="beers"><span>Beers</span></NavLink>
                    <NavLink to="members"><span>Members</span></NavLink>
                </div>
            </AppBarSection>

            <AppBarSpacer />
        </AppBar>
        <Outlet/>
    </section>);
};

export default Wrapper;