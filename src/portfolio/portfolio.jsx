import portfolio from "./portfolio.module.css"

import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.jpg"



const Portfolio = () => {
    return (
        <div className={portfolio.main}>
            <div className={portfolio.borders}>
                <div className={portfolio.label}>
                    <div>
                        Портфолио
                    </div>
                </div>
                <div className={portfolio.row_image_1}>
                    <div className={portfolio.image11}>
                        <img
                            src={image1} loading="lazy" alt="image1">
                        </img>
                        <div className={portfolio.text}>
                            {/* WILLART */}
                        </div>
                    </div>
                    <div className={portfolio.image12}>
                        <img
                            src={image2} loading="lazy" alt="image2">
                        </img>
                        <div className={portfolio.text}>
                            {/* BALANCE */}
                        </div>
                    </div>
                </div>
                <div className={portfolio.row_image_2}>
                    <div className={portfolio.image21}>
                        <img
                            src={image3} loading="lazy" alt="image3">
                        </img>
                        <div className={portfolio.text}>
                            {/* FREEDOM */}
                        </div>
                    </div>
                    <div className={portfolio.image22}>
                        <img
                            src={image4} loading="lazy" alt="image4">
                        </img>
                        <div className={portfolio.text}>
                            {/* OASIS */}
                        </div>
                    </div>
                </div>
                <div className={portfolio.allprojects}>
                    <div>
                        Смотреть все проекты →
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;