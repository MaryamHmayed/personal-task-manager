const User = require("../models/user.model");


const createTask = async (req, res)=>{
    try {
        const user = req.user;
        const { board_id, column_id, title, description, attachments, tags } = req.body;

        const board = user.boards.find(board => board._id.toString() === board_id);
        if (!board) {
            return res.status(404).json({ error: 'Board not found' });
        }

        const column = board.columns.find(column => column._id.toString() === column_id);
        if (!column) {
            return res.status(404).json({ error: 'Column not found' });
        }

        const existingTask = column.tasks.find(task => task.title === title);
        if (existingTask) {
            return res.status(400).json({ error: 'Task with the same title already exists in this column' });
        }

        const newTask = { title, description, attachments, tags };
        column.tasks.push(newTask);
        await user.save();

        return res.status(201).json({ message: 'Task created successfully', task: newTask });
     
    } catch (error) {
        console.error('Error creating task:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


const getTasks = async (req,res)=>{
    try {
        const user = req.user;
        const { board_id, column_id } = req.params;
        const board = user.boards.find((board) => board._id.toString() === board_id);
        if (!board) {
          return res.status(404).json({ error: "Board not found" });
        }
    
        const column = board.columns.find((column) => column._id.toString() === column_id);
        if (!column) {
          return res.status(404).json({ error: "Column not found" });
        }
    
        return res.status(200).json({ tasks: column.tasks });
      } catch (error) {
        console.error("Error fetching tasks:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    };
    



const deleteTask = async (req, res) => {
    try {
        const user = req.user;
        const { board_id, column_id, task_id } = req.body;

        const board = user.boards.find(board => board._id.toString() === board_id);
        if (!board) {
            return res.status(404).json({ error: 'Board not found' });
        }
        
        const column = board.columns.find(column => column._id.toString() === column_id);
        if (!column) {
            return res.status(404).json({ error: 'Column not found' });
        }

        const taskIndex = column.tasks.findIndex(task => task._id.toString() === task_id);
        if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }

        const deletedTask = column.tasks.splice(taskIndex, 1)[0];
        await user.save();

        return res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (error) {
        console.error('Error deleting task:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports={createTask,deleteTask,getTasks}