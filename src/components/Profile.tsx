import React from 'react';
import {  useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state:any) => state.user);
  console.log(user);
  
  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Id: {user.user.id}</p>
      <p>Họ và tên: {user.user.userName}</p>
      <p>Giới tính: {user.user.gender}</p>
      <p>Ngày sinh: {user.user.dateBirth}</p>
      <p>Địa chỉ: {user.user.address}</p>
    </div>
  );
};

export default Profile;
