const User = require("../models/user.model");

const createColumn = async (req, res) => {
    try {
      const user = req.user;
      const { board_id, title } = req.body;
  
      const board = user.boards.find(board => board._id.toString() === board_id);
     
      if (!board) {
        return res.status(404).json({ error: 'Board not found' });
      }
  
      const existingColumn = board.columns.find(column => column.title === title);
      if (existingColumn) {
        return res.status(400).json({ error: 'Column with the same title already exists for this board' });
      }

      const newColumn = { title, tasks: [] };
      board.columns.push(newColumn);
      await user.save();
  
      return res.status(201).json({ message: 'Column created successfully', column: newColumn });
    } catch (error) {
      console.error('Error creating column:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  const getColumns = async (req, res) => {
    try {
        const { board_id } = req.params;
        const user = req.user;

        const board = user.boards.find(board => board._id.toString() === board_id);
        if (!board) {
            return res.status(404).json({ error: 'Board not found' });
        }

        return res.status(200).json({ columns: board.columns });
    } catch (error) {
        console.error('Error retrieving columns:', error);
        return res.status(500).json({ error: 'Internal server error'});
    }
};













  
  module.exports = {getColumns,createColumn};