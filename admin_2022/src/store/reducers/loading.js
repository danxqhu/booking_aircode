import { SHOWLOADING, HIDELOADING } from '../constants';
// 初始化状态
const initState = false;

export default function loading(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case SHOWLOADING:
      return data;
    case HIDELOADING:
      return data;
    default:
      return preState;
  }
}
