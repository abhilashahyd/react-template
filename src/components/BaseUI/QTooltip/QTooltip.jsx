import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './styles.scss';
const QTooltip = (props) => {
    let { placement = "auto", label = "", trigger } = props;
    return (
        <div className="qtooltip-wrapper">
            {props.children && <OverlayTrigger
                trigger={trigger}
                placement={placement}
                overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                        {label}
                    </Tooltip>
                }
            >
                {props.children}
            </OverlayTrigger>}
        </div>
    )
};
export default QTooltip;