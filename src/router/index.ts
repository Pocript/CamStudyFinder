import express, { Request,Response,NextFunction } from "express";
const router = express.Router();
const models = require('../models');

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    let data = await models.Server.findAll({
        order: [
            ['createdAt', 'DESC']
        ],
        limit: 10
    })
    res.render('index',{rows:data})
});

export = router;