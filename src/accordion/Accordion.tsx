import React, { useContext, useState } from 'react';

interface ContextType {
    toggleShow: boolean;
    setToggleShow: (show: boolean) => void;
}

interface AccordionComposition {
    Item: React.FC;
    Summary: React.FC;
    Content: React.FC;
}

const ToggleContext = React.createContext<ContextType>({
    toggleShow: false,
    setToggleShow: () => null,
});

const Accordion: React.FC & AccordionComposition = ({ children }) => (
    <section>
        {children}
    </section>
);

const AccordionItem: React.FC = ({ children }) => {
    const [toggleShow, setToggleShow] = useState<boolean>(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <details open={toggleShow}>
                {children}
            </details>
        </ToggleContext.Provider>
    );
};

const AccordionSummary: React.FC = ({ children }) => {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    const toggle = (event: React.MouseEvent<HTMLDetailsElement>) => {
        event.preventDefault();
        setToggleShow(!toggleShow);
    };

    return (
        <summary onClick={toggle}>
            {children}
        </summary>
    );
};

const AccordionContent: React.FC = ({ children }) => (
    <div>
        {children}
    </div>
);

Accordion.Item = AccordionItem;
Accordion.Summary = AccordionSummary;
Accordion.Content = AccordionContent;

export default Accordion;

// TODO: split into multiple files
// TODO: add unit tests
// TODO: add default styles
// TODO: add missing props
