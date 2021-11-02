import React, { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';
import './AccordionSummary.scss';

interface Props {
    classNameSummary?: string;
    dataTestId?: string;
}

const AccordionSummary: React.FC<Props> = ({ classNameSummary, dataTestId, children }) => {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    const toggle = (event: React.MouseEvent<HTMLDetailsElement>) => {
        event.preventDefault();
        setToggleShow(!toggleShow);
    };

    return (
        <summary onClick={toggle} className={classNameSummary ?? 'item__summary'} data-testid={dataTestId}>
            {children}
        </summary>
    );
};

export default AccordionSummary;
