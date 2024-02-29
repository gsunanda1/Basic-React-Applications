import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelloWorld } from './components/HelloWorld';
import { ChampList } from './components/ChampList';
import Like from './components/Like';
import { Counter } from './components/Counter';
import { RandomName } from './components/RandomName';
import ToDoList from './components/ToDoList';
import RegistrationForm from './components/RegistrationForm';
import RegistrationFormState from './components/RegistrationFormState';
import ProductCounter from './components/ProductCounter';
import ProductCounterWithReducer from './components/ProductCounterWithReducer';
import { Provider } from 'react-redux';
import store from './components/ReduxCounter/store';
import ProductCounterWithRedux from './components/ReduxCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <div>
    {/* <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <ChampList/>
    <Like/> */}
    {/* <Counter CounterName={'Rohan'}/>
    <Counter CounterName={'Siva'}/>
    <Counter CounterName={'Abhi'}/>
  <RandomName/>*/}
    {/* <ToDoList/>  */}
    {/* <RegistrationFormState/> */}
    {/* <ProductCounter/> */}
    <ProductCounterWithRedux/>
  </div>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
