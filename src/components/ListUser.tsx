import React from 'react'
import { useSelector } from 'react-redux'
export default function ListUser() {
    const listUser=useSelector((state:any)=>state.listUser)
    console.log(listUser);
    
  return (
    <div>
       <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {listUser.listUser.map((user:any) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.gender}</td>
            <td>{user.dateBirth}</td>
            <td>{user.address}</td>
            <td>
              <button >Sửa</button>
              <button >Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
