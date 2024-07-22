import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import "./widgets.css";
const Widget = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2> Linked News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React development - 1", "one of top news for frontend")}
      {newsArticle("React development - 2", "one of top news for frontend")}
      {newsArticle("React development - 3", "one of top news for frontend")}
      {newsArticle("React development - 4", "one of top news for frontend")}
      {newsArticle("React development - 5", "one of top news for frontend")}
      {newsArticle("React development - 6", "one of top news for frontend")}
      {newsArticle("React development - 7", "one of top news for frontend")}
    </div>
  );
};

export default Widget;
