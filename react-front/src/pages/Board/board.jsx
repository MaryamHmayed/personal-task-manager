import React from "react";
import "./board.css";
import "../User/user"
import UserComponent from "../User/user";

const Board =()=>{


    
    return(<> <div className="task-manager">
    <h1 className="page-title">TASK MANAGER</h1>
    <UserComponent/>
    
    <div className="board-container">
        <h3 className="board-title"> Final Project</h3>
        <div className="columns">
            <div className="column">
            <h4 className="column-title">To-do</h4>
            
            </div>
            <div className="column">
            <h4 className="column-title">In progress</h4>    
            </div>
            <div className="column">
            <h4 className="column-title">Done</h4>
            
            </div>
        </div>






    </div>
    
    
    </div>
    </> )
}
















export default Board;