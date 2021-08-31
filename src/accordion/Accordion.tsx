import React from 'react';
import AccordionItem, { AccordionItemProps } from '../accordion-item/AccordionItem';
import './Accordion.scss';

interface Props {
    heading?: string;
    allowMultipleOpen?: boolean;
    onSelect?: () => void;
    classNameContainer?: string;
    classNameHeading?: string;
    children: React.ReactElement;
}

const Accordion: React.FC<Props> = ({
    heading, allowMultipleOpen, onSelect, classNameContainer, classNameHeading, children,
}) => {
    const getChildren = () => React.Children.map(
        children,
        (child: React.ReactElement<AccordionItemProps>) => {
            if (child.type === AccordionItem) {
                return child;
            }
            return null;
        },
    );

    return (
        <section className={`accordion ${classNameContainer}`}>
            {heading && <h2 className={`accordion__heading ${classNameHeading}`}>{heading}</h2>}
            <AccordionItem open summary="Summary1" onSelect={onSelect}>
                Accordion-Content 1
            </AccordionItem>
            <AccordionItem summary="Summary2" onSelect={onSelect}>
                <p>Accordion-Content 2</p>
            </AccordionItem>
            <AccordionItem summary="Summary3" onSelect={onSelect}>
                <span>Accordion-Content 3</span>
            </AccordionItem>
        </section>
    );
};

export default Accordion;
