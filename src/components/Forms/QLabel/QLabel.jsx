const QLabel = (props) => {
    let { label = "", qlabelCls = "" } = props;

    return (<>
        <span className={`qlabel-wrapper ${qlabelCls}`}>
            {label}
        </span>
    </>
    )
};
export default QLabel;