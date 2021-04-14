import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import './Table.css';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import React from 'react';
import GlobalFilter from './components/GlobalFilter';

const defaultPropGetter = () => ({});

function Table({
  columns,
  data,
  pageCount,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
  // getTdProps = defaultPropGetter,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90%' ,paddingBottom:'50px'}}>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table className='table' {...getTableProps()}>
        <thead className='thead'>
          {headerGroups.map((headerGroup) => (
            <tr className='theadRow' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps([column.getSortByToggleProps()])}>
                  {column.render('Header')}
                  <span>{column.isSorted ? column.isSortedDesc ? <ArrowDownwardOutlinedIcon /> : <ArrowUpwardOutlinedIcon /> : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              // Merge user row props in
              <tr className='tbodyRow' {...row.getRowProps(getRowProps(row))}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      // Return an array of prop objects and react-table will merge them appropriately
                      {...cell.getCellProps([
                        {
                          className: cell.column.className,
                          style: cell.column.style,
                        },
                        getColumnProps(cell),
                        getCellProps(cell),
                      ])}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='pagination'>
        <button className={!canPreviousPage ? 'button-disabled' : 'button'} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<< First Page'}
        </button>{' '}
        <button className={!canPreviousPage ? 'button-disabled' : 'button'} onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'< Previous'}
        </button>{' '}
        <button className={!canNextPage ? 'button-disabled' : 'button'} onClick={() => nextPage()} disabled={!canNextPage}>
          {' Next >'}
        </button>{' '}
        <button className={!canNextPage ? 'button-disabled' : 'button'} onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
          {'Last Page >>'}
        </button>
        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            className='inputForPage'
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          className='select'
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}>
          {[10, 20, 30, 40, 50,100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Table;
