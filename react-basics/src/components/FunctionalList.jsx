import React from 'react';
//import { useId } from 'react';

const FunctionalList = () => {
    // const itemsId = useId()
    const items = ['Яблоко', 'Груша', 'Виноград', 'Ананас', 'Апельсин', 'Клубника'];

    return (
        <React.Fragment> {/* Полная форма записи React.Fragment */}
            <h3>Фруктово-ягодный список:</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li> // Ключи через индексы, плохо для мутабельных данных
                    //<li key={itemsId}>{item}</li> // Через хук useId, React 17 версии не позволяет, нужен более современный
                ))}
            </ul>
        </React.Fragment>
    );
};

export default FunctionalList;
