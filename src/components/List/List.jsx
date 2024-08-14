import React from 'react';
import ListStyle from './List.module.css';
import Card from '../Card/Card';

const List = ({ datos }) => {
  return (
    <table className={ListStyle.styledTable}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Comida</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((person, index) => (
          <Card key={index} {...person} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
