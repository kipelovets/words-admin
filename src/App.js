import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import logo from './logo.svg';
import './App.css';

import { LessonsList, LessonEdit, LessonCreate } from './lessons';

const dataProvider = simpleRestProvider('http://words.docker');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="lessons" list={LessonsList} edit={LessonEdit} create={LessonCreate} />
    </Admin>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;

