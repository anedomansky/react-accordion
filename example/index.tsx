import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from '../src/accordion/Accordion';
import '../src/index.scss';

const App: React.FC = () => (
    <div>
        <Accordion heading="Accordion" />
    </div>
);

ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('app'),
);
