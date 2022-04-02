
console.log("Iniciando meu servidor ");

const express = require('express');
const req = require('express/lib/request');
const dados = require("./dados");
const app = express()
const port = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//retornar um curso
app.get('/clientes/:index', (req, res) => {
    const {index} = req.params;
    
    return res.json(dados.cadastros[index]);
})

//retornar todos os cursos
app.get('/clientes', (req, res) => {
     
    return res.json(dados.cadastros);
})

//Criar novo cadastro:
app.post('/clientes', (req, res) => {
    const {cadastro} =req.body;
    const {clientes} = dados;

    clientes.push(cadastro);

    return res.json(clientes);
})

//Atualizar curso:
app.put('clientes/:index',(req, res) =>{
    const {index} = req.params;
    const {name} = req.body;

    clientes[index]= name;

    return res.json(cursos);
})

//Deletar curso:
app.delete('clientes/:index',(req, res) =>{
        const {index} = req.params;

        clientes.splice(index, 1);
        return res.json({message: "o curso foi deletado"});
    })



app.listen(port, () => {
    console.log(`😀😀 Servidor iniciado...escutando na porta ${port}`)
})
