import React from 'react';

const StarterPage = (props) => {

    const { pageTitle = "" } = props

    return (
        <div>
            <div className="row p-2">
                <div className="col-12">
                    <div className="page-title-box">
                        <h3 className="ml-4 mt-2">{pageTitle}</h3>
                    </div>
                </div>
            </div>
            <div className="row p-2">
                <div className="col-12">
                    <div className="page-content">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarterPage;