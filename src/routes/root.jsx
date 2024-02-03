import { Outlet, Link } from 'react-router-dom';
import '../css/root.css'



export default function Root(){
    return (<>
        <div className="root">
            <div className="navbar">
                <ul>
                    <li>
                        <Link to={`catalog`} style={{ textDecoration: 'none', color: 'white'}}>Catalog</Link>
                    </li>
                    <li>
                    <Link to={`about`} style={{ textDecoration: 'none', color: 'white'}}>About</Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                <Outlet/>
            </div>
            <footer>
            </footer>
        </div>
    </>);
}