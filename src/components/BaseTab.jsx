import React, { useState } from "react";

export default function BaseTab({ tabs, listClasses }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={`border-t border-solid border-stone-300 py-4`}>
      <ul className={`flex w-full justify-center`}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={` group mx-5 inline-flex cursor-pointer items-center gap-2 text-sm uppercase text-slate-500  ${
              listClasses ? listClasses : ""
            }  ${
              index === activeTab
                ? "active-tab before:content[' '] relative before:absolute before:-top-4 before:h-px before:w-full before:bg-slate-500 "
                : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.icon && <span className="">{tab.icon}</span>}
            <span className="group-[.active-tab]:text-black">{tab.title} </span>
          </li>
        ))}
      </ul>
      <div className={``}>{tabs[activeTab].content}</div>
    </div>
  );
}
