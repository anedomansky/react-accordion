import React, { useEffect, useState } from 'react';
import AccordionItem, { AccordionItemProps } from '../accordion-item/AccordionItem';
import './Accordion.scss';

interface Props {
    heading?: string;
    allowMultipleOpen?: boolean;
    onSelect?: (isOpen: boolean, id: string) => void;
    classNameContainer?: string;
    classNameHeading?: string;
    children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
}

interface AccordionItemState {
    [id: string]: boolean;
}

const Accordion: React.FC<Props> = ({
    heading, allowMultipleOpen, onSelect, classNameContainer, classNameHeading, children,
}) => {
    const [accordionItems, setAccordionItems] = useState<AccordionItemState>({});
    const [initialAccordionItems, setInitialAccordionItems] = useState<AccordionItemState[]>([]);

    useEffect(() => {
        initialAccordionItems.forEach((item) => setAccordionItems(item));
    }, []);

    const onItemSelect = (isOpen: boolean, id: string) => {
        console.log(id, isOpen);
        if (onSelect) {
            onSelect(isOpen, id);
        }

        // if (!allowMultipleOpen) {
        //     Object.keys(accordionItems)
        //         .forEach((item) => setAccordionItems({ ...accordionItems, [item]: false }));
        // }

        setAccordionItems({ ...accordionItems, [id]: isOpen });
        console.log(accordionItems);
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
            summary, classNameContent, classNameItem, classNameSummary, id, open,
        } = child.props;

        const itemId = id || `item-id-${index}`;

        const { [itemId]: isOpen } = accordionItems;

        // if (initialAccordionItems.length <= getChildren().length) {
        //     setInitialAccordionItems([...initialAccordionItems, { [itemId]: !!open }]);
        // }

        return (
            <AccordionItem
                key={itemId}
                id={itemId}
                summary={summary}
                onSelect={onItemSelect}
                classNameContent={classNameContent}
                classNameItem={classNameItem}
                classNameSummary={classNameSummary}
                open={isOpen ?? open}
            >
                {child.props.children}
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
