import React, { useState } from 'react';
import AccordionItem, { AccordionItemProps } from '../accordion-item/AccordionItem';
import './Accordion.scss';

interface Props {
    heading?: string;
    onSelect?: (isOpen: boolean, id: string) => void;
    classNameContainer?: string;
    classNameHeading?: string;
    children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
    dataTestAccordionId?: string;
}

interface AccordionItemState {
    [id: string]: boolean;
}

const Accordion: React.FC<Props> = ({
    heading, onSelect, classNameContainer, classNameHeading, dataTestAccordionId, children,
}) => {
    const [accordionItems, setAccordionItems] = useState<AccordionItemState>({});

    const onItemSelect = (isOpen: boolean, id: string) => {
        if (onSelect) {
            onSelect(isOpen, id);
        }

        setAccordionItems({ ...accordionItems, [id]: isOpen });
    };

    const getChildren = () => React.Children.map(
        children,
        (child: React.ReactElement<AccordionItemProps>) => {
            if (child.type === AccordionItem) {
                return child;
            }
            return null;
        },
    );

    const items = getChildren().map((child, index) => {
        const {
            summary, classNameContent, classNameItem, classNameSummary, id, open, dataTestId,
        } = child.props;

        const itemId = id || `item-id-${index}`;

        return (
            <AccordionItem
                key={itemId}
                id={itemId}
                summary={summary}
                onSelect={onItemSelect}
                classNameContent={classNameContent}
                classNameItem={classNameItem}
                classNameSummary={classNameSummary}
                open={accordionItems[itemId] ?? open}
                dataTestId={dataTestId}
            >
                {child.props.children}
            </AccordionItem>
        );
    });

    return (
        <section className={`accordion ${classNameContainer}`} data-testid={dataTestAccordionId}>
            {heading && <h2 className={`accordion__heading ${classNameHeading}`}>{heading}</h2>}
            {items}
        </section>
    );
};

export default Accordion;
