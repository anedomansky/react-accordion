# react-accordion
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A customizable and accessible accordion made with React.

## Installation

`npm i @anedomansky/react-accordion`

## Usage example

```html
<Accordion>
    <AccordionItem>
        <AccordionSummary onClick={(opened) => console.log(opened)}>
            Summary 1
        </AccordionSummary>
        <AccordionContent>
            Accordion-Content 1
        </AccordionContent>
    </AccordionItem>
    <AccordionItem>
        <AccordionSummary>
            <span>Summary 2</span>
        </AccordionSummary>
        <AccordionContent>
            Accordion-Content 2
        </AccordionContent>
    </AccordionItem>
    <AccordionItem>
        <AccordionSummary>
            Summary 3
        </AccordionSummary>
        <AccordionContent>
            <p>Accordion-Content 3</p>
        </AccordionContent>
    </AccordionItem>
</Accordion>
```

## Props

`<Accordion>`

| Name | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| `classNameContainer` | string | Custom CSS-Classes for the `<section>`-tag | accordion |
| `dataTestId` | string | ID for testing purposes (e.g. Jest) | |

`<AccordionItem>`

| Name | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| `classNameItem` | string | Custom CSS-Classes for the `<details>`-tag | accordion__item item |
| `dataTestId` | string | ID for testing purposes (e.g. Jest) | |

`<AccordionSummary>`

| Name | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| `classNameSummary` | string | Custom CSS-Classes for the `<summary>`-tag | item__summary |
| `dataTestId` | string | ID for testing purposes (e.g. Jest) | |
| `onClick` | (opened: boolean) => void | Callback for the 'click'-Event on the `<summary>`-tag | |

| Name | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| `classNameContent` | string | Custom CSS-Classes for the `<div>`-tag | |
| `dataTestId` | string | ID for testing purposes (e.g. Jest) | |
