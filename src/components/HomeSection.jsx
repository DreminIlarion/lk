import React, { useState } from 'react';
import styles from './Form.module.css';
import Form from './Form.jsx'; 
const HomeSection = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(true); // Показать форму при клике
    };

    return (
        <section className="home">
            <div className="content">
                {isFormVisible && <Form />}
            </div>
        </section>
    );
};

export default HomeSection;
