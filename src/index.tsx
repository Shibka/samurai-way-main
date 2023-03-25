import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);





let a = {
    name: 'Alex',
    age: 20,
    address: {
        city: 'Warsaw',
        country: 'Belarus'
    }
};

let users = [
    {
        name: 'Alex',
        age: 20,
        address: {
            city: 'Warsaw',
            country: 'Belarus'
        }
    },
{
    name: 'Al3ex',
        age: 213,
    address: {
    city: 'Warsaw',
        country: 'Belarus'
}
},
]

let b: Array<number | string>;
b = [1,1,2,3,4,5];
b = ['hfffdf', 'dfdfdfd'] ;
b = [];
b = [true, false]


console.log(users[0].address.city);
