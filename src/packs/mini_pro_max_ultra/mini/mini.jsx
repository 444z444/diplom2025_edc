import mini from "./mini.module.css"

const Mini = () => {
    return (
        <div className={mini.main}>
            <div className={mini.border}>
                <div className={mini.label}>
                    MINI
                </div>
                <div className={mini.about}>
                    <div>
                        Коммерческое предложение<br />
                        по вашему дизайн-проекту
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Бесплатно до двух изделий в<br />
                        коммерческом предложении
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Быстрый способ узнать<br />
                        примерную стоимость вашей<br />
                        будущей мебели<br />
                    </div>
                </div>
                <div className={mini.button}>
                    Оставить заявку
                </div>
            </div>
        </div>
    )
}

export default Mini;