import QButton from "../../components/BaseUI/QButton";
import QIcon from "../../components/BaseUI/QIcon/QIcon";
import { LABEL_PRICING_DESCRIPTION, LABEL_PRICING_HEADER, LABEL_PRICING_RECOMMENDED } from "../../utils/Labels";

const PricingPage = () => {
    let data = [{
        title: "PROFESSIONAL PACK",
        icon: "fas fa-user-tie",
        prefixValue: "$",
        price: "19",
        suffixValue: "MONTH",
        details: [{ label: "10 GB Storage" },
        { label: "500 GB Bandwidth" },
        { label: " No Domain" },
        { label: "1 User" },
        { label: "Email Support" },
        { label: "24x7 Support" }],
        buttonText: "Choose Plan"
    }, {
        title: "BUSINESS PACK",
        icon: "fas fa-briefcase",
        prefixValue: "$",
        price: "29",
        suffixValue: "MONTH",
        details: [{ label: "10 GB Storage" },
        { label: "500 GB Bandwidth" },
        { label: " No Domain" },
        { label: "1 User" },
        { label: "Email Support" },
        { label: "24x7 Support" }],
        buttonText: "Choose Plan",
        recommended: "true"
    }, {
        title: "ENTERPRISE PACK",
        icon: "fas fa-store-alt",
        prefixValue: "$",
        price: "39",
        suffixValue: "MONTH",
        details: [{ label: "10 GB Storage" },
        { label: "500 GB Bandwidth" },
        { label: " No Domain" },
        { label: "1 User" },
        { label: "Email Support" },
        { label: "24x7 Support" }],
        buttonText: "Choose Plan"
    }];
    return (<>
        <div className="row justify-content-center">
            <div className="col-xxl-10">
                <div className="text-center">
                    <h3 className="mb-2">{LABEL_PRICING_HEADER}</h3>
                    <p className="text-muted w-50 m-auto">
                      {LABEL_PRICING_DESCRIPTION}
                    </p>
                </div>
                <div className="row mt-sm-5 mt-3 mb-3">
                    {data && data.map((item, index) => {
                        return <div className="col-md-4">
                            <div className={`card card-pricing ${item.recommended ? "card-pricing-recommended" : ""}`}>
                                <div className="card-body text-center">
                                    {item.recommended && <div className="card-pricing-plan-tag">{LABEL_PRICING_RECOMMENDED}</div>}
                                    <p className="card-pricing-plan-name fw-bold text-uppercase">{item.title}</p>
                                    <span className="card-pricing-icon text-primary">
                                        <QIcon name={item.icon} />
                                    </span>
                                    <h2 className="card-pricing-price">{item.prefixValue}{item.price} <span>/ {item.suffixValue}</span></h2>
                                    <ul className="card-pricing-features">
                                        {item.details.map((ele, ind) => {
                                            return <li>{ele.label}</li>
                                        })
                                        }
                                    </ul>
                                    <QButton qbtnCls="btn btn-primary btn-rounded  mt-4 mb-2" label="Choose Plan" />
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
    );
};

export default PricingPage;
