import { useState } from "react";
import top from "./top.module.css";
import OrderModal from "./OrderModal";
import image1 from "./images/logo.png";

const Top = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const handleSubmit = (formData) => {
        console.log("Заявка отправлена:", formData);
        // Тут будет отправка данных на сервер (мы добавим её позже)
    };

    return (
        <div className={top.main}>
            <div className={top.logo}>
                <img
                    className={top.image}
                    src={image1}
                    loading="lazy"
                    alt="Buro Logo"
                />
                <div className={top.namebrand}>
                    <div>SIBERIAN</div>
                    <div>FURNITURE</div>
                </div>
            </div>
            <div className={top.about}>
                <div>О нас</div>
                <div>Портфолио</div>
                <div>Каталог</div>
                <div>Дизайнерам</div>
                <div>Контакты</div>
            </div>
            <div className={top.buttons}>
                <div className={top.call}>✆</div>
            </div>
            <button className={top.order} onClick={handleOpenModal}>
                Заказать проект
            </button>

            {/* Модальное окно */}
            <OrderModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
        </div>
    );
};

export default Top;
