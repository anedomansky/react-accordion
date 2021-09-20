import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

test('Renders the Accordion component', () => {
    const { container } = render(
        <Accordion>
            Test
        </Accordion>,
    );
    expect(container).toBeInTheDocument();
});

test('Renders the Accordion component with custom class', () => {
    const { container, getByTestId } = render(
        <Accordion classNameContainer="test-accordion" dataTestId="accordion">
            Test
        </Accordion>,
    );
    expect(container).toBeInTheDocument();
    expect(getByTestId('accordion').classList.contains('test-accordion')).toBeTruthy();
    expect(getByTestId('accordion').classList.length).toBe(1);
});
