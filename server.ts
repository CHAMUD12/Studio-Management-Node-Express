import express from 'express';
// import instructorRoutes from "./routes/instructor-routes";
import customerRoutes from "./routes/customer-routes";
import eventPackageRoutes from "./routes/eventPackage-routes";
import instructorRoutes from "./routes/instructor-routes";

const app = express();

app.use(express.json());
app.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})

// app.use('/instructor', instructorRoutes)
app.use('/customer',customerRoutes)
app.use('/eventPackage',eventPackageRoutes)
app.use('/instructor', instructorRoutes)

app.listen(3000, (err => {
    console.log("Server running on port 3000");
}));

app.use('/', (req, res, next) => {
    res.status(200).send('Not Found');
})
