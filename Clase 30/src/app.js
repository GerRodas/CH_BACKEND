import express from 'express';
import nodemailer from 'nodemailer';
import __dirname from './utils.js';

const app= express()
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'germanrodas@gmail.com',
        pass: 'wabpclkizqjudoam'
    }
})

app.get('/mail', async(req,res)=>{
    const result = await transport.sendMail({
        from: 'germanrodas@gmail.com',
        to: 'germanrodas@gmail.com',
        subject: 'Las fotis que pediste',
        html: `
        <div>
            <h1> Lo mejor de lo mejor, de los mejores</h1>
        </div>
        `,
        attachments:[{
            filename: 'messilenguita.jpg',
            path:__dirname+'/images/messilenguita.jpg',
            cid: 'messilenguita'
        },{
            filename: 'antodiosa.jpg',
            path:__dirname+'/images/antodiosa.jpg',
            cid: 'antodiosa'
        }]
    })
    console.log(result)
    res.send({status:"success", result:"Email enviado"})
})

app.listen(8080)