import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import './styles.scss';

const QAccordion = (props) => {
    let { data = [], defaultActiveKey = "0" } = props;
    data = [{ header: "Q. Can I use this template for my client?", content: "Yup, the marketplace license allows you to use this theme in any end products." }, { header: "Q. Can this theme work with Wordpress?", content: "No. This is a HTML template. It won't directly with wordpress." }]

    const [activeId, setActiveId] = useState(defaultActiveKey);
    function toggleActive(id) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }
    return (
        <div className="qaccordion-wrapper">
            <Accordion defaultActiveKey={`${activeId}`}>
                {data && data.map((item, index) => {
                    return (<Card className={activeId === `${index}` ? "active" : ""}>
                        <Accordion.Toggle className="accordian-header" as={Card.Header} eventKey={`${index}`} onClick={() => toggleActive(`${index}`)}>
                            {item.header}
                            <i className="fa fa-chevron-down"></i>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={`${index}`}>
                            <Card.Body>
                                {item.content}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>)
                })}
            </Accordion>
        </div>
    )
};
export default QAccordion;