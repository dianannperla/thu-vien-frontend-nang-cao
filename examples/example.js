import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const App = () => {
  return (
    <div>
      <h1>Ví dụ Sử Dụng Thư Viện</h1>
      <Button label="Nhấn Tôi" onClick={() => alert('Button Clicked!')} />
      <Card title="Tiêu Đề" content="Đây là nội dung trong card." />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));