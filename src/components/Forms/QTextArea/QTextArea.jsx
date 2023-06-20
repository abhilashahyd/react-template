import { useState } from "react";
import { FormControl, FormLabel } from "react-bootstrap";

const  QTextArea = ({qinputCls="", value="", label="", onInputChange,rows,placeholder, ...otherProps}) => {
    const [updatedValue, setUpdatedValue] = useState(value);
    
    const onChange = (evt) => {
      setUpdatedValue(evt.target.value);
      if(onInputChange){
        onInputChange(evt)
      }
    }

    return (
      <div className="qtextarea-wrapper">
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl  as="textarea" className={qinputCls} value={updatedValue} onChange={onChange} rows={rows || 3} placeholder={placeholder} {...otherProps} />
      </div>
    );
}
export default QTextArea;