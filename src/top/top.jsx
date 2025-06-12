import React, { useState } from "react";
import top from "./top.module.css";
import image1 from "./images/logo.png";

const Top = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        budget: "",
    });

    const botToken = "7742187010:AAFmDcavvEz0K6m75m-vcY6ZtScqZV2EiFo";
    const chatId = "1538487909";

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = `
📌 *Новая заявка!*  
👤 Имя: ${formData.firstName}  
👤 Фамилия: ${formData.lastName}  
📞 Телефон: ${formData.phoneNumber}  
💰 Бюджет: ${formData.budget}₽
        `;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: "Markdown",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Отправлено в Telegram:", data);
                alert("Данные успешно отправлены!");
                setFormData({ firstName: "", lastName: "", phoneNumber: "", budget: "" });
                handleCloseModal();
            })
            .catch((error) => {
                console.error("Ошибка отправки:", error);
                alert("Ошибка при отправке данных.");
            });
    };

    return (
        <div className={top.main}>
            <div className={top.logo}>
                <a href="/main"><img className={top.image} src={image1} loading="lazy" alt="Buro Logo" /></a>
                <div className={top.namebrand}>
                    <div>SIBERIAN</div>
                    <div>FURNITURE</div>
                </div>
            </div>
            <div className={top.about}>
                <a href="/about"><div>О нас</div></a>
                <a href="/portfolio"><div>Портфолио</div></a>
                <a href="/katalog"><div>Каталог</div></a>
                <div>Дизайнерам</div>
                <div>Контакты</div>
            </div>
            <div className={top.buttons}>
                <div className={top.call}>✆</div>
            </div>
            <div className="top-order">
                <button onClick={handleOpenModal}>Заказать проект</button>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Оставьте ваши данные, чтобы мы могли связаться с вами</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Имя"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Фамилия"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Номер телефона"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    placeholder="Бюджет (₽)"
                                    required
                                    min="0"
                                />
                            </div>
                            <button type="submit">Отправить</button>
                        </form>
                        {/* <button className="close-btn" onClick={handleCloseModal}>Закрыть</button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Top;