import React from 'react';

interface Props {
    classNameContainer?: string;
    dataTestId?: string;
}

const Accordion: React.FC<Props> = ({ classNameContainer, dataTestId, children }) => (
    <section className={classNameContainer ?? 'accordion'} data-testid={dataTestId}>
        {children}
    </section>
);

export default Accordion;

// TODO: add missing props
// TODO: add README
// TODO: check dependencies
