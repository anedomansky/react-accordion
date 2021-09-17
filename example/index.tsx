import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from '../src/accordion/Accordion';
import './index.scss';

const App: React.FC = () => (
    <div className="example">
        <Accordion>
            <Accordion.Item>
                <Accordion.Summary>
                    Summary1
                </Accordion.Summary>
                <Accordion.Content>
                    Accordion-Content 1
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Summary>
                    Summary2
                </Accordion.Summary>
                <Accordion.Content>
                    Accordion-Content 2
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Summary>
                    Summary3
                </Accordion.Summary>
                <Accordion.Content>
                    Accordion-Content 3
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    </div>
);

ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('app'),
);
