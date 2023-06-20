import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import './styles.scss';
const QToast = (props) => {
    let { imgURL = "", header = "", timeStamp = "", content = "", autoHide=true } = props;
    const [show, setShow] = useState(true);
    imgURL = "https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png";
    header = "Header";
    timeStamp = "just now";
    content = "Woohoo, you're reading this text in a Toast!";
    return (
        <div className="qtoast-wrapper">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide={autoHide} >
                <Toast.Header>
                    {imgURL && <img src={imgURL} height="20px" width="20px" className="rounded mr-2" alt="" />}
                    <strong className="mr-auto">{header}</strong>
                    <small className="ml-2">{timeStamp}</small>
                </Toast.Header>
                <Toast.Body>{content}</Toast.Body>
            </Toast>
        </div>
    )
};
export default QToast;