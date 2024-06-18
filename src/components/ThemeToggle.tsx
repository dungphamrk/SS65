import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeToggle = () => {
  const toggleTheme = () => ({
    type: "TOGGLE_THEME",
  });

  const theme = useSelector((state:any) => state.themeReducer);
  const dispatch = useDispatch();
  console.log(theme);
  

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{height:'400px', width:'400px',backgroundColor:`${theme.theme}`}}>

      <label style={{color:'blue'}}>
        <input
          type="checkbox"
          checked={theme === "black"}
          onChange={handleToggle}
          
        />
        Chế độ tối
      </label>
    </div>
  );
};

export default ThemeToggle;
