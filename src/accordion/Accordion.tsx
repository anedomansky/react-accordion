import React from 'react';
import AccordionItem, { AccordionItemProps } from '../accordion-item/AccordionItem';
import './Accordion.scss';

interface Props {
    heading?: string;
    allowMultipleOpen?: boolean;
    onSelect?: (isOpen: boolean, id: string) => void;
    classNameContainer?: string;
    classNameHeading?: string;
    children: React.ReactElement<AccordionItemProps>[];
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

    const items = () => getChildren().map((child, index) => {
        const {
            summary, classNameContent, classNameItem, classNameSummary, id, open,
        } = child.props;

        return (
            <AccordionItem
                key={id}
                summary={summary}
                onSelect={onSelect}
            >
                {children}
            </AccordionItem>
        );
    });

    return (
        <section className={`accordion ${classNameContainer}`}>
            {heading && <h2 className={`accordion__heading ${classNameHeading}`}>{heading}</h2>}
            {items}
        </section>
    );
};

export default Accordion;
