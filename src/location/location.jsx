import location from "./location.module.css"
import mapa from "./img/image1.png"
const Location = () => {
    return (
        <div className={location.main}>
            <div className={location.label}>
                Мы находимся здесь
            </div>
            <div className={location.map}>
                <img src={mapa} alt="map" />
            </div>
            <div className={location.label2}>
                Наш адрес: г. Нвосибирск ул. Сакко и Ванцетти д. 77, офис 714
            </div>
            <div className={location.label3}>
                Наши другие фелиалы
            </div>
            <div className={location.label4}>
                г. Барнаул ул. Интернациональная, 122, офис 404
            </div>
            <div className={location.label5}>
                г. Омск ул. 70 лет Октября, 25 к3 ТЦ Континент, этаж 3
            </div>
        </div>
    )
}

export default Location;