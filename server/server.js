import { StaticRouter } from 'react-router-dom';
import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';

import App from 'App';
import render from './render';
import { configure } from 'store/configureStore';

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => console.log(`App Is Listening On Port ${PORT}`));
