import React from "react";
import "./SideBar.css";

const myArr = [
  {
    name: "Blueberry",
    price: 320000,
    status: true,
  },
  {
    name: "Grape",
    price: 200000,
    status: false,
  },
];

const SideBar = () => {
  return (
    <ul>
      {myArr.map((item) => {
        if (item.price < 250000)
          return (
            <li>
              {item.status === true ? (
                <input className="noted" value={item.name}></input>
              ) : (
                <a href="#home" className="noted">
                  {item.name} - {item.price}
                </a>
              )}
            </li>
          );
        else
          return (
            <li>
              {item.status === true ? (
                <input value={item.name}></input>
              ) : (
                <a href="#home">
                  {item.name} - {item.price}
                </a>
              )}
            </li>
          );
      })}
    </ul>
  );
};

export default SideBar;
