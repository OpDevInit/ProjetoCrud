
console.log("Iniciando meu servidor ");

const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cadastros = {
    "clientes":[ 
         {
            "id": 1,
            "nome": "jholl",
            "endereco": "aqui pertinho",
            "email": "jholl@gmail.com"
        },
        {
            "id": 2,
            "nome": "jessica",
            "endereco": "aqui do lado",
            "email": "jess@gmail.com"
        },

    ]
};

//retornar um cliente
app.get('/clientes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cadastros.clientes[index]);
})

//retornar todos os clientes
app.get('/clientes', (req, res) => {

    return res.json(cadastros);
})

//Criar novo cadastro:
app.post('/clientes', (req, res) => {
    var id = req.body.id;
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var email = req.body.email;
    var { cadastrados } = cadastros.clientes;

    clientes = cadastros.clientes;
    clientes.push({"id: ":id,"nome ":nome, "endereco: ":endereco,"email: ":email,});

    return  res.json(clientes);
    
})

//Atualizar cliente:
app.put('/clientes/:index', (req, res) => {
    const {index} = req.params;
    var id = index;
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var email = req.body.email;
    const clientes = cadastros.clientes;
    
     if(clientes.indexOf(index)){
    clientes.splice((index-1), 4,{"id: ":id,"nome ":nome, "endereco: ":endereco,"email: ":email})
    }
    return res.json(cadastros.clientes[index]);
})
//Deletar cliente:
app.delete('/clientes/:index', (req, res) => {
    const clientes = cadastros.clientes;
    const {index} = req.params;
    var id = index;
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var email = req.body.email;
    

    if(clientes.indexOf(index)){
        clientes.splice((index-1), 4)
        }
    return res.json({ message: "O curso foi deeletado!!" });

})



app.listen(port, () => {
    console.log(`😀😀 Servidor iniciado...escutando na porta ${port}`)
})
