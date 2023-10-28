const exp=require('express');
const app=exp();
const cors=require('cors');
require('dotenv').config();
app.use(cors());
app.use(exp.json());
const mclient=require('mongodb').MongoClient;
const dburl=process.env.DATABASE_URL;
mclient.connect(dburl)
.then((client)=>{
    console.log("Database connection success");
})
.catch((error)=>{
    console.log("Error occured:",error);
})
app.get('/',(request,response)=>{
    response.send({message:"Database connection success"});
})
app.listen(process.env.PORT,()=>{
    console.log("Server listening to port:",process.env.PORT);
})