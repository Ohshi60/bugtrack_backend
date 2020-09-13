import express from 'express';


//Importing the routes
import indexRouter from '../routes/index'

const app = express();
const port = 3000;
app.use('/', indexRouter);


app.listen(port, () => {
    console.log(`Serving app on port ${port} `);
})
export default app;