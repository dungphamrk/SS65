const initialState = {
    company: 'Rikkei Academy'
  };
  
  const companyReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'CHANGE_COMPANY':
        return {
          ...state,
          company: 'RikkeiSoft'
        };
      default:
        return state;
    }
  };
  
  export default companyReducer;
  