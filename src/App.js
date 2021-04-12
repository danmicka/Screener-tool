import './App.css';
import Table from './Table';
import Graph from './Graph';
import { COLUMNS, rows_data } from './components/column';
import { useEffect, useState, useRef } from 'react';
import { getTableData } from './components/services';

function App() {
  const [state, setState] = useState({ row: null, coloumns: null });
  const [pageCount, setPageCount] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    try {
      async function data() {
        const req = await getTableData();
        console.log(req);
        setState((prev) => ({ ...prev, row: req.data.rows, coloumns: req.data.columns }));
      }
      data();
    } catch (err) {
      alert(err);
    }
  }, []);

  const onRowClick = (cell) => {
    console.log(cell);
    return {};
  };
  return (
    <div className='App'>
      <Graph selected={selected} />
      {state.row ? (
        <Table
          columns={COLUMNS}
          data={state.row}
          pageCount={pageCount}
          getColumnProps={(column) => ({
            onClick: () => setSelected((prev) => ({ column: column.column.Header, row: column.row.id, symbol: column.row.values.symbol })),
          })}
          getTdProps={onRowClick}
          getRowProps={(row) => ({
            style: {
              // background: row.index % 2 === 0 ? 'rgba(0,0,0,.1)' : 'white',
            },
          })}
          getCellProps={(cellInfo) => ({
            style: {
              border: selected ? (cellInfo.column.Header === selected.column && cellInfo.row.id === selected.row ? '2px solid white' : 'none') : null,
              background:
                cellInfo && cellInfo.value === '[Up]'
                  ? '#8DFF33'
                  : cellInfo.value === '[Down]'
                  ? '#F6630F'
                  : cellInfo.value?.indexOf('[Up]') >= 0
                  ? '#8DFF33'
                  : cellInfo.value?.indexOf('[Down]') >= 0
                  ? '#F6630F'
                  : cellInfo.value,
              padding: '20px',
            },
          })}
        />
      ) : null}
    </div>
  );
}

export default App;
