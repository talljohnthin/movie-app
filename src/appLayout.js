import React from "react";
import Header from './view/header'
import Footer from './view/footer'
import './styles/app.scss'

const AppLayout = ({ children }) => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="page-body-wrapper">
            <Header />
            <div className="page-body">{children}</div>
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
