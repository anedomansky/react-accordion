import React from 'react';

interface ContextType {
    toggleShow: boolean;
    setToggleShow: (show: boolean) => void;
}

const ToggleContext = React.createContext<ContextType>({
    toggleShow: false,
    setToggleShow: () => null,
});

export default ToggleContext;
