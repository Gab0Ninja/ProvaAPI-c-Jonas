
import { dobro, somar, cor, ingressocinema ,media, temperatura } from './services.js'

import { Router } from 'express'

const server = Router();

server.get('/dobro/:numero', (req, resp) => {
    const numero = Number(req.params.numero);

    const d = dobro(numero);

    resp.send({
        dobro: d
    })


})


server.get('/somar', (req, resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const x = somar(a, b);

    resp.send({
        soma: x
    })
})


server.post('/somar', (req, resp) => {
    try {
        const { valores: { a, b } } = req.body;

        const x = somar(a, b);

        resp.send({
            soma: x
        })

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/cor/:qualcor', (req, resp) => {
    const qual = String(req.params.qualcor)
    const x = cor(qual);
    resp.send({
        cor: x
    })
})

server.post('/dia2/ingressocinema', (req, resp) => {
    try {
        const { inteira, meia, dia, nacionalidade } = req.body;
        const x = cinema(inteira, meia, dia, nacionalidade)

        resp.send({
            total: x
        })

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.post('/media',(req,resp) =>{
    try {
        const{n1,n2,n3} =req.body

        const x=media(n1,n2,n3);

        resp.send({
            media:x
        })
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})


export default server;