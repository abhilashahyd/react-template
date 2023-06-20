
import { useDispatch } from "react-redux";
import QButton from "../../components/BaseUI/QButton";
import QCheckbox from "../../components/Forms/QCheckbox";
import QPassword from "../../components/Forms/QPassword";
import QTextInput from "../../components/Forms/QTextInput";
import "./style.scss";
import {
    LABEL_DONT_HAVE_ACCOUNT,
    LABEL_EMAIL_ADDRESS,
    LABEL_ENTER_YOUR_EMAIL,
    LABEL_ENTER_YOUR_PASSWORD,
    LABEL_FORGOT_PASSWORD,
    LABEL_LOGIN,
    LABEL_LOGO,
    LABEL_REMEMBER_ME,
    LABEL_SIGNIN,
    LABEL_SIGNIN_SUB_HEADING,
    LABEL_SIGN_UP,
} from "../../utils/Labels";
import { Form } from "react-bootstrap";
import { loginAction } from "./actions";
import { useState } from 'react';
import _history from "../../utils/history";

const Login = () => {
    const [loginDetails,setLoginDetails] = useState({});
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(loginDetails && (loginDetails.email && loginDetails.password)){
            dispatch(loginAction(loginDetails));
        }
    };

    const handleInputChange = event => {
        let formfields = {...loginDetails};
        formfields[event.target.name] = event.target.value;
        setLoginDetails(formfields);
    };


    return (
        <div class="login-form-wrapper pt-2 pt-sm-5 pb-4 pb-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-4 col-lg-5">
                        <div class="card">
                            <div class="card-header pt-4 pb-4 text-center bg-primary">
                                <span>{LABEL_LOGO}</span>
                            </div>

                            <div class="card-body p-4">
                                <div class="text-center w-75 m-auto">
                                    <h4 class="text-dark-50 text-center pb-0 fw-bold">
                                        {LABEL_SIGNIN}
                                    </h4>
                                    <p class="text-muted mb-4">{LABEL_SIGNIN_SUB_HEADING}</p>
                                </div>

                                <Form onSubmit={handleLogin}>
                                    <div class="mb-3">
                                        <QTextInput
                                            label={LABEL_EMAIL_ADDRESS}
                                            type="email"
                                            name="email"
                                            required
                                            placeholder={LABEL_ENTER_YOUR_EMAIL}
                                            onInputChange={handleInputChange}
                                        />
                                    </div>

                                    <div class="mb-3">
                                        <a href="#" class="text-muted float-end">
                                            <small>{LABEL_FORGOT_PASSWORD}</small>
                                        </a>
                                        <QPassword 
                                            placeholder={LABEL_ENTER_YOUR_PASSWORD} 
                                            name="password"
                                            onInputChange={handleInputChange}
                                        />
                                    </div>

                                    <div class="mb-3 mb-3">
                                        <QCheckbox checked={false} label={LABEL_REMEMBER_ME} />
                                    </div>

                                    <div class="mb-3 mb-0 text-center">
                                        <QButton
                                            type="submit"
                                            qbtnCls="btn-primary"
                                            label={LABEL_LOGIN}
                                        />
                                    </div>
                                </Form>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p >
                                    {LABEL_DONT_HAVE_ACCOUNT}
                                    <span className="cursor-pointer" onClick={()=>_history.push("/pages/register")}>
                                        <b> {LABEL_SIGN_UP}</b>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
