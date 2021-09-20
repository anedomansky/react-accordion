import React from 'react';
import { render } from '@testing-library/react';
import AccordionItem from './AccordionItem';

test('Renders the AccordionItem component', () => {
    const { container } = render(
        <AccordionItem>
            Test
        </AccordionItem>,
    );
    expect(container).toBeInTheDocument();
});

test('Renders the AccordionItem component with custom class', () => {
    const { container, getByTestId } = render(
        <AccordionItem classNameItem="test-item" dataTestId="item">
            Test
        </AccordionItem>,
    );
    expect(container).toBeInTheDocument();
    expect(getByTestId('item').classList.contains('test-item')).toBeTruthy();
    expect(getByTestId('item').classList.length).toBe(1);
});
