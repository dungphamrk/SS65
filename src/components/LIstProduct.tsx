import React from 'react'
import { useSelector } from 'react-redux';

export default function LIstProduct() {
    const products=useSelector((state:any)=>state.products)
    return (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng (kg)</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {products.products.map((product:any) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button >Sửa</button>
                  <button >Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}
