import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
function Sidebar() {
  return (
    <div className="sidebar border-r border-[#e8f5fe] flex-[0.3] mt-5 px-5">
      {/* Twitter icon */}
      <TwitterIcon className="text-sky-500 text-xl ml-5 mb-5" />
      {/* Sidebar option */}
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} text="Lists" />
      <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} text="More" />


      {/* Button tweet */}
      <Button variant="outlined" className="bg-sky-500 border-none text-white font-bold rounded-[30px] h-[50px] mt-5" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
