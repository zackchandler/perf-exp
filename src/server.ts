import * as express from 'express';
import path = require('path');

const app = express();

app.use('/assets', express.static(__dirname + '/../public/assets'));
app.use('/assets', express.static(__dirname + '/../node_modules/react/dist'));
app.use('/assets', express.static(__dirname + '/../node_modules/react-dom/dist'));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname + '/../public/app.html'));
});

const port: number = process.env['PORT'] || 3000;
app.listen(port, () => console.log(`Starting Express on port ${port}`));

