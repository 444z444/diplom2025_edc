import rp from "./rp.module.css"

import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"



const Rp = () => {
    return (
        <div className={rp.main}>
            <div className={rp.label}>
                Реализованные проекты
            </div>
            <div className={rp.images}>
                <div className={rp.img1}>
                    <img
                        src={image1} loading="lazy" alt="image1"></img>
                </div>
                <div className={rp.img2}>
                    <img
                        src={image2} loading="lazy" alt="image2"></img>
                </div>
                <div className={rp.img3}>
                    <img
                        src={image3} loading="lazy" alt="image3"></img>
                </div>
            </div>
            <div className={rp.allproj}>
                Смотреть все проекты →
            </div>
            <div className={rp.zapis}>
                <b>
                    Записаться на консультацию к дизайнеру
                </b>
            </div>
            <div className={rp.name}>
                <div className={rp.text1}>
                    Ваше имя
                </div>
            </div>
            <div className={rp.empty}>
                {/* empty */}
            </div>
            <div className={rp.number}>
                <div className={rp.text2}>
                    Ваш телефон
                </div>
            </div>
            <div className={rp.empty}>
                {/* empty */}
            </div>
            <div className={rp.sign}>
                <div className={rp.text3}>
                    <b>
                        Записаться на консультацию

                    </b>
                </div>
            </div>
        </div>
    )
}

export default Rp;