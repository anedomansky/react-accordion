import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from '../src/accordion/Accordion';
import './index.scss';

const App: React.FC = () => (
    <div className="example">
        <Accordion heading="Accordion-Heading" />
    </div>
);

ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('app'),
);
