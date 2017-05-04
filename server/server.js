import { StaticRouter } from 'react-router-dom';
import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';

import App from '../app/App.jsx';
import render from './render';
import { configure } from '../app/store/configureStore';

//import sourceMapSupport from 'source-map-support';
//sourceMapSupport.install();

const app = express();
app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
    const store = configure({commentText: "Your Name"});

    res.status(200).send(render(
        <Provider store={store} >
            <StaticRouter context={{}} location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    ));
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
