require('dotenv').config()
const express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./src/routes/index')

const mercadoPago = require("./src/routes/MercadoPago.router")
const app = express()
const cors = require('cors')

//middleward
const corsOptions = {
    origin: '*', // Reemplaza esto con el dominio permitido
    methods: 'GET,PUT,POST,DELETE',
    credentials: true, // Permite el envío de cookies o credenciales
    optionsSuccessStatus: 204, // Configura el código de respuesta para las solicitudes OPTIONS
};

app.use(cors(corsOptions))
app.use(express.json())
app.use("/mercadoPago", mercadoPago)
// /

// Mercado Pago
// const mercadoPagoAPI = require('mercadoPago')


const { update } = require('./src/models/Catalog.model')


/*
mercadoPagoAPI.configure({
    access_token: "TEST-5023973216819179-112823-c54be5f8fe16ad4eb156cd47f716eabe-1570910658"
})*/



mongoose.connect(process.env.MONGO_URI)

app.use('/v1', routes)

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto ' + process.env.PORT);
})
