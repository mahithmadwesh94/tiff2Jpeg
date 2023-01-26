const express = require('express');

const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

const port = process.env.PORT || 8092;


const fileUploadRoute = require('./routes/fileUpload');
app.use(express.json());
app.use(cors());
app.use(fileUpload());


app.use('/api/upload', fileUploadRoute);


app.listen(port,()=>{
     console.log(`Server is running on PORT ${port}`);
})