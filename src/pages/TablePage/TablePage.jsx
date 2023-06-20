import React from "react";
import QTable from "../../components/Tables/QTable/QTable";
import StarterPage from "../StarterPage";

const TablePage = () => {
    return (
        <StarterPage pageTitle="Table">
            <div className="row px-4">
            <div className="card col-12">
            <QTable striped hoverable />

            </div>
            </div>
        </StarterPage>
    );
};

export default TablePage;
