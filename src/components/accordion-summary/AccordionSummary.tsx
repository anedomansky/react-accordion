import React, { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';
import './AccordionSummary.scss';

interface Props {
    classNameSummary?: string;
    dataTestId?: string;
    onClick?: (opened: boolean) => void;
}

const AccordionSummary: React.FC<Props> = ({
    classNameSummary, dataTestId, children, onClick,
}) => {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    const toggle = (event: React.MouseEvent<HTMLDetailsElement>) => {
        event.preventDefault();
        setToggleShow(!toggleShow);

        if (onClick) {
            onClick(!toggleShow);
        }
    };

    return (
        <summary onClick={toggle} className={classNameSummary ?? 'item__summary'} data-testid={dataTestId}>
            {children}
        </summary>
    );
};

export default AccordionSummary;
