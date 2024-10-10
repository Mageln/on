import { useState } from "react";
import styles from "../../../style/components/UsingMain.module.scss";
import { useNavigate } from "react-router-dom";


export const UsingMain = () => {


    const [selectedActive,setSelectedActive] = useState([])
    const navigate = useNavigate();


    const typeOfActivity = [
        { using: "Онлайн запись" },
        { using: "Контроль сотрудников" },
        { using: "Аналитика финансов" },
        { using: "Повышение возврата клиентов" },
        { using: "Интеграции (Телефония и т.д)" },
        { using: "Архив всех записей" },
        { using: "Управление клиентской базой" },
        { using: "Система лояльности" },
        { using: "Автоматический подсчет налога" },
        { using: "Подсчет склада" },
        { using: "Обратная связь клиентов" },
        { using: "Уведомления клиентам" },
        { using: "Пока не определились" }
    ];


    const toogleActivetySelection = (activity) => {
        setSelectedActive((prevSelected) => {
            if(prevSelected.includes(activity)) {
                return prevSelected.filter(item => item !== activity)
            }else{
                return [...prevSelected, activity]
            }
        })
    }

    const handleBackClick = () => {
        navigate("/")
    }
    const handleContinueClick = async () => {
        try {
            // Эмуляция отправки данных на сервер
            const response = await fetch('/localhost/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ selectedActivities: selectedActive }),
            });

            if (response.status === 200) {
                // Если сервер ответил статусом 200, делаем редирект на N адрес
                navigate('/next-page'); // Замените '/next-page' на ваш целевой маршрут
            } else {
                console.error('Ошибка при отправке данных на сервер');
            }
        } catch (error) {
            console.error('Ошибка сети или другая проблема:', error);
        }
    };

    return (
        <div className={styles.usingMain}>
            <div className={styles.usingMain__container}>
                <div>
                    <h1>Как вы планируете пользоваться платформой? </h1>
                    <p className={styles.description}>Для того, чтобы завершить настройку под Ваш вид деятельности, будьте добры выбрать из нашего функционала,
                        чем Вы планируете пользоваться. <div className={styles.question}>?</div></p>
                </div>

                <form>
                    <div className={styles.group}>
                        {typeOfActivity.map((activity) => (
                            <button type='button'  className={selectedActive.includes(activity.using) ? styles.active : styles.btn}
                            onClick={() => toogleActivetySelection(activity.using)} key={activity}>{activity.using}</button>
                        ))}
                    </div>
                </form>

                <div className={styles.groupBtn}>
                    <button onClick={handleBackClick} className={styles.btn_back}>Назад</button>
                    <button onClick={handleContinueClick} className={styles.active}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}
