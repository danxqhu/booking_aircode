// src/store/actions/count.js
import { SHOWLOADING, HIDELOADING } from '../constants';

// 普通action的值为object `{type: INCREMENT, data }`
export const showloading = data => ({ type: SHOWLOADING, data });
export const hideloading = data => ({ type: HIDELOADING, data });

// 异步action的值为函数
// export const incrementAsync = (data, time) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(increment(data));
//     }, time);
//   };
// };
