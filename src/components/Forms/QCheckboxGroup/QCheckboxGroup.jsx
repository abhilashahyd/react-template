import { useState } from "react";
import { Form, FormLabel } from "react-bootstrap";
import QCheckbox from "../QCheckbox";

const QCheckboxGroup = ({
  qcheckboxGroupCls = "",
  groupLabel = "",
  onSelectionChange,
  options = [
    {
      id: "swimming",
      name: "Interests",
      label: "Swimming",
      value: "swimming",
      checked: false
    },
    {
      id: "drawing",
      name: "Interests",
      label: "Drawing",
      value: "drawing",
      checked: true
    },
    {
      id: "cooking",
      name: "Interests",
      label: "Cooking",
      value: "cooking",
      checked: true
    }
  ],
}) => {
  const [groupOptions, setGroupOptions] = useState(options);

  const onChange = (evt) => {
    if (evt.target) {
      const { checked, id } = evt.target;
      const updatedOptionsArr = [...groupOptions];
      const matchIdx = groupOptions.findIndex((item) => item.id == id);
      updatedOptionsArr[matchIdx] = { ...updatedOptionsArr[matchIdx], checked };
      setGroupOptions(updatedOptionsArr);
      if(onSelectionChange){
        onSelectionChange(evt, updatedOptionsArr);
      }
    }
  };

  return (
    <div className="qcheckbox-group-wrapper form-check">
      {groupLabel && <FormLabel>{groupLabel}</FormLabel>}
      {groupOptions.length && (
        <Form.Group className={`mb-3 ${qcheckboxGroupCls}`}>
          {groupOptions.map((option, idx) => {
            return <QCheckbox {...option} key={idx} onInputChange={onChange} />;
          })}
        </Form.Group>
      )}
    </div>
  );
};

export default QCheckboxGroup;
