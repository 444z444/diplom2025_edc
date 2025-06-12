import max from "./max.module.css"

const Max = () => {
    return (
        <div className={max.main}>
            <div className={max.border}>
                <div className={max.label}>
                    MAX
                </div>
                <div className={max.about}>
                    <div>
                    Выезд на замер
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                    Подборку цветов и<br />
                    материалов
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                    Концепция мебели
                    </div>

                    <div>
                        •
                    </div>
                    <div>
                        Эскиз
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Комерческое предложение
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Подойдет для тех, кто хочет<br />
                        получить проект под ключ с<br />
                        последней реализацией.<br />
                        Удобно и без лишних<br />
                        движений
                    </div>
                </div>
                <div className={max.button}>
                    Оставить заявку
                </div>
            </div>
        </div>
    )
}

export default Max;