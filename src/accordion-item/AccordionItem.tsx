import React from 'react';
import './AccordionItem.scss';

interface Props {
    open?: boolean;
    onChange?: () => void;
    classNameItem?: string;
    classNameSummary?: string;
    classNameContent?: string;
    id?: string;
}

const AccordionItem: React.FC<Props> = ({
    open, onChange, classNameItem, classNameSummary, classNameContent, id,
}) => (
    <details id={id} className={`accordion-item ${classNameItem}`} open={open}>
        <summary className={`accordion-item__summary ${classNameSummary}`}>Accordion-Summary</summary>
        <div className={`accordion-item__content ${classNameContent}`}>Accordion-Content</div>
    </details>
);

export default AccordionItem;
