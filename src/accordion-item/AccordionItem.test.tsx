import React from 'react';
import { render } from '@testing-library/react';
import AccordionItem from './AccordionItem';

test('Renders the AccordionItem component', () => {
    const { container } = render(<AccordionItem />);
    expect(container).toBeInTheDocument();
});