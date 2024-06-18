const initialState ={
    listUser:[
        {
            id: 1,
            userName: "Nguyễn Văn Nam",
            gender: "Nam",
            dateBirth: "20/03/2023",
            address: "Thanh Xuân, Hà Nội",
        },
        {
            id: 2,
            userName: "Nguyễn Văn A",
            gender: "Nữ",
            dateBirth: "11/11/1111",
            address: "Thanh Xuân, Hà Nội",
        }
    ]
}
export const listUser = (state = initialState, action: any) => {
    return state;
  };