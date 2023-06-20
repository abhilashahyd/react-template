import { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { ColumnToggle } from 'react-bootstrap-table2-toolkit';
import InfiniteScroll from "react-infinite-scroll-component";

import './styles.scss';
const QDataTable = (props) => {
  let { rowExpand = false, infiniteScroll = false, pagination = true } = props;
  const { ToggleList } = ColumnToggle;
  const [items, setItems] = useState([{
    id: 1,
    name: "Aquamate",
    price: "100rs",
    expandRow: <p>You can render anything here</p>
  }, {
    id: 2,
    name: "Belly Jelly",
    price: "170rs"
  }, {
    id: 3,
    name: "Carnal Coffee",
    price: "80rs"
  }, {
    id: 4,
    name: "Desert Loops",
    price: "100rs",
    expandRow: <p>You can render anything here</p>
  }, {
    id: 5,
    name: "eCake",
    price: "170rs",
    expandRow: <p>You can render anything here</p>
  }, {
    id: 6,
    name: "FlyButter",
    price: "80rs"
  }, {
    id: 7,
    name: "Freezefry",
    price: "100rs"
  }, {
    id: 8,
    name: "Germ’s Choice",
    price: "170rs",
    expandRow: <p>You can render anything here</p>
  }, {
    id: 9,
    name: "Ice Lava",
    price: "80rs"
  }, {
    id: 10,
    name: "IsoMonk",
    price: "100rs"
  }, {
    id: 11,
    name: "Lollipopper",
    price: "170rs"
  },{ 
     id: 12,
    name: "Magneato",
    price: "80rs",
    expandRow: <p>You can render anything here</p>
  }, {
    id: 13,
    name: "Pizzazilla",
    price: "100rs"
  }, {
    id: 14,
    name: "POP Smart",
    price: "170rs"
  }, {
    id: 15,
    name: "Butter",
    price: "80rs"
  }]);

  const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true
  }, {
    dataField: 'name',
    text: 'Product Name',
    sort: true
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];

  const data = [
    {  id: 16,
      name: "Magneato",
      price: "80rs"
    }, {
      id: 17,
      name: "Pizzazilla",
      price: "100rs"
    }, {
      id: 18,
      name: "POP Smart",
      price: "170rs"
    }, {
      id: 19,
      name: "Butter",
      price: "80rs"
    }];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: items.length
    }]
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {

    },
  };
  const expandRow = {
    renderer: row => (
      row.expandRow ? row.expandRow : null
    ),
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
      if (isAnyExpands) {
        return <b>Expand</b>;
      }
      return <b>Expand</b>;
    },
    nonExpandable: items.reduce((r, v, i) => r.concat(!v.expandRow ? i + 1 : []), [])
  };
  const fetchMoreData = () => {
    setTimeout(() => {
      setItems([...items, ...data])
    }, 1500);
  };
  return (
    <div id="qdata-table-wrapper" style={{
      overflow: 'auto'
    }}>
      {infiniteScroll && <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < 18}
        loader={<h4 style={{ textAlign: 'center' }}>Loading ...</h4>}
        scrollableTarget="qdata-table-wrapper"
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ToolkitProvider
          bootstrap4
          keyField='id'
          data={items}
          columns={columns}
          columnToggle
        >
          {
            props => (
              <div>
                <ToggleList {...props.columnToggleProps} />
                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  striped
                  hover
                  noDataIndication="No Data"
                  rowEvents={rowEvents}
                  expandRow={rowExpand ? expandRow : ""}
                />
              </div>
            )
          }
        </ToolkitProvider>
      </InfiniteScroll>}
      {!infiniteScroll && pagination && <ToolkitProvider
        bootstrap4
        keyField='id'
        data={items}
        columns={columns}
        columnToggle
      >
        {
          props => (
            <div>
              <ToggleList {...props.columnToggleProps} />
              <hr />
              <BootstrapTable
                {...props.baseProps}
                striped
                hover
                pagination={paginationFactory(options)}
                noDataIndication="No Data"
                rowEvents={rowEvents}
                expandRow={rowExpand ? expandRow : ""}
              />
            </div>
          )
        }
      </ToolkitProvider>
      }

    </div>
  )
};
export default QDataTable;