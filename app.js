const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const { v4: uuidv4 } = require('uuid');


mongoose.connect("mongodb+srv://sajin:sajin@expense-tracker.ejsak.mongodb.net/?retryWrites=true&w=majority&appName=expense-tracker").then(()=>{
  console.log("Connected to database");
});

const expenseSchema = new mongoose.Schema({
  id:{type:String,require:true,unique:true},
  title:{type:String,require:true},
  amount:{type:String,require:true},
})

const Expense = mongoose.model("Expense",expenseSchema);

app.get("/api/expenses", async(req,res)=> {
 const expenses=await Expense.find();
 if(!expenses){
    res.status(404).send({ message:"No expenses found"})
 }
 res.status(200).json(expenses);
})

// app.get("/api/expenses", (req, res) => {
//   console.log(req.query);
//   res.status(200).json(expenses);
// });

// app.get("/api/expenses/:id", (req, res) => {
//   const { id } = req.params;
//   const expense = expenses.find((expense) => expense.id == id);
//   expense
//     ? res.status(200).json(expense)
//     : res.status(404).json({ message: "Id not found" });
// });

app.post("/api/expenses",async(req,res)=>{
  const {title , amount} = req.body;
  if(!title || ! amount){
    res.status(400).json({message:"Title and Amount are required"});
    return
  }
  const newExpense = new Expense({
    id:uuidv4(),
    title,
    amount
  })
  const savedExpense= await newExpense.save();
  res.status(201).json(savedExpense);
  res.end()
})

app.listen(3000, () => {
  console.log("Server is running");
});
app.delete("/api/expenses/:id",async(req,res)=>{
    const {id}=req.params;
    try{
    const deletedExpense = await Expense.findOneAndDelete({id});
    if(!deletedExpense){
        res.status(404).json({message:"Expense Not Found"});
        return;
    }
    res.status(200).json({message:"Expense Deleted Successfully"});
}catch(error){
    res.status(500).json({message:"Internal Server Error"});
}
}
)
app.put("/api/expenses/:id", async (req, res) => {
    try {
        const{ id } = req.params;
        const { title, amount } = req.body;

        if (!title && !amount) {
            res.status(400).json({ message: "No fields to update provided" });
            return;
        }


        const updatedExpense = await Expense.findOneAndUpdate(
            { id }, 
            { $set: { title, amount } }, 
            { new: true }
        );


        if (!updatedExpense) {
            res.status(404).json({ message: "Expense not found" });
            return;
            
        }

        res.status(200).json({ message: "Expense updated successfully", updatedExpense });
    } catch (error) {
        console.error("Error updating expense:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});
