import React from 'react';
import ReactDOM from 'react-dom';
import EmpleadoList from './components/empleado-list';

let empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "http://media.comicbook.com/2016/07/machamp-190620-60x60.jpg" },
  { id: 2, fullName: "Astryd Valles", title: "CMO", department: "Marketing", pic: "http://www.yaconic.com/wp-content/uploads/2015/10/volver-al-futuro-entrada-60x60.jpg" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "http://s2.dmcdn.net/C68G2/60x60-DPz.jpg" },
  { id: 4, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "http://s1.dmcdn.net/YaF78/60x60-0TY.jpg" },
  { id: 5, fullName: "Marte Pérez", title: "Frontend Dev", department: "Engineering", pic: "http://media.comicbook.com/2016/07/machamp-190620-60x60.jpg" }
];

ReactDOM.render(
  <EmpleadoList listado={empleados} />,
  document.getElementById('application')
);
