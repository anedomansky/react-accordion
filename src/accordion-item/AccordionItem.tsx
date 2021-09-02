import React from 'react';
import './AccordionItem.scss';

export interface AccordionItemProps {
    open?: boolean;
    onSelect?: (isOpen: boolean, id: string) => void;
    classNameItem?: string;
    classNameSummary?: string;
    classNameContent?: string;
    id?: string;
    summary: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    open, onSelect, classNameItem, classNameSummary, classNameContent, id, summary, children,
}) => (
    <details id={id} className={`accordion-item ${classNameItem}`} open={open}>
        <summary className={`accordion-item__summary ${classNameSummary}`} onClick={() => onSelect(true, 'test')}>{summary}</summary>
        <div className={`accordion-item__content ${classNameContent}`}>{children}</div>
    </details>
);

export default AccordionItem;
