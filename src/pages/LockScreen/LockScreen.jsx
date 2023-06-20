import QButton from "../../components/BaseUI/QButton";
import { LABEL_ENTER_YOUR_PASSWORD, LABEL_FORGOT_PASSWORD, LABEL_LOGIN, LABEL_LOGO } from "../../utils/Labels";
import _history from "../../utils/history";
import { Form } from "react-bootstrap";
import QPassword from "../../components/Forms/QPassword";
import './style.scss';

const LockScreen = () => {
    return (<div className="lock-screen pt-2 pt-sm-5 pb-4 pb-sm-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-4 col-lg-5">
                    <div className="card">
                        <div className="card-header pt-4 pb-4 text-center bg-primary text-white">
                            <span>{LABEL_LOGO}</span>
                        </div>
                        <div className="card-body p-4">
                            <div className="text-center w-75 m-auto">
                                <img src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-4.jpg" height="32px" alt="user-image" className="rounded-circle shadow" />
                                <h4 className="text-dark-50 text-center mt-3 fw-bold">Hi ! Michael </h4>
                                <p className="text-muted mb-4">Enter your password to access the admin.</p>
                            </div>
                            <Form>
                                <div className="mb-3">
                                    <QPassword
                                        placeholder={LABEL_ENTER_YOUR_PASSWORD}
                                        name="password"
                                        onInputChange={() => { }}
                                    />
                                </div>
                                <div className="mb-3 mb-0 text-center">
                                    <QButton
                                        type="submit"
                                        qbtnCls="btn-primary"
                                        label={LABEL_LOGIN}
                                    />
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LockScreen;
