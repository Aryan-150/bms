import express from "express";
import prisma from "@repo/db";
const app = express();

app.use(express.json());

app.post("/signup", async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    })

    res.json({
        id: user.id,
        msg: "user signed up"
    })
})

app.get("/", async(req, res) => {
    const users = await prisma.user.findMany({});

    res.json({
        users: users
    })
})

app.listen(4000, () => {
    console.log('server is listening at port: 4000');
})