import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    //noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req,res){
    //hard coding for simplicity - pretend this hits the database
    res.json([
        {"id": 1,"firstname":"Brij","lastname":"Kart","email":"bk@gmail.com"},
        {"id": 2, "firstname":"Meg","lastname":"Kart","email":"mk@gmail.com"},
        {"id": 3, "firstname":"We","lastname":"Kart","email":"wk@gmail.com"}
    ]);
});
app.listen(port,function(err){
    if(err){
        console.log(err);

    } else {
        open('http://localhost:' + port);
    }
});
