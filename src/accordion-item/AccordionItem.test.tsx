import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AccordionItem from './AccordionItem';

test('Renders the AccordionItem component', () => {
    const { container } = render(<AccordionItem summary="Summary-Test" />);
    expect(container).toBeInTheDocument();
});

test('Returns id and opened state on click', () => {
    let id = '';
    let opened = false;
    const { container, getByTestId } = render(
        <AccordionItem
            dataTestId="item-data-test"
            id="item-test"
            summary="Summary-Test"
            onSelect={(isOpen, currentId) => { id = currentId; opened = isOpen; }}
        />,
    );
    fireEvent.click(getByTestId('item-data-test'));
    expect(container).toBeInTheDocument();
    expect(id).toEqual('item-test');
    expect(opened).toBeTruthy();
});

test('Does not return id and opened state on click', () => {
    let id = '';
    let opened = false;
    const { container, getByTestId } = render(
        <AccordionItem
            dataTestId="item-data-test"
            summary="Summary-Test"
            onSelect={(isOpen, currentId) => { id = currentId; opened = isOpen; }}
        />,
    );
    fireEvent.click(getByTestId('item-data-test'));
    expect(container).toBeInTheDocument();
    expect(id).toEqual('');
    expect(opened).toBeFalsy();
});
