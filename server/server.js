import { StaticRouter } from 'react-router-dom';
import express from 'express';
import React from 'react';

import App from '../app/App.jsx';
import render from './render';

//import sourceMapSupport from 'source-map-support';
//sourceMapSupport.install();

const app = express();
app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
    res.status(200).send(render(
        <StaticRouter context={{}} location={req.url}>
            {require('../app/App.jsx')}
        </StaticRouter>
    ));
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
