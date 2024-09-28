import { Link } from "react-router-dom";
import { Drawer } from "antd";
import React from "react";

export default function DrawerFun({ setOpen, open }) {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer width={"70%"} onClose={onClose} open={open}>
        <div className="flex flex-col gap-5">
          <Link to="/aboutus">
            <span className="text-pop text-lg">About Us</span>
          </Link>
          <Link to="/Courses?category=combats">
            <span className="text-pop text-lg">Courses</span>
          </Link>
          <Link to="/Events">
            <span className="text-pop text-lg">Events</span>
          </Link>
          <Link to="https://icube.knowvationlearnings.in" target="_blank" rel="noreferrer">
            <span className="text-pop text-lg">iCube</span>
          </Link>
          <Link to="/Services">
            <span className="text-pop text-lg">Services</span>
          </Link>
          <Link to="/Blogs">
            <span className="text-pop text-lg">Blogs</span>
          </Link>
          <Link to="/Careers">
            <span className="text-pop text-lg">Careers</span>
          </Link>
          <Link to="/dashboard">
            <span className="text-pop text-lg">Dashboard</span>
          </Link>
        </div>
      </Drawer>
    </>
  );
}
