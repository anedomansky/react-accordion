import React from 'react';
import AccordionItem from '../accordion-item/AccordionItem';
import './Accordion.scss';

interface Props {
    heading: string;
    allowMultipleOpen?: boolean;
    onSelect?: () => void;
    classNameContainer?: string;
    classNameHeading?: string;
}

const Accordion: React.FC<Props> = ({
    heading, allowMultipleOpen, onSelect, classNameContainer, classNameHeading,
}) => (
    <section className={`accordion ${classNameContainer}`}>
        <h2 className={`accordion__heading ${classNameHeading}`}>{heading}</h2>
        <AccordionItem open />
        <AccordionItem />
        <AccordionItem />
    </section>
);

export default Accordion;
