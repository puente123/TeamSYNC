import React from "react";

//when using .jsx use className, class is reservec for JS
const NavbarHeader = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Employee Management System
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavbarHeader;
