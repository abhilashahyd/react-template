import React from "react";
import QCard from "../../components/BaseUI/QCard";
import QPlaceholder from "../../components/BaseUI/QPlaceholder";
import StarterPage from "../StarterPage";

const PlaceholderPage = () => {
    return (
        <StarterPage pageTitle="Placeholder">
            <div className="row ml-4">
                <QCard>
                    <QPlaceholder />
                </QCard>
            </div>
        </StarterPage>
    );
};

export default PlaceholderPage;
