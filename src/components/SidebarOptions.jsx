import React from "react";

const SidebarOptions = ({active, text, Icon }) => {
  return (
    <div className={`sidebarOption flex items-center cursor-pointer hover:bg-[#e8f5fe] rounded-[30px] hover:text-sky-500 hover:transition-colors ${active && 'text-sky-500'}`}>
      <div className="p-5">
        <Icon />
      </div>

      <h2 className="font-bold text-xl mr-5">{text}</h2>
    </div>
  );
};

export default SidebarOptions;
