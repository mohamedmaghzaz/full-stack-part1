import React from 'react';
import ReactDOM from 'react-dom/client';
import { Content } from './Content';
import { Header } from './Header';
import Total from './Total';


const App = () => {

  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  const part1 = 'Fundamentals of React';
  const part2 = 'Using props to pass data';
  const part3 = 'State of a component';

  return (
    <div>
      <Header  />
      <Content parte1={part1} parte2={part2} parte3={part3}
      ejercicio1={exercises1} ejercicio2={exercises2} ejercicio3={exercises3} />
      <Total ejercicio1={exercises1} ejercicio2={exercises2} ejercicio3={exercises3} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
