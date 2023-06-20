import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { dropdownItems } from "../../../utils/Constants";
import { SUCCESS } from "../../../utils/Labels";

const QDropdown = ({ label, toggleName, variant = SUCCESS, id, items = dropdownItems, name="dropdown", qdropdownCls = "",autoClose,onInputChange, ...otherProps }) => {

    const [selectedItem,setSelectedItem] = useState("");

    const handleDropdownItemSelect = (key,event) =>{
        setSelectedItem(key);
        if (onInputChange) {
            onInputChange(event,key)
        }
    }
    return (<div className={`qdropdown-wrapper ${qdropdownCls}`}>
        <Dropdown>
            <Dropdown.Header> {label || "Dropdown"}
            </Dropdown.Header>
            <Dropdown.Toggle variant={variant} id="dropdown-basic">{selectedItem || "Dropdown"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items && items.length && items.map((item,index) => {
                    return (<React.Fragment key ={item.value+index}>
                        <Dropdown.Item  eventKey={item.value} value={item.value} name={name} onSelect={(key,e)=>handleDropdownItemSelect(key,e)}>{item.label}</Dropdown.Item>
                        {item.isDividerRequired ? <Dropdown.Divider /> : ""}
                    </React.Fragment>)
                })}
            </Dropdown.Menu>
        </Dropdown>
    </div>)
}

export default QDropdown;