import Axios from 'axios';

export const getTableData = async () =>
    Axios.get('http://127.0.0.1:8000/');

