import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import logo from './logo.svg';
import './App.css';

import { LessonsList, LessonEdit, LessonCreate, addLessonDataProvider } from './lessons';

const dataProvider = addLessonDataProvider(simpleRestProvider(process.env.REACT_APP_API_ROOT));
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="lessons" list={LessonsList} edit={LessonEdit} create={LessonCreate} />
    </Admin>
);

export default App;

