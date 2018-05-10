import * as express from "express";
import {test} from "./services/HelloService";
import * as path from "path";

const app = express();

let staticPath =  path.resolve(__dirname, '../www');

app.use(express.static(staticPath));

app.get('/api/v1', function (req, res) {
    res.send('Hello World! ?? .' + test);
});

app.get('/app', function (req, res) {
    res.redirect('/');
});


app.listen(3000, function () {
    console.log("staticPath:", staticPath);
    console.log('Example app listening on port 3000!')
});
