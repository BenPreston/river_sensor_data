import { format } from 'date-fns';
import ColumnFilter from './ColumnFilter';

export const COLUMNS = [
  {
    Header: 'ID',
    Footer: 'ID',
    accessor: 'id',
    Filter: ColumnFilter,
  },
  {
    Header: 'direction',
    Footer: 'direction',
    accessor: 'direction',
    Filter: ColumnFilter,
  },
  {
    Header: 'Transmitted At',
    Footer: 'Transmitted At',
    accessor: 'transmittedAt',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy hh:mm');
    },
    Filter: ColumnFilter,
  },
  {
    Header: 'latitude',
    Footer: 'latitude',
    accessor: 'latitude',
    Filter: ColumnFilter,
  },
  {
    Header: 'longitude',
    Footer: 'longitude',
    accessor: 'longitude',
    Filter: ColumnFilter,
  },
  {
    Header: 'sensorId',
    Footer: 'sensorId',
    accessor: 'sensorId',
    Filter: ColumnFilter,
  },
  {
    Header: 'payload',
    Footer: 'payload',
    accessor: 'payload',
    Filter: ColumnFilter,
  },
  {
    Header: 'bytes',
    Footer: 'bytes',
    accessor: 'bytes',
    Filter: ColumnFilter,
    disableFilters: true,
  },
];
