const initialState = {
    products: [
      {
        id: 1,
        productName: 'Cam sành',
        price: '20.000 đ',
        quantity: 10
      },
      {
        id: 2,
        productName: 'Bưởi ba roi',
        price: '50.000 đ',
        quantity: 15
      }
    ]
  };
export const products = (state = initialState, action: any) => {
    return state;
  };