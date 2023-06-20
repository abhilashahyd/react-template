import Table from 'react-bootstrap/Table'
const QTable = (props) => {
    let { tableHeaders = [], tableData = [], variant = "", striped = false, hoverable = false } = props;
    tableHeaders =["Name", "Phone Number", "Date of Birth", "Active?"];
    tableData = [["Risa D. Pearson", "336-508-2157", "July 24, 1950", "Yes"], ["Ann C. Thompson", "646-473-2057", "January 25, 1959", "Yes"], ["Linda G. Smith", "606-253-1207", "May 3, 1962", "No"], ["Paul J. Friend", "281-308-0793", "September 1, 1939", "No"]];
    return (
        <div className="qtable-wrapper">
            <Table responsive variant={variant} striped={striped} hover={hoverable}>
                <thead>
                    <tr>
                        {tableHeaders && tableHeaders.length && tableHeaders.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData && tableData.length && tableData.map((item, index) => {
                        return (<tr>
                            {item.map((element, ind) => (
                                <td key={ind}>{element}</td>
                            ))}
                        </tr>)
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
};
export default QTable;