import { Button } from "@material-ui/core";
import React from "react";
import style from "./Sidebar.module.css";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Button 
      startIcon={<AddIcon fontSize="large"/>}
      className={style.sidebar__compose}
      >
        Compose
     </Button>
    </div>
  );
}

export default Sidebar;
