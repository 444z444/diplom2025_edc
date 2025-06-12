import katalog from "./katalog.module.css"

import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.jpg"
import image5 from "./images/image5.jpg"
import image6 from "./images/image6.png"
import image7 from "./images/image7.jpg"
import image8 from "./images/image8.jpg"
import image9 from "./images/image9.jpg"
import image10 from "./images/image10.jpg"
import image11 from "./images/image11.jpg"
import image12 from "./images/image12.jpg"

const Katalog = () => {
    return (
        <div className={katalog.main}>
            <div className={katalog.maingroup}>
                <div className={katalog.label}>
                    Каталог
                </div>
                <div className={katalog.about}>
                    <div className={katalog.about1}>
                        <div>
                            Кухни
                        </div>
                        <div>
                            Гостиные
                        </div>
                        <div>
                            Прихожие
                        </div>
                        <div>
                            Шкафы
                        </div>
                        <div>
                            Кабинеты
                        </div>
                        <div>
                            Детские
                        </div>
                        <div>
                            Спальни
                        </div>
                        <div>
                            Гардеробные
                        </div>
                        <div>
                            Ванные комнаты
                        </div>
                        <div>
                            Прачечные
                        </div>
                    </div>
                    <div className={katalog.about2}>
                        <div>
                            Кладовые
                        </div>
                        <div>
                            Библиотеки
                        </div>
                        <div>
                            Декоративная мебель
                        </div>
                    </div>
                </div>
                <div className={katalog.images}>
                    <div className={katalog.row1}>
                        <div className={katalog.r1i1}>
                            <img
                                src={image1} loading="Lazy" alt="image1">
                            </img>
                        </div>
                        <div className={katalog.r1i2}>
                            <img
                                src={image2} loading="lazy" alt ="image2">
                            </img>
                        </div>
                        <div className={katalog.r1i3}>
                            <img
                                src={image3} loading="lazy" alt="image3">
                            </img>
                        </div>
                    </div>
                    <div className={katalog.row2}>
                        <div className={katalog.r2i1}>
                            <img
                                src={image4} loading="lazy" alt="image4">
                            </img>
                        </div>
                        <div className={katalog.r2i2}>
                            <img
                                src={image5} loading="lazy" alt="image5">
                            </img>
                        </div>
                        <div className={katalog.r2i3}>
                            <img
                                src={image6} loading="lazy" alt="image6">
                            </img>
                        </div>
                    </div>
                    <div className={katalog.row3}>
                        <div className={katalog.r3i1}>
                            <img
                                src={image7} loading="lazy" alt="image7">
                            </img>
                        </div>
                        <div className={katalog.r3i2}>
                            <img
                                src={image8} loading="lazy" alt="image8">
                            </img>
                        </div>
                        <div className={katalog.r3i3}>
                            <img
                                src={image9} loading="lazy" alt="image9">
                            </img>
                        </div>
                    </div>
                    <div className={katalog.row4}>
                        <div className={katalog.r4i1}>
                            <img
                                src={image10} loading="lazy" alt="image10">
                            </img>
                        </div>
                        <div className={katalog.r4i2}>
                            <img
                                src={image11} loading="lazy" alt="image11">
                            </img>
                        </div>
                        <div className={katalog.r4i3}>
                            <img
                                src={image12} loading="lazy" alt="image12">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Katalog;