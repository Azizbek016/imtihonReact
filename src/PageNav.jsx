import youtube from './img/youtube.png'
import vj from './img/vj.png'
import fes from './img/fes.png'
import insta from './img/insta.png'
import { Link,  } from "react-router-dom";

function PageNav() {
    return (
        <>
            <div className="pageNav">
                <div className="pageNav_boxs">
                    <h1 style={{ cursor: "pointer" }}>MOVEE</h1>
                    <p>Политика
                        конфиденциальнности</p>
                    <p>Соглашение на обработку персональных данных</p>
                </div>
                <div className="pageNav_boxs">
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
                <div className="pageNav_boxsw">
                    <article className="icns">
                        <a href="https://www.youtube.com/"> <img src={youtube} alt="" /></a>
                        <a href="https://vk.com/"><img src={vj} alt="" /></a>
                        <a href="https://www.facebook.com/?locale=ru_RU"><img src={fes} alt="" /></a>
                        <a href="https://www.instagram.com/"><img src={insta} alt="" /></a>
                    </article>

                    <a href="https://movee.ru/"><p>hello@movee.ru</p></a>
                </div>
                <div className="pageNav_boxs">
                    <button>Обратный звонок</button>
                    <p style={{ cursor: "pointer" }}>8 (800)-080-12-13
                    </p>
                </div>
            </div>
        </>
    )
}




export default PageNav;