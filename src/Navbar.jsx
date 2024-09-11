import { Link, Outlet } from "react-router-dom";
import PageNav from "./PageNav";

function Navbar() {
    return (
        <>
            <main>
                <nav>
                    <div className="NavChild1">

                       <Link to='/'>
                       <h1>MOVEE</h1>
                       </Link>
                    </div>
                    <div className="NavChild2">
                        <ul>

                            <Link to='/Seni'><li>
                                Цены
                            </li></Link>

                           <Link to='/Avtopark'>
                           <li className="li">Автопарк</li>
                           </Link>
                           <Link to='/Otzif'>
                           <li className="li">Отзывы</li>
                           </Link>
                           <Link to='/LoginPage'>
                           <li className="li">Контакты</li>
                           </Link>
                        </ul>
                    </div>
                    <div className="NavChild3">
                        <h3>8(800)-080-12-13</h3>
                    </div>
                </nav>
            </main>
            <header>
                {<Outlet />}
            </header>
            <footer>
                <PageNav/>
            </footer>
        </>
    )
}
export default Navbar;