import React, { useContext } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { createReducer } from "@reduxjs/toolkit";
import { Context } from "../context/OrderContext";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { ProductActions } from "../state/slices/products";
const items = [
  {
    label: (
      <Link to="/Courses?category=combats">
        <span className="pr-10">Courses</span>
      </Link>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link to="/Services">
        <span>Services</span>
      </Link>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link to="/Blogs">
        <span>Blogs</span>
      </Link>
    ),
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link to="/Events">
        <span>Events</span>
      </Link>
    ),
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link to="/Careers">
        <span>Careers</span>
      </Link>
    ),
    key: "4",
  },

  {
    type: "divider",
  },
  // {
  //   label: (
  //     <Link to="/Olympiads">
  //       <span>Olympiad Mock Tests</span>
  //     </Link>
  //   ),
  //   key: "5",
  // },
];
const DropDown = (catagories) => {
  const cate = catagories.catagories;
  console.log(cate, "cate");
  const dispatch = useDispatch();
  const { catag, setCatag, setShow, setSearchItem, searchItem } =
    useContext(Context);

  const handleMenuClick = (e) => {
    const selectedLabel = e.domEvent.target.innerText;
    setSearchItem(selectedLabel);
    setCatag(selectedLabel);
  };
  return (
    <>
      {cate && (
        <Dropdown
          className="text-pop text-black"
          menu={{
            items: cate,
            onClick: handleMenuClick,
          }}
        >
          <div onClick={(e) => e.preventDefault()}>
            <Space>
              {catag || "Cateogries"}
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      )}
    </>
  );
};
export default DropDown;
