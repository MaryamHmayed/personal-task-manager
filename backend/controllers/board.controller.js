const User = require("../models/user.model");


const createBoard = async (req, res) => {
    try {
        const user = req.user;
        const { title } = req.body;
        const existingBoard = user.boards.find(board => board.title.toLowerCase() === title.toLowerCase());
        if (existingBoard) {
            return res.status(400).json({ error: 'Board with the same title already exists for this user' });
        }

        const newBoard = { title, columns: [] }; 
        user.boards.push(newBoard);
        await user.save();
      
        return res.status(201).json({ message: 'Board created successfully', board: newBoard });

    } catch (error) {
        console.error('Error creating board:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getAllBoards = async (req, res)=>{
    try {
        return res.status(200).json(req.user?.boards);
      } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
      }
    };



// const getBoard = async (req, res)=>{
//     const { id } = req.params;
//   try {
//     const board = req.user?.boards?.find((board) => board._id === id);
//     if (!board) return res.status(404).send("Board not found");
//     return res.status(200).json(board);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Internal server error");
//   }
// };


const deleteBoard = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndUpdate(
        req.user._id,
        {
          $pull: { "boards.$._id": id },
        },
        { new: true }
      );
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal server error");
    }
  };


  
module.exports={
  createBoard,
  getAllBoards,
  deleteBoard
};