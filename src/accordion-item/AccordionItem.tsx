import React from 'react';
import './AccordionItem.scss';

const AccordionItem: React.FC = () => (
    <details className="accordion-item">
        <summary className="accordion-item__summary">Accordion-Summary</summary>
        <div className="accordion-item__content">Accordion-Content</div>
    </details>
);

export default AccordionItem;
