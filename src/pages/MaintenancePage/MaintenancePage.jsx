import QIcon from "../../components/BaseUI/QIcon/QIcon";
import { MAINTENANCE_LABELS } from '../../utils/Labels';
import './style.scss';
const MaintenancePage = () => {
    return (<div className="maintenance-page mt-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10">
                    <div className="text-center">
                        <img src="https://coderthemes.com/hyper/saas/assets/images/maintenance.svg" height="140" alt="File not found Image" />
                        <h3 className="mt-4">{MAINTENANCE_LABELS.LABEL_MAINTENANCE_HEADING}</h3>
                        <p className="text-muted">{MAINTENANCE_LABELS.LABEL_MAINTENANCE_SUB_HEADING}</p>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="text-center mt-3 ps-1 pe-1">
                                    <span className="bg-primary maintenance-icons text-white mb-2">
                                        <QIcon name="far fa-gem" />
                                    </span>
                                    <h5 className="text-uppercase">{MAINTENANCE_LABELS.LABEL_MAINTENANCE_TITLE_1}</h5>
                                    <p className="text-muted">{MAINTENANCE_LABELS.LABEL_MAINTENANCE_TITLE_1_DESCRIPTION}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-center mt-3 ps-1 pe-1">
                                    <span className="bg-primary maintenance-icons text-white mb-2">
                                        <QIcon name="far fa-clock" />
                                    </span>
                                    <h5 className="text-uppercase">{MAINTENANCE_LABELS.LABEL_MAINTENANCE_TITLE_2}</h5>
                                    <p className="text-muted">{MAINTENANCE_LABELS.LABEL_MAINTENANCE_TITLE_2_DESCRIPTION}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-center mt-3 ps-1 pe-1">
                                    <span className="bg-primary maintenance-icons text-white mb-2">
                                        <QIcon name="far fa-question-circle" />
                                    </span>
                                    <h5 className="text-uppercase">{MAINTENANCE_LABELS.LABEL_MAINTENANCE_TITLE_3}</h5>
                                    <p className="text-muted">{MAINTENANCE_LABELS.LABEL_MAINTENANCE_TITLE_3_DESCRIPTION}<a href="#" className="text-muted fw-bold">{MAINTENANCE_LABELS.LABEL_MAINTENANCE_TITLE_3_URL}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MaintenancePage;
