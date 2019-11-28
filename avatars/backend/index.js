const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const avatarRoutes = require('./routes/avatars');
const PORT = 3001;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/avatars", avatarRoutes);

app.use(function(req, res, next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

app.listen(PORT, function(){
    console.log(`Server starting on port ${PORT}`);
});