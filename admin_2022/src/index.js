import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { DarkModeContextProvider } from './context/darkModeContext';
// import loading from './components/loading';

// // 全局挂载组件
// React.$message = function (arg) {
//   // 默认部分参数
//   const { type = 'success', content, duration = 1, onclose } = { ...arg };
//   loading[type](content, duration, onclose);
// };

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
