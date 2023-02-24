import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
// import { userColumns, userRows } from '../../datatablesource';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import Api from '../../util/Api';
import { useSelector, useDispatch } from 'react-redux';
// import { toOpen, toClose } from '../../features/loading/loadingSlice';

// type columnsType = {};

const Datatable = ({ columns }) => {
  // const Datatable = ({ columns }: any) => {
  const [list, setList] = useState([]);
  // let data = [];
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const dispatch = useDispatch();

  // console.log(path);
  let requestUrl = '';
  if (path === 'users') {
    requestUrl = Api.getUsers;
  }
  if (path === 'hotels') {
    requestUrl = Api.getHotels;
  }
  if (path === 'rooms') {
    requestUrl = Api.getRooms;
  }
  const { data, loading, error } = useFetch(requestUrl);
  // data = useFetch(requestUrl).data;

  const handleDelete = async id => {
    // const handleDelete = async (id: string) => {
    console.log('Delete id:', id);
    console.log('Delete path:', `/${path}/${id}`);
    if (path === 'users') {
      requestUrl = Api.deleteUser;
    }
    if (path === 'hotels') {
      requestUrl = Api.deleteHotel;
    }
    if (path === 'rooms') {
      requestUrl = Api.deleteRoom;
    }
    console.log(requestUrl);
    try {
      await axios.post(`${requestUrl}`, { id });
      setList(list.filter(item => item._id !== id));
    } catch (err) {}
  };

  // console.log('axios loading:', loading);

  // loading ? dispatch(toOpen()) : dispatch(toClose());
  // if (loading) {
  //   dispatch(toOpen());
  //   console.log(444);
  // }
  // if (!loading) {
  //   dispatch(toClose());
  //   console.log(333);
  // }

  // useEffect(() => {
  //   if (loading) {
  //     dispatch(toOpen());
  //     console.log(1);
  //   }
  //   // if (!loading && !isUnmount) {
  //   //   dispatch(toClose());
  //   //   console.log(2);
  //   // }
  //   // loading ? dispatch(toOpen()) : dispatch(toClose());
  // }, [loading, dispatch]);

  const loading2 = useSelector(state => console.log(state.loading));
  // const loading2 = useSelector((state: object) => console.log(state.loading));

  // console.log('list:', list);

  useEffect(() => {
    setList(data);
    // setList(data.map(item=>{return item._id } ));
  }, [data]);

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: params => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row._id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <div className="datatableLeftTitle">{path}</div>

        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
};

export default Datatable;
