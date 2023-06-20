import ProgressBar from 'react-bootstrap/ProgressBar';
const QProgressBar = (props) => {
    let { now = 2, variant = "", showLabel = false, striped = true, animated = false, stackedData = [] } = props;
    //example data for stacked progress bar
    stackedData = [{ now: 35, variant: "success", striped: "true", animated: true, showLabel: true }, { now: 20, variant: "info", striped: "true", animated: true, showLabel: true }, { now: 15, variant: "warning", striped: "true", animated: true, showLabel: true }, { now: 15, variant: "danger", striped: "true", animated: true, showLabel: true }]

    return (
        <div className="qprogressbar-wrapper">
            {stackedData.length ? <ProgressBar>
                {stackedData.map((item, index) => {
                    return <ProgressBar striped={item.striped} animated={item.animated} variant={item.variant} now={item.now} label={`${item.now}%`} srOnly={!item.showLabel} key={index} />
                })}
            </ProgressBar> : <ProgressBar striped={striped} animated={animated} variant={variant} now={now} label={`${now}%`} srOnly={!showLabel} />
            }
        </div>
    )
};
export default QProgressBar;