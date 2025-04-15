import { WebSocketServer } from "ws";
import prisma from "@repo/db";

const wss = new WebSocketServer({ 
    port: 8080    
})

wss.on('connection', async(socket) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    socket.send('connected to the ws-server');
})