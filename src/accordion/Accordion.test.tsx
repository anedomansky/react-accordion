import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

test('Renders the Accordion component', () => {
    const { container } = render(<Accordion />);
    expect(container).toBeInTheDocument();
});
