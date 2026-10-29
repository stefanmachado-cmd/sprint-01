import express from 'express';
const app = express();


app.get("/", (req, res) => {
  res.send("Bem vindo à Central de Informações da Escola!");
});


const PORT = 3000;


app.get("/status", (req, res) => {
    res.json({ status: "online", sprint: 1 });
});

app.get("/escola", (req, res) => { 
    res.json({nome: 'independente', edereço: 'A Rua Belterra, 291, em Santo Amaro (São Paulo - SP)', tipoinstituicao: privado });
});


app.get("/cursos", (req, res) => {
    res.json([
        {id: 1, curso: "Desenvolvimeto de Sistemas"},
        {id: 2, curso: "Engenharia de Software"},
        {id: 3, curso: "Ciencias da computação"}
     ])});


     app.get("/professor", (req, res) => { 
    res.json
    ({nome: "dudu", disciplina: "Desenvlvimento de Sistemas"}),
    ({nome: "thiago", disciplina: "Engenharia de Software"}),
    ({nome: "felipe", disciplina: "Ciencias da Computação"});
});


 app.get("/ajuda", (req, res) => { 
    res.send("Rotas do sistemas: / (Página Inicial), /status (Status do sistemas), /escola (Informações da escola), /cursos (Lista de cursos), /professor (Lista de professores)")
});


app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`);
});
