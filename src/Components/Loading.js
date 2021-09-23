import React from 'react';
import './Loading.css';
function Loading() {
    return (
        <div className="load">
        <div className="loading">
          <div className="loading-text">
              LOADING
          </div>
        <div className ="spinner col1"></div>
        <div className ="spinner col2"></div>
        <div className ="spinner col3"></div>
        </div>
       </div> 
    )
}

export default Loading
