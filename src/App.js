import './App.css';
import 'styled-components';
import React, {useState, useEffect} from 'react';
import DataTable , {createTheme} from 'react-data-table-component';

const data = [
  {
    id: 1,
    name: 'Daniel',
    patadaA: 6,
    patadaB: 10,
    patadaC: 20,
    patadaD: 9,

  },

  {
    id: 2,
    name: 'Miguel',
    patadaA: 4,
    patadaB: 8,
    patadaC: 10,
    patadaD: 16,
  },

  {
    id: 3,
    name: 'Ivan',
    patadaA: 8,
    patadaB: 10,
    patadaC: 25,
    patadaD: 20,
  },
]

const columns = [
  {
    name: 'ID',
    selector: row => row.id
  },

  {
    name: 'Competidor',
    selector: row => row.name
  },

  {
    name: 'Patada en la cabeza',
    selector: row => row.patadaA
  },

  {
    name: 'Patada al pecho',
    selector: row => row.patadaB
  },

  {
    name: 'Patada a la cabeza con giro',
    selector: row => row.patadaC
  },

  {
    name: 'Patada al pecho con giro',
    selector: row => row.patadaD
  },

]

createTheme('custom', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

const MyComponent = () => (
  <DataTable
    title="Arnold Movies"
    columns={columns}
    theme="solarized"
  />
);

function App() {
  return (
    <div className="App">
      <h1>Sistema de calificaciones (prototipo)</h1>

      <DataTable
        columns={columns}
        data={data}
        theme='custom'

      />
    </div>
  );
}

export default App;
