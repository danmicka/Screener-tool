import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

export const COLUMNS = [
  {
    Header: 'symbol',
    accessor: 'symbol',
  },
  {
    Header: 'M5',
    accessor: 'M5',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },
  {
    Header: 'M15',
    accessor: 'M15',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },
  {
    Header: 'M30',
    accessor: 'M30',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },
  {
    Header: 'H1',
    accessor: 'H1',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value?.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value?.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },

  {
    Header: 'H2',
    accessor: 'H2',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value?.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value?.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },
  {
    Header: 'H4',
    accessor: 'H4',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value?.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value?.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },
  {
    Header: 'H6',
    accessor: 'H6',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value?.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value?.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },
  {
    Header: 'H12',
    accessor: 'H12',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value?.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value?.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },
  {
    Header: 'D1',
    accessor: 'D1',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value?.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value?.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },
  {
    Header: 'D3',
    accessor: 'D3',
    Cell: ({ value }) =>
      value === '[Up]' ? (
        <ArrowUpwardOutlinedIcon />
      ) : value === '[Down]' ? (
        <ArrowDownwardOutlinedIcon />
      ) : value === '' || value === undefined ? (
        'no-data'
      ) : value?.indexOf('[Up]') >= 0 ? (
        <div>
          {value.replace('[Up]', '')}
          <ArrowUpwardOutlinedIcon />
        </div>
      ) : value?.indexOf('[Down]') >= 0 ? (
        <div>
          {value.replace('[Down]', '')}
          <ArrowDownwardOutlinedIcon />
        </div>
      ) : (
        value
      ),
  },
];
