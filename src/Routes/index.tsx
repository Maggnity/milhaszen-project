import * as React from 'react';
import { Routes as Router, Route, Outlet, Link } from "react-router-dom";
import Home from '../Views/Home/_home';
import NoMatch from '../Views/_NoMatch';
import "../scss/main.scss"

export default function Routes() {

    return (



        <Router>
            <Route path="/" /* element={<Layout />} */>
                <Route index element={<Home />} />
                {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
 *              /}
            {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Router>
    )
}
/* 
function Layout() {
    return (
        <div>
            
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above.
<Outlet />
        </div >
    );
} */