import pro from "./pro.module.css"

const Pro = () => {
    return (
        <div className={pro.main}>
            <div className={pro.border}>
                <div className={pro.label}>
                    PRO
                </div>
                <div className={pro.about}>
                    <div>
                        Выезд на замер
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Подборка цветов и<br />
                        материалов
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Коммерческое предложение
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Подойдет для тех, кто хочет<br />
                        точности в своем решении:<br />
                        знать размер, цвета и<br />
                        материалы будущей мебели
                    </div>
                </div>
                <div className={pro.button}>
                    Оставить заявку
                </div>
            </div>
        </div>
    )
}

export default Pro;