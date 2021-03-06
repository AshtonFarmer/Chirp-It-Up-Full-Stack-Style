import * as express from 'express';

import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/blogs', async (req, res) => {
    try {
        res.jsonp(await db.Blogs.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/blogs/:id', async (req, res) => {
    try {
        let id:string = (req.params.id)
        res.jsonp((await db.Blogs.one(1))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;