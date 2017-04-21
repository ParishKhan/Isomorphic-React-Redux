
import express from 'express';
import React from 'react';
import App from '../app/Layout.jsx';

import { StaticRouter as Router, matchPath } from 'react-router';
//import sourceMapSupport from 'source-map-support';
import render from './render';

//sourceMapSupport.install();

const app = express();
app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
    res.status(200).send(render(
        (
            <Router context={{}} location={req.url}>
                <App />
            </Router>
        )
    ));
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
