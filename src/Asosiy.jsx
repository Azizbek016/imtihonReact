import page1_img1 from './img/asosiyPage1_img2.png'
import page1_img2 from './img/asosiyPage1_img1.png'
import page1_icn1 from './img/asosiyPage1_ic1.png'
import page1_icn2 from './img/asosiyPage1_ic2.png'
import page1_icn3 from './img/asosiyPage1_ic3.png'
import page1_img3 from './img/tel.ic.png'
import page4_img1 from  './img/page4.png'
import youtube from './img/youtube.png'
import vj from './img/vj.png'
import fes from './img/fes.png'
import insta from './img/insta.png'
function Asosiy() {
    return (
        <>
            <div className="page1_rr">
                <div className="page1">
                    <div className="left">
                        <div className="page1_left-boxs1">
                            <h1>Квартирные переезды </h1>
                            <p>По Москве и области</p>
                            <button>Заказать</button>
                        </div>
                        <div className="page1_left-boxs2">
                            <div className='page1_left-boxs1-child1'>
                                <img className='page1_right-icni1' src={page1_icn1} alt="" />
                                <span>Бережная <br /> упаковка</span>
                            </div>
                            <div className='page1_left-boxs1-child2'>
                                <img className='page1_right-icn2' src={page1_icn2} alt="" />
                                <span>Бережная <br /> упаковка</span>
                            </div>
                            <div className='page1_left-boxs1-child3'>
                                <img className='page1_right-icn3' src={page1_icn3} alt="" />
                                <span>Бережная <br /> упаковка</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img className='page1_right-img1' src={page1_img1} alt="" />
                        <img className='page1_right-img2' src={page1_img2} alt="" />
                        <div className='tel_div1'>
                            <div className='tel_div2'>
                                <img className='page1_right-img3' src={page1_img3} alt="" /></div></div>

                    </div>
                </div>
            </div>
            <div className="page2">
                <h1>Как это происходит?</h1>
                <div className="page2_boxss">
                    <div className="page2_boxss-child1">
                        <div className="page2_boxss-child1_in1"><p>01</p></div>
                        <div className="page2_boxss-child1_in2">
                            <h3>Оценка объема предстоящих работ</h3>
                            <p>Стоимость переезда зависит от количества комнат, вещей и мебели. </p>
                        </div>
                    </div>
                    <div className="page2_boxss-child1">
                        <div className="page2_boxss-child1_in1"><p>02</p></div>
                        <div className="page2_boxss-child1_in2">
                            <h3>Оценка объема предстоящих работ</h3>
                            <p>Стоимость переезда зависит от количества комнат, вещей и мебели. </p>
                        </div>
                    </div>
                    <div className="page2_boxss-child1">
                        <div className="page2_boxss-child1_in1"><p>03</p></div>
                        <div className="page2_boxss-child1_in2">
                            <h3>Оценка объема предстоящих работ</h3>
                            <p>Стоимость переезда зависит от количества комнат, вещей и мебели. </p>
                        </div>
                    </div>
                    <div className="page2_boxss-child1">
                        <div className="page2_boxss-child1_in1"><p>04</p></div>
                        <div className="page2_boxss-child1_in2">
                            <h3>Оценка объема предстоящих работ</h3>
                            <p>Стоимость переезда зависит от количества комнат, вещей и мебели. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page3">
                <h1>Фиксированная стоимость на переезд под ключ  </h1>
                <div className="page3_boxss">
                    <div className="page3_boxss-in">
                        <h2>1-комнатная кв-ра  </h2>
                        <p>1 фургон</p>
                        <p>2 грузчика</p>
                        <p>Переезд за 4 часа</p>
                        <h1>8 490₽ </h1>
                        <button>Заказать</button>
                    </div>
                    <div className="page3_boxss-in">
                    <h2>1-комнатная кв-ра  </h2>
                        <p>1 фургон</p>
                        <p>2 грузчика</p>
                        <p>Переезд за 4 часа</p>
                        <h1>8 490₽ </h1>
                        <button>Заказать</button>
                    </div>
                    <div className="page3_boxss-in">
                    <h2>1-комнатная кв-ра  </h2>
                        <p>1 фургон</p>
                        <p>2 грузчика</p>
                        <p>Переезд за 4 часа</p>
                        <h1>8 490₽ </h1>
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
            <div className="page4">
                <div className="page4_left">
                    <h2>Газель 3 метра </h2>
                    <p>Ширина 2 м</p>
                    <p>Высота 2 м</p>
                    <p>Объем 16 м³</p>
                    <p>Грузоподъемность 1,5 т</p>
                    <button>Заказать</button>
                </div>
                <div className="page4_right">
                    <img src={page4_img1} alt="" />
                </div>
            </div>
            <div className="page5">
                <h1>Отзывы</h1>
                <div className='page5-boxss'>
                    <div className="page5_in">
                        <h2>Ирина</h2>
                        <p>24.03.2019  ⭐⭐⭐⭐⭐</p>
                        <p>Обращение к вам за помощью в переезде <br /> оставило только
                             положительные впечатления. <br /> Хотелось отметить замечательного водителя <br /> газели Алексея. Были трудности с заездом <br />
                            во двор, он проявил себя как компетентный <br />
                            и профессиональный сотрудник, за что ему <br /> огромное...  </p>
                            <p>Читать полностью </p>
                    </div>
                    <div className="page5_in">
                    <h2>Светлана Васильевна </h2>
                        <p>24.03.2018  ⭐⭐⭐⭐⭐</p>
                        <p>Обращение к вам за помощью в переезде <br /> оставило только
                             положительные впечатления. <br /> Хотелось отметить замечательного водителя <br /> газели Алексея. Были трудности с заездом <br />
                            во двор, он проявил себя как компетентный <br />
                            и профессиональный сотрудник, за что ему <br /> огромное...  </p>
                            <p>Читать полностью </p>
                    </div>
                    <div className="page5_in">
                    <h2>Ольга Петрова</h2>
                        <p>24.03.2020  ⭐⭐⭐⭐⭐</p>
                        <p>Обращение к вам за помощью в переезде <br /> оставило только
                             положительные впечатления. <br /> Хотелось отметить замечательного водителя <br /> газели Алексея. Были трудности с заездом <br />
                            во двор, он проявил себя как компетентный <br />
                            и профессиональный сотрудник, за что ему <br /> огромное...  </p>
                            <p>Читать полностью </p>
                    </div>
                </div>
                <button>Все отзывы</button>
            </div>
            <div className="page5_6-text">
                <h1>Закажи  переезд прямо сейчас</h1>
                <p>
                Мы перезвоним в течении 10 секунд
                </p>
            </div>
            <div className="login_page">
             <div className="login_left">
             <input type="text" placeholder='Ваше имя'/>
             <input type="text" placeholder='Телефон' />
             </div>
             <div className="login_right">
             <div><input type="checkbox" /><span>Даю согласие на обработку данных</span></div>
                <button>Перезвонить мне</button>

             </div>
            </div>
            <div className="page7">
                <div className="page7_boxs">
                    <article className="page7_boxs-child1">
                        <h1>MOVEE</h1>
                    </article>
                    <article className="page7_boxs-child1">
                        <p> ✔   Москва, Волгоградский пр-т, 38</p>
                        <p> ✔   8 (800)-080-12-13</p>
                        <p> ✔   hello@movee.ru</p>
                    </article>
                    <article className="page7_boxs-child3">
                       <a href="https://www.youtube.com/"> <img src={youtube} alt="" /></a>
                        <a href="https://vk.com/"><img src={vj} alt="" /></a>
                        <a href="https://www.facebook.com/?locale=ru_RU"><img src={fes} alt="" /></a>
                        <a href="https://www.instagram.com/"><img src={insta} alt="" /></a>
                    </article>
                </div>
            </div>

        </>
    )
}


export default Asosiy;