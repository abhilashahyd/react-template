import React from "react";
import QTabs from "../../components/BaseUI/QTabs";
import StarterPage from "../StarterPage";

const TablePage = () => {
    let data = [{ eventKey: "home", title: "Home", content: <p class="d-inline-block" style={{ padding: "20px" }}>Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p> }, { eventKey: "profile", title: "Profile", content: <p class="text-justify" style={{ padding: "20px" }}>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p> }];
    return (
        <StarterPage pageTitle="Tabs">
            <div className="row px-4">
                <div className="card col-12 py-2 w-100">
                    <QTabs striped hoverable data={data} />

                </div>
            </div>
        </StarterPage>
    );
};

export default TablePage;
