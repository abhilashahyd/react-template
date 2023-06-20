import React from "react";
import Form from 'react-bootstrap/Form';

const QChooseFile = ({ label = "", disabled = false, name="", onFileUpload, fieldRef=null, ...otherProps}) => {  
    return (
        <div className="qchoosefile-wrapper">
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>{label}</Form.Label>
                <Form.Control ref={fieldRef} type="file" name={name} disabled={disabled} onChange={(e)=>{onFileUpload && onFileUpload(e)}} {...otherProps} />
            </Form.Group>
        </div>
    )
};
export default QChooseFile;