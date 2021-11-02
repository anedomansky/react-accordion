import React from 'react';
import './AccordionContent.scss';

interface Props {
    classNameContent?: string;
    dataTestId?: string;
}

const AccordionContent: React.FC<Props> = ({ classNameContent, dataTestId, children }) => (
    <div className={classNameContent ?? 'item__content'} data-testid={dataTestId}>
        {children}
    </div>
);

export default AccordionContent;
