import ultra from "./ultra.module.css"

const Ultra = () => {
    return (
        <div className={ultra.main}>
            <div className={ultra.border}>
                <div className={ultra.label}>
                    ULTRA
                </div>
                <div className={ultra.about}>
                    <div>
                        Полная разработка<br />
                        дизайн-проекта
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Привлечение<br />
                        профессиональной<br />
                        строительной бригады
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Комплексная меблировка<br />
                        вашего жилья
                    </div>
                    <div>
                        •
                    </div>
                    <div>
                        Вам не придётся искать<br />
                        подрядчиков, так как вы<br />
                        заказываете все в одном<br />
                        месте
                    </div>
                    
                </div>
                <div className={ultra.button}>
                    Оставить заявку
                </div>
            </div>
        </div>
    )
}

export default Ultra;