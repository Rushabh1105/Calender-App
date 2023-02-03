import React, {} from 'react'
import "./Calender.css";

function Calender() {
  return (
    <div className='calender_container'>
        <div className="calender_inner_container">
            <h2>Calender</h2>
            <div id='calender_display'>
                <div className="month_header">
                    <div className="left_arrow">{"<"}</div>
                    <div id='month'>August, 2023</div>
                    <div className="right_arrow"> {">"} </div>
                </div>
                <div className="calender_container_child">
                    <div>Sunday</div>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                </div>
                <div className="calender_container_child">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Calender
