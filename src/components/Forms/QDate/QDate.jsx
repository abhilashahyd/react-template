import { useState } from "react";
import { FormControl, FormLabel } from "react-bootstrap";

const QDate = (props) => {
    let { label = "", name = "", value="",onDateChange, min="", max="", ...otherProps } = props;
    const [updatedValue, setUpdatedValue] = useState(value);

    const onChange = (evt) => {
        setUpdatedValue(evt.target.value);
        if(onDateChange){
            onDateChange(evt)
          }
      }
    return (
        <div className="qdate-wrapper">
              {label && <FormLabel>{label}</FormLabel>}
              <FormControl  type="date" name={name} value={updatedValue} onChange={onChange} min={min} max={max} {...otherProps} />
        </div>
    )
};
export default QDate; 