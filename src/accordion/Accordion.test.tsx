import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';
import AccordionItem from '../accordion-item/AccordionItem';

test('Renders the Accordion component', () => {
    const { container } = render(
        <Accordion>
            <AccordionItem summary="Test" />
        </Accordion>,
    );
    expect(container).toBeInTheDocument();
});
