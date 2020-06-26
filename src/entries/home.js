import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

const homeContainer = document.getElementById('home-container')

hydrate( <Home data={data} />, homeContainer);