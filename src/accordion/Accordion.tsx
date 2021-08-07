import React from 'react';
import './Accordion.scss';

interface Props {
    heading: string;
}

const Accordion: React.FC<Props> = ({ heading }) => (
    <div>{heading}</div>
);

export default Accordion;
