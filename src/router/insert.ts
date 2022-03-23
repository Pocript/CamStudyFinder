import express, { Request,Response,NextFunction } from "express";
const models = require('../models');
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.render('insert',{})
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    let body = req.body
    console.log(req.body)
    const server = await models.Server.create({
        type:body.type,
        title:body.name,
        desc:body.desc,
        adr:body.adr,
        code:body.code,
        pwd:body.pwd
    });
    res.sendStatus(200)
});

export = router;