//Para abrir o terminal é Ctrl J

//mudar diretório, trocar para esse arquivo (Change Direction) 
//cd src ou ../

//Para limpar no terminal é ctrl L
//Para cancelar Ctrl C no terminal 41 14

//npm (Node Packege Manege)

//npm init -y (package.json)
//npm install express (package-lock.json)
//npm install nodemon 
//npm install hbs (template ending) == handlebars [variáveis html]

//npm start (devido a mudança em package.json) == iniciar server

//Importar dependencias 
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//inicia o express
const server = express()

server
.use(express.urlencoded({extended: true}))
.use(express.static('public'))

//configurar template ending
//__dirname == local onde você se encontra
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//Criar rota para o servidor 
.get('/', pages.index)
.get('/orfanato', pages.orfanato)
.get('/orphanages', pages.orphanages)
.get('/create-orphanages', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor 
server.listen(5600)
