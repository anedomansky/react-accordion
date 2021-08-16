import React from 'react';
import AccordionItem from '../accordion-item/AccordionItem';
import './Accordion.scss';

interface Props {
    heading: string;
}

const Accordion: React.FC<Props> = ({ heading }) => (
    <section className="accordion">
        <h2 className="accordion__heading">{heading}</h2>
        <AccordionItem />
    </section>
);

export default Accordion;
