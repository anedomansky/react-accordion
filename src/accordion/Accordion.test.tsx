import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

test('Renders the Accordion component without children', () => {
    const { container, getByTestId } = render(
        <Accordion dataTestAccordionId="test-id">
            <span>Test</span>
        </Accordion>,
    );
    expect(container).toBeInTheDocument();
    expect(getByTestId('test-id').children.length).toEqual(0);
});

test('Renders the Accordion component with onSelect', () => {
    let currentId = '';
    let opened = false;
    const { container, getByTestId } = render(
        <Accordion onSelect={(isOpen, id) => { currentId = id; opened = isOpen; }}>
            <AccordionItem dataTestId="item-data-test" summary="Test" />
        </Accordion>,
    );
    fireEvent.click(getByTestId('item-data-test'));
    expect(container).toBeInTheDocument();
    expect(currentId).toEqual('item-id-0');
    expect(opened).toBeTruthy();
});

test('Renders the Accordion component without onSelect', () => {
    const currentId = '';
    const opened = false;
    const { container, getByTestId } = render(
        <Accordion>
            <AccordionItem dataTestId="item-data-test" summary="Test" />
        </Accordion>,
    );
    fireEvent.click(getByTestId('item-data-test'));
    expect(container).toBeInTheDocument();
    expect(currentId).toEqual('');
    expect(opened).toBeFalsy();
});

test('Renders the Accordion component with heading', () => {
    const { container, getByText } = render(
        <Accordion heading="Accordion-Title">
            <AccordionItem summary="Test" />
        </Accordion>,
    );
    expect(container).toBeInTheDocument();
    expect(getByText('Accordion-Title')).toBeInTheDocument();
});
