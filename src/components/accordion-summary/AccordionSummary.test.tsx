import React from 'react';
import { render } from '@testing-library/react';
import AccordionSummary from './AccordionSummary';

test('Renders the AccordionSummary component', () => {
    const { container } = render(
        <AccordionSummary>
            Test
        </AccordionSummary>,
    );
    expect(container).toBeInTheDocument();
});

test('Renders the AccordionSummary component with custom class', () => {
    const { container, getByTestId } = render(
        <AccordionSummary classNameSummary="test-summary" dataTestId="summary">
            Test
        </AccordionSummary>,
    );
    expect(container).toBeInTheDocument();
    expect(getByTestId('summary').classList.contains('test-summary')).toBeTruthy();
    expect(getByTestId('summary').classList.length).toBe(1);
});
