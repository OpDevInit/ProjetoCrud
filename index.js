
console.log("Iniciando meu servidor ");

const express = require('express');
const req = require('express/lib/request');
const app = express();
var port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var cadastros = {
    "herois": [
        {
            "id": 1,
            "Liga": "Marvel",
            "Herói": "Homem de Ferro",
            "Habilidade": "Armaduras",
            "Personalidade": "Inteligente,filantropo"
        },
        {

            "id": 2,
            "Liga": "DC",
            "Herói": "Batman",
            "Habilidade": "Armaduras",
            "Personalidade": "Inteligente,filantropo"
        },

    ]
};


//retornar herói selecionado
app.get('/herois/:index', (req, res) => {
    const { index } = req.params;
    return res.json(cadastros.herois[index]);
})

//retornar todos os heróis
app.get('/herois', (req, res) => {

    return res.json(cadastros.herois);

}
)

//Criar novo cadastro:
app.post('/herois', (req, res) => {
    var id = req.body.id;
    var liga = req.body.Liga;
    var heroi = req.body.Herói;
    var habilidade = req.body.Habilidade;
    var personalidade = req.body.Personalidade;
    var novoHeroi = cadastros.herois;

    novoHeroi.push({ "id: ": id, "Liga ": liga, "Heroi: ": heroi, "Habilidade: ": habilidade, "Personalidade": personalidade });

    return res.json(novoHeroi);

})

//Atualizar herói:
app.put('/herois/:index', (req, res) => {
    const { index } = req.params;
    var id = req.body.id;
    var liga = req.body.Liga;
    var heroi = req.body.Herói;
    var habilidade = req.body.Habilidade;
    var personalidade = req.body.Personalidade;
    var novoHeroi = cadastros.herois;
    var id = index;

    if (novoHeroi.indexOf(index)) {
        novoHeroi.splice((index - 1), 4, { "id: ": id, "Liga ": liga, "Heroi: ": heroi, "Habilidade: ": habilidade, "Personalidade": personalidade })
    }
    return res.json(novoHeroi);
})
//Deletar herói:
app.delete('/herois/:index', (req, res) => {
    const herois = cadastros.herois;
    const { index } = req.params;
    var id = index;

    if (herois.indexOf(index)) {
        herois.splice((index - 1), 4)
    }
    return res.json({ message: "Seu herói  foi deletado!!" });

})



app.listen(port, () => {
    console.log(`😀😀 Servidor iniciado...escutando na porta ${port}`)
})
