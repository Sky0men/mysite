import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/1.jpg'
import Img2 from '../assets/2.jpg'
import Img3 from '../assets/3.jpg'
import Img4 from '../assets/4.jpg'

export default function CarouselBox() {
    return (
      <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Img1}
                    alt="ferrari"
                />
                <Carousel.Caption>
                    <h3>Ferrari</h3>
                    <p>На протяжении всей своей истории, компания участвует в различных гонках, особенно в Формуле-1, где она имеет наибольший успех. Эмблема «Феррари» — гарцующий жеребец на жёлтом фоне.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Img2}
                    alt="nissan"
                />
                <Carousel.Caption>
                    <h3>Nissan GTR</h3>
                    <p>Этот зверюга обходил круг на Нюрбургринге за 7 минут 38 секунд. Это была запись, которую показали Nissan в начале презентации данного автомобиля. Годом позже так и вовсе побили прошлый результат-7 минут 26 секунд.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Img3}
                    alt="lambo"
                />
                <Carousel.Caption>
                    <h3>Lamborgini</h3>
                    <p>Первоначально компания планировала выпустить лишь 4 тысячи экземпляров этой модели, но её итоговый тираж превысил это число более чем вдвое — 10 тысяч машин, что сделало Авентадор самой успешной моделью в истории марки.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Img4}
                    alt="mclaren"
                />
                <Carousel.Caption>
                    <h3>McLaren</h3>
                    <p>McLaren 720S — спортивный автомобиль, созданный британским автопроизводителем McLaren Automotive. Впервые был показан на Женевском автосалоне 2017 году. Пришел на смену McLaren 650S. При этом во время закрытой премьеры до этой, были проданы 400 автомобилей в особом исполнений.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    );
}
