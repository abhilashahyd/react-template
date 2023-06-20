import QButton from "../../components/BaseUI/QButton";
import QIcon from "../../components/BaseUI/QIcon/QIcon";
import { LABEL_LOGO,LABEL_404_ERROR,LABEL_404_ERROR_DESCRIPTION } from "../../utils/Labels";
import _history from "../../utils/history";
import "./style.scss";

const ErrorPage = (props) => {

    return (<div className="error-page pt-2 pt-sm-5 pb-4 pb-sm-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-4 col-lg-5">
                <div className="card">
                <div className="card-header pt-4 pb-4 text-center bg-primary text-white">
                <span>{LABEL_LOGO}</span>
                   </div>

                            <div className="card-body p-4">
                                <div className="text-center">
                                    <div className="error-text ">4<QIcon name="fas fa-frown fa-sm"/>4</div>
                                    <h4 className="text-uppercase text-danger mt-3">{LABEL_404_ERROR}</h4>
                                    <p className="text-muted mt-3">{LABEL_404_ERROR_DESCRIPTION}</p>
                                        <QButton qbtnCls="btn btn-info" label="Return Home" onClick={()=>_history.push("/")} />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default ErrorPage;
