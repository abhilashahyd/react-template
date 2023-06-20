const QIcon = (props) => {
    let { name = "" } = props;

    return (
        <i className={name} />
    )
};
export default QIcon;

