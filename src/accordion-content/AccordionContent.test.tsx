import React from 'react';
import { render } from '@testing-library/react';
import AccordionContent from './AccordionContent';

test('Renders the AccordionContent component', () => {
    const { container } = render(
        <AccordionContent>
            Test
        </AccordionContent>,
    );
    expect(container).toBeInTheDocument();
});

test('Renders the AccordionContent component with custom class', () => {
    const { container, getByTestId } = render(
        <AccordionContent classNameContent="test-content" dataTestId="content">
            Test
        </AccordionContent>,
    );
    expect(container).toBeInTheDocument();
    expect(getByTestId('content').classList.contains('test-content')).toBeTruthy();
    expect(getByTestId('content').classList.length).toBe(1);
});
