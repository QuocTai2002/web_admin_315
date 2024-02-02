import React from "react";
import './style.scss'
const Loading = () => {
  return (
    <div className="container_loader">
        <div class="loader">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square "></div>
      <div class="square last"></div>
    </div>
    </div>
    
  );
};

export default Loading;
