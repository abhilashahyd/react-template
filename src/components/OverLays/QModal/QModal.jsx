import { Modal, Button } from "react-bootstrap";

const QModal = ({ title, body, footerRequired = true, show, fullscreen, onHide, onConfirm }) => {
    return (<div className="qmodal">
        <Modal show={show} fullscreen={fullscreen} onHide={() => onHide(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            {footerRequired ? <Modal.Footer>
                <Button onClick={() => onHide(false)} variant="secondary">Cancel</Button>
                <Button onClick={() => onConfirm(false)} variant="primary">Save</Button>
            </Modal.Footer> : null}
        </Modal>
    </div>);
};

export default QModal;