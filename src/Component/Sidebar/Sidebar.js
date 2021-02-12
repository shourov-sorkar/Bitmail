import { Button, IconButton } from "@material-ui/core";
import React from "react";
import style from "./Sidebar.module.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import SidebarOption from "./SidebarOptions/SidebarOption";
function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className={style.sidebar__compose}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={SendIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
      <div className={style.sidebar__footer}>
        <div className={style.sidebar__footerIcons}>
          <IconButton>
            <PersonIcon/>
          </IconButton>
          <IconButton>
            <DuoIcon/>
          </IconButton>
          <IconButton>
            <PhoneIcon/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
