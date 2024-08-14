import React, { useState } from 'react';

const Form = ({ datos, setDatos, setShow }) => {
    const [person, setPerson] = useState({
        name: "",
        lastname: "",
        food: "",
        age: 0
    });

    const handleChangeName = (event) => {
        setPerson({ ...person, name: event.target.value });
    };

    const handleChangeLastName = (event) => {
        setPerson({ ...person, lastname: event.target.value });
    };

    const handleChangeFood = (event) => {
        setPerson({ ...person, food: event.target.value });
    };

    const handleChangeAge = (event) => {
        setPerson({ ...person, age: event.target.value });
    };

    const handleChangeSubmit = (e) => {
        e.preventDefault();

        // Validación
        if (person.name.length >= 3 && !person.lastname.includes(' ') && person.food.length >= 6 && person.age > 0) {
            setDatos([...datos, person]); // Agregar el objeto directamente
            e.target.reset();
            setShow(true);
        } else {
            alert("Verifica los datos");
        }
    };

    return (
        <form onSubmit={handleChangeSubmit}>
            <label>Nombre : </label>
            <input type="text" onChange={handleChangeName} />
            <label>Apellido : </label>
            <input type="text" onChange={handleChangeLastName} />
            <label>Que cosas te gustan comer?  </label>
            <input type="text" onChange={handleChangeFood} />
            <label>Edad : </label>
            <input type="text" onChange={handleChangeAge} />
            <button type='submit'>Enviar</button>
        </form>
    );
};

export default Form;
