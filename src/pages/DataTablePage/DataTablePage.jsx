import React from "react";
import QDataTable from "../../components/Tables/QDataTable/QDataTable";
import StarterPage from "../StarterPage";

const DataTablePage = () => {
    return (
        <StarterPage pageTitle="Data Table">
            <div className="row px-4">
            <div className="card col-12 py-2">
            <QDataTable striped hoverable/>

            </div>
            </div>
        </StarterPage>
    );
};

export default DataTablePage;
