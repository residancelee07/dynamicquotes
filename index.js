const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const nodemon = require('nodemon');
const fs = require('fs');
const path = require('path')
const filePath = path.join(__dirname,'public');
app.use(express.static(filePath));
app.get('/',(req,res)=>{
    res.sendFile(`${filePath}/index.html`);
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
  