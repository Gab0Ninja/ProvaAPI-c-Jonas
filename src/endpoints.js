import { dobro, somar, corPrimaria, frequenciaCaracter, ingresso, maiorNumero, media, temperatura, tabuada } from './services.js'
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

server.get('/dia2/corprimaria/:cor', (req, resp) => {
    try{
        const { cor } = req.params;
        const primaria = corPrimaria(cor);
        resp.send ({
            primaria: primaria
        });
    }   catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/dia2/ingressocinema', (req, resp) => {
    try {
        const { qtdInteiras, qtdMeias, diaSemana, nacionalidade } = req.body;
        const total = ingresso(qtdInteiras, qtdMeias, diaSemana, nacionalidade)
        resp.send({
            total: total
        });
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.get('/dia2/freqcaractere/:texto/:caractere', (req, resp) => {
    try{
        const { texto, caractere } = req.params;
        const freq = frequenciaCaracter(texto, caractere);
        resp.send({
            freq: freq
        });
    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/dia2/maiorNumero', (req, resp) => {
    try{
        const numeros  = req.body;
        const maior = maiorNumero(numeros);
        resp.send({
            maior: maior
        });
    } catch(err) {
        resp.send({
            erro: err.message
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

server.get('/temperatura', (req, resp) => {
    try{
        const t = Number(req.query.t);
        const x = temperatura(t);
        resp.send({
            febre: x
        })
    } catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/tabuada', (req, resp) => {
    try{
    const a = Number(req.query.n);
    const x = tabuada(a);

    resp.send({
        tabuada: x
    })
    }catch(err){
        resp.send({
            erro: err.message
        })
    }
})


export default server;