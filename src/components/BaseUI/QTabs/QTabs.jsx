import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useState } from "react";
import './QTabs.scss';

const QTabs = (props) => {
    let { data = [] } = props;
    const [key, setKey] = useState(data && data.length && data[0].eventKey || "");

    return (
        <div className="qtabs-wrapper">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="nav-bordered mb-3"
            >
                {data && data.map((item, index) => {
                    return <Tab eventKey={item.eventKey} title={item.title} disabled={item.disabled}>
                        <div>
                            {item.content}
                        </div>
                    </Tab>
                })
                }
            </Tabs>
        </div>
    )
};
export default QTabs;