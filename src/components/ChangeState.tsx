import React from "react";
import { useDispatch, useSelector } from "react-redux";
const ChangeState = () => {
    
  const company = useSelector((state: any) => state.companyReducer);
  console.log(company);
  
  const dispatch = useDispatch();
  const changeCompany = () => ({
    type: "CHANGE_COMPANY",
  });
  const handleChangeCompany = () => {
    dispatch(changeCompany());
  };

  return (
    <div>
      <p>Company: {company.company}</p>
      <button onClick={handleChangeCompany}>Change state</button>
    </div>
  );
};

export default ChangeState;
