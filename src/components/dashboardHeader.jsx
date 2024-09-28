import React, { useContext, useEffect, useState } from "react";
import "./dashboardHeader.css";
import { Space, Input } from "antd";
import { Link } from "react-router-dom";
import DropDown from "./dropDown";
import { Context } from "../context/OrderContext";
import { useSelector } from "react-redux";
const { Search } = Input;

export default function DashBoardHeader() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const { setSearchItem } = useContext(Context);
  const data = useSelector((state) => state.product);
  const [catagories, setCategories] = useState([]);
  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(data.map((item) => item.category))
    ).map((category, index) => ({
      label: category,
      key: `${index}`,
    }));

    setCategories(uniqueCategories);
  }, [data]);

  return (
    <>
      <header>
        <div className="flex flex-row justify-between items-center p-3">
          <div className="flex flex-row gap-10 items-center">
            <Link to="/">
              <img
                className="web-logo w-20"
                src={
                  "https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
                }
                alt="logo"
              />
              <img
                className="mobile-logo w-20"
                src={
                  "https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
                }
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex flex-row gap-10 items-center">
            <div className="drop-down flex flex-row gap-20">
              <Search
                className="hidden md:flex flex-row items-center"
                placeholder="input search text"
                onChange={(e) => setSearchItem(e.target.value)}
                enterButton
              />
              <Space wrap>
                <DropDown catagories={catagories} />
              </Space>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
