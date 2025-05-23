const express = require('express');
const app = express();
require('dotenv').config();
require('./models/db.js');

const PORT = process.env.PORT || 8080;
const taskRouter = require('./routes/taskRouter.js');
const bodyParser = require('body-parser');
const cors = require('cors');
app.get("/",(req,res)=>{
  res.send("hello ");
});
app.use(cors());
app.use(express.json());


// app.use(bodyParser.json());

app.use("/task",taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  