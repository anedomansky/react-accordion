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
    children?: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    open, onSelect, classNameItem, classNameSummary, classNameContent, id, summary, children,
}) => {
    const onItemClick = () => {
        if (onSelect && id) {
            onSelect(!open, id);
        }
    };

    return (
        <details id={id} className={`accordion-item ${classNameItem}`} open={open}>
            <summary className={`accordion-item__summary ${classNameSummary}`} onClick={onItemClick}>{summary}</summary>
            <div className={`accordion-item__content ${classNameContent}`}>{children}</div>
        </details>
    );
};

export default AccordionItem;
