import React, { useState } from 'react';
import ToggleContext from '../context/toggleContext';

interface Props {
    classNameItem?: string;
    dataTestId?: string;
}

const AccordionItem: React.FC<Props> = ({ classNameItem, dataTestId, children }) => {
    const [toggleShow, setToggleShow] = useState<boolean>(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <details open={toggleShow} className={classNameItem ?? 'accordion__item item'} data-testid={dataTestId}>
                {children}
            </details>
        </ToggleContext.Provider>
    );
};

export default AccordionItem;
