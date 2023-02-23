import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import { useSelector, useDispatch } from 'react-redux';
import { toOpen, toClose } from '../../features/loading/loadingSlice';

const List = ({ columns }) => {
  // const loading = useSelector(state => console.log(state.loading.value));
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default List;
