import React from 'react';
import AccordionContent from '../accordion-content/AccordionContent';
import AccordionItem from '../accordion-item/AccordionItem';
import AccordionSummary from '../accordion-summary/AccordionSummary';

interface AccordionComposition {
    Item: React.FC;
    Summary: React.FC;
    Content: React.FC;
}

interface Props {
    classNameContainer?: string;
    dataTestId?: string;
}

const Accordion: React.FC<Props> & AccordionComposition = ({ classNameContainer, dataTestId, children }) => (
    <section className={classNameContainer ?? 'accordion'} data-testid={dataTestId}>
        {children}
    </section>
);

Accordion.Item = AccordionItem;
Accordion.Summary = AccordionSummary;
Accordion.Content = AccordionContent;

export default Accordion;

// TODO: add unit tests
// TODO: add missing props
