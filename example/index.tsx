import React from 'react';
import ReactDOM from 'react-dom';
import AccordionItem from '../src/accordion-item/AccordionItem';
import Accordion from '../src/accordion/Accordion';
import './index.scss';

const App: React.FC = () => (
    <div className="example">
        <Accordion heading="Accordion-Heading" onSelect={(isOpen, id) => console.log(isOpen, id)} dataTestAccordionId="test-accordion">
            <AccordionItem open summary="Summary1" dataTestId="test-item">
                Accordion-Content 1
            </AccordionItem>
            <AccordionItem summary="Summary2">
                <p>Accordion-Content 2</p>
            </AccordionItem>
            <AccordionItem summary="Summary3">
                <span>Accordion-Content 3</span>
            </AccordionItem>
        </Accordion>
    </div>
);

ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('app'),
);
