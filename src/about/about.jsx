import about from "./about.module.css"

import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"



const About = () => {
    return (
        <div className={about.main}>
            <div className={about.group1}>
                <div className={about.group11}>
                    <div className={about.image1}>
                        <img
                            src={image1}
                        loading="Lazy" alt="image1"/>
                    </div>
                    <div className={about.image2}>
                        <img
                            src={image2} loading="Lazy" alt="image2"
                        />
                    </div>
                </div>
                <div className={about.group12}>
                    <div className={about.image3}>
                        <img
                            src={image3} loading="Lazy" alt="image3"
                        />
                    </div>
                </div>
            </div>
            <div className={about.group2}>
                <div className={about.title}>
                    BURO SIBERIAN<br />
                    FURNITURE
                </div>
                <div className={about.textdiv}>
                    <div className={about.text}>
                        Мы сибирская мебельная фабрика. Наша мебель-<br />
                        особенная, она отлична от шаблонных моделей<br />
                        производителей. С момента открытия мы<br />
                        зарекомендовали себя как надежная, динамично<br />
                        развивающаяся компания. BURO-это команда<br />
                        профессионалов. Это более 300 успешных<br />
                        реализованных уникальных проектов. Благодаря<br />
                        совокупности всех факторов мы точно знаем, что вы<br />
                        хотите. Вы доверяете нам главное-уют жилья,<br />
                        атмосферу. Мы-реализуем.
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;