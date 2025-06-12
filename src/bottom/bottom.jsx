import bottom from "./bottom.module.css"

import image1 from "../top/images/logo.png"

const Bottom = () => {
    return (
        <div className={bottom.main}>
            <div className={bottom.first_row}>
                <div className={bottom.logo}>
                    <img
                        src={image1}
                        loading="lazy"
                        alt="logo">
                    </img>
                    <div className={bottom.name}>
                        SIBERIAN<br />
                        FURNITURE
                    </div>
                </div>
                <div className={bottom.padding165px}>
                    {/* empty */}
                </div>
                <div className={bottom.phonenumber}>
                    +7 913 912 33656
                </div>
                <div className={bottom.padding52px}>
                    {/* empty */}
                </div>
                <div className={bottom.phoneicon}>
                    <div>
                        ✆
                    </div>
                </div>
                <div className={bottom.padding38px}>
                    {/* empty */}
                </div>
                <div className={bottom.orderbutton}>
                    <div>
                        Заказать проект
                    </div>
                </div>
                <div className={bottom.padding9px}>
                    {/* empty */}
                </div>
                <div className={bottom.up}>
                    <div>
                        ▲ На верх
                    </div>
                </div>
            </div>
            <div className={bottom.firstcolumn}>
                <div className={bottom.nsk}>
                    <div className={bottom.c1}>
                        г. Новосибирск
                    </div>
                    <div className={bottom.adress1}>
                        ул. Сакко и Ванцетти, 77, офис 714
                    </div>
                </div>
                <div className={bottom.brnl}>
                    <div className={bottom.c2}>
                        г. Барнаул
                    </div>
                    <div className={bottom.adress2}>
                        ул. Интернациональная, 122, офис
                    </div>
                    <div className={bottom.asd2}>
                        404
                    </div>
                </div>
                <div className={bottom.omsk}>
                    <div className={bottom.c3}>
                        г. Омск
                    </div>
                    <div className={bottom.adress3}>
                        ул. 70 лет Октября, 25 к3
                    </div>
                    <div className={bottom.asd3}>
                        ТЦ Континент, этаж 3
                    </div>
                </div>
                <div className={bottom.mail}>
                    buro-mebeli@bk.ru
                </div>
                <div className={bottom.copy}>
                    © Buro-mebeli 2023 Все права защищены.
                </div>
                <div className={bottom.inn}>
                    ИНН 540139826105
                </div>
            </div>
            <div className={bottom.secondcolumn}>
                Политика обработки персональных данных
            </div>
            <div className={bottom.column3}>
                <div className={bottom.aaaaa}>
                    Каталог
                </div>
                <div className={bottom.c32}>
                    Портфолио
                </div>
                <div className={bottom.c33}>
                    Дизайнерам
                </div>
                <div className={bottom.c34}>
                    Новости
                </div>
                <div className={bottom.c35}>
                    Контакты
                </div>
            </div>
            <div className={bottom.column4}>
                <div className={bottom.c41}>
                    О нас
                </div>
                <div className={bottom.c42}>
                    Производство
                </div>
                <div className={bottom.c43}>
                    Отдел сервиса
                </div>
                <div>
                    Спец предложения
                </div>
                <div className={bottom.c45}>
                    Блог
                </div>
            </div>
            <div className={bottom.column5}>
                <div>
                    Instagram
                </div>
                <div>
                    Вконтакте
                </div>
            </div>
        </div>
    )
}

export default Bottom;