import React from 'react';
import image from '../assets/images/allLogoMusify.png';
//img-logo-musify.png';  
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import ProductsInDb from './ProductsInDb';
import ContentRowProducts from './ContentRowProducts';
import NotFound from './NotFound';
import SearchProducts from './SearchProducts';
import Users from './Users'
import GenresList from './GenresListinDb';
import {Link, Route, Switch} from 'react-router-dom';
import Statistics from './Statistics';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Musify"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                {/* <hr className="sidebar-divider my-0"/> */}

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/"> 
                        {/* Dashboard */}
                        <i className="fas fa-fw fa-tachometer-alt"></i> 
                        <span>Home</span>
                    </Link> 
                </li>

                {/*<!-- Heading -->*/}
                {/* <div className="sidebar-heading">Actions</div> */}

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/GenresList">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Category</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ProductsInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Products</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Users">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Users</span></Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/Search">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Search</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/Statistics">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Statistics (soon)</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/Favorite">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Favorite (soon)</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/Premium">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Premium (soon)</span>
                    </Link>
                </li>
                 
                {/*<!-- Divider -->*/}
                {/* <hr className="sidebar-divider d-none d-md-block"/> */}
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/ProductsInDb">
                <ProductsInDb />
            </Route>
            <Route path="/ContentRowProducts">
                <ContentRowProducts />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/ProductsInDb">
                    <ProductsInDb />
                </Route>
                <Route path="/ContentRowProducts">
                    <ContentRowProducts />
                </Route>
                <Route path="/Search">
                    <SearchProducts />
                </Route>
                <Route path="/Users">
                    <Users />
                </Route>
                <Route path="/GenresList">
                    <GenresList/>
                </Route>
                <Route path="/Statistics">
                    <Statistics/>
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;