import { useState } from 'react'
import styles from "../../../style/components/Main.module.scss"
import { useNavigate } from 'react-router-dom';




export const Main = () => {


    const [name, setName] = useState('');
    const [businessForm, setBusinessForm] = useState('');
    const [activity, setActivity] = useState('');
    const [employeeCount, setEmployeeCount] = useState('');
    const [needManager, setNeedManager] = useState(true);
    const [activeBusiness, setActiveBusiness] = useState(null);
    const [activeActivity, setActiveActivity] = useState(null);
    const [activeEmployee, setActiveEmployee] = useState(null);
    const [errors, setErrors] = useState({
        name: "",
        businessForm: "",
        activity: "",
        employeeCount: "",
        needManager: "",
    })


    const navigate = useNavigate()


    const formBusiness = [
        { name: "ИП" },
        { name: "АО" },
        { name: "ООО" },
        { name: "Самозанятый" },
        { name: "Не указывать" },
    ]

    const formActivity = [
        { active: "Здоровье" },
        { active: "Красота" },
        { active: "Образование" },
        { active: "Право" },
        { active: "Продажи" },
        { active: "Аренда" },
        { active: "Авто" },
        { active: "Спорт" },
        { active: "Досуг" },
        { active: "Услуги" },
        { active: "Общепит" },
        { active: "Совмещённая" },
        { active: "Другое" },
    ]

    const formEmployee = [
        { count: "1" },
        { count: "2-5" },
        { count: "6-10" },
        { count: "10+" },
    ]

    const handleNameChange = (event) => {
        setName(event.target.value);

        setErrors((prevErrors) => ({
            ...prevErrors,
            name: ""
        }))
    };
    const handleEmployeeCountChange = (count) => {
        setEmployeeCount(count);
        setActiveEmployee(count);
    
        // Очистить ошибку, если она была
        setErrors((prevErrors) => ({
            ...prevErrors,
            employeeCount: ''
        }));
    };
    const handleActivityChange = (activityName) => {
        setActivity(activityName);
        setActiveActivity(activityName);
    
        // Очистить ошибку, если она была
        setErrors((prevErrors) => ({
            ...prevErrors,
            activity: ''
        }));
    };
    const handleBusinessFormChange = (businessName) => {
        setBusinessForm(businessName);
        setActiveBusiness(businessName);
    
        // Очистить ошибку, если она была
        setErrors((prevErrors) => ({
            ...prevErrors,
            businessForm: ''
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    

        const newErrors = {...errors};
    
        if(!name){
            newErrors.name = "Введите имя"
        }else{
            newErrors.name = ""
        }

        if (!businessForm) {
            newErrors.businessForm = 'Выберите форму бизнеса';
        } else {
            newErrors.businessForm = '';
        }
    
        if (!activity) {
            newErrors.activity = 'Выберите деятельность';
        } else {
            newErrors.activity = '';
        }
    
        if (!employeeCount) {
            newErrors.employeeCount = 'Выберите количество сотрудников';
        } else {
            newErrors.employeeCount = '';
        }
    
        setErrors(newErrors);
    
        // Проверяем наличие ошибок в локальной переменной
        if (Object.values(newErrors).some((error) => error !== "")) {
            console.log("Ошибка валидации", newErrors);
            return; // Остановить выполнение, если есть ошибки
        }
    
        navigate("/using", {
            state: {
                animate: true,
                Animation: {
                    duration: 500,
                    easing: "ease-in-out"
                }
            }
        });
    };



    return (
        <main className={styles.main}>
            <div className={styles.main__container}>
                <header className={styles.header}>
                    <h1 >Время знакомиться!</h1>
                    <p className={styles.description}>Раскажите о своем бизнесе</p>
                </header>
                <form className={styles.form}  >
                    <div className={styles.name}>
                        <label className={styles.title} htmlFor="name">Ваше имя:</label>
                        <input type="text" id="name" value={name} onChange={handleNameChange} />
                    </div>
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                    <div className={styles.businessForm} >
                        <label className={styles.description}>Форма бизнеса: <div className={styles.question}>?</div></label>
                        <div className={styles.groupBtn}>
                            {formBusiness.map((business, index) => (
                                <button type='button' className={activeBusiness === business.name ? styles.active : styles.btn} onClick={() =>handleBusinessFormChange(business.name)}
                                    key={index}>{business.name}</button>
                            ))}
                        </div>
                        {errors.businessForm && <p className={styles.error}>{errors.businessForm}</p>}
                    </div>
                    <div className={styles.activity}>
                        <label className={styles.description} htmlFor="activity">Деятельность:</label>
                        <div className={styles.groupBtn}>
                            {formActivity.map((a, index) => (
                                <button type='button' className={activeActivity === a.active ? styles.active : styles.btn} onClick={() =>handleActivityChange(a.active)}
                               key={index}>{a.active}</button>
                            ))}
                        </div>
                        {errors.activity && <p  className={styles.error}>{errors.activity}</p>}
                    </div>
                    <div className={styles.employeeCount}>
                        <label className={styles.description} htmlFor="employee-count">Количество сотрудников в штате:</label>
                        <div className={styles.groupBtn} >
                            {formEmployee.map((count, index) => (
                                <button type='button' className={activeEmployee === count.count ? styles.active : styles.btn} onClick={() =>handleEmployeeCountChange(count.count)  } key={index}>{count.count}</button>
                            ))}
                        </div>
                        {errors.employeeCount && <p className={styles.error}>{errors.employeeCount}</p>}
                    </div>
                    <div className={styles.manager}>
                        <label className={styles.description} htmlFor="need-manager">Требуется ли вам личный менеджер для помощи с ONYX CRM?
                            Вся помощь предоставляется бесплатно.</label>
                        <div className={styles.groupBtn}>
                            <button type='button' className={needManager ? styles.active : styles.btn} onClick={() => setNeedManager(true)}>Да</button>
                            <button type='button' className={!needManager ? styles.active : styles.btn} onClick={() => setNeedManager(false)}>Нет</button>
                        </div>
                    </div>

                </form>


                <button className={styles.continuation} onClick={handleSubmit} >Продолжить
                    <div className={styles.arrow}><div></div></div> </button>
            </div>
        </main>
    )
}
