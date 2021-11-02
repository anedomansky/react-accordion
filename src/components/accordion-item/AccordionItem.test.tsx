import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AccordionItem from './AccordionItem';
import AccordionSummary from '../accordion-summary/AccordionSummary';

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

test('Renders the AccordionItem component', () => {
    const { container, getByTestId } = render(
        <AccordionItem dataTestId="details">
            <AccordionSummary classNameSummary="test-summary" dataTestId="summary">
                Test
            </AccordionSummary>
        </AccordionItem>,
    );

    expect(getByTestId('details').getAttribute('open')).toBeNull();

    fireEvent(getByTestId('summary'), new MouseEvent('click'));

    expect(container).toBeInTheDocument();
    expect(getByTestId('details').getAttribute('open')).not.toBeNull();
});
