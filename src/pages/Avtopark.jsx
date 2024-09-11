import qwr11 from '../img/qwer1.png'
import qwr2 from '../img/qwer2.png'
import qwr3 from '../img/qwer3.png'
import qwr4 from '../img/qwer3.png'
import qwr5 from '../img/qwer5.png'
import qwr6 from '../img/qwer6.png'
import taxa from '../img/eee.png'

function Avtopark(){
    return(
        <>
            <div className="AvtoP1">
                <div className="AvtoP_box1">
                    <img src={qwr11} alt="" />
                    <h2>Подробнее⏩⏩</h2>
                </div>
                <div className="AvtoP_box1">
                    <img src={qwr2} alt="" />
                    <h2>Подробнее⏩⏩</h2>
                </div>
                <div className="AvtoP_box1">
                    <img src={qwr3} alt="" />
                    <h2>Подробнее⏩⏩</h2>
                </div>
                <div className="AvtoP_box1">
                    <img src={qwr4} alt="" />
                    <h2>Подробнее⏩⏩</h2>
                </div>
                <div className="AvtoP_box1">
                    <img src={qwr5} alt="" />
                    <h2>Подробнее⏩⏩</h2>
                </div>
                <div className="AvtoP_box1">
                    <img src={qwr6} alt="" />
                    <h2>Подробнее⏩⏩</h2>
                </div>
            </div>
            <div className="AvtoP2">
                <div className="lk_left">
                <h1>
                    Специальное предложение!br <br />
                    Только в ноябре цена <br />
                    340 000 тг 11за м2!
                </h1>
                </div>
                <div className="lk_right">
                <img src={taxa} alt="" />
                </div>
            </div>
            <p className="chiziq">


            </p>
            <h3 className="yy_text">
            © 2021 ЖК «Grand Victoria»
            </h3>
            <p className='yy_text'>Реализация квартир, офисов и парковочных мест производится в соответствии с Законом Республики Казахстан <br /> 
            от 7 апреля 2016 года № 486-V «О долевом участии в жилищном строительстве».
            </p>
        </>
    )
}
export default Avtopark;