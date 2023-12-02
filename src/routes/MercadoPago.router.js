const { Router } = require("express")
const mercadopago = require("mercadopago")
const dotenv = require("dotenv")
dotenv.config()

MercadoPago = Router()

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN || "",

})


MercadoPago.post("/", async (req, res) => {

    const product = req.body

    try {

        const preference = {
            items: [
                {
                    title: product.model,
                    brand: product.brand,
                    unit_price: product.price,
                    currency_id: "CLP",
                    quantity: 1,
                    sku: product.sku

                },
            ],

            back_urls: {
                success: "https://valladaresrolo.github.io/catalogFront/",
                failure: "https://valladaresrolo.github.io/catalogFront/",


            },
            auto_return: "approved"
        }


        // aca creo un array con los productos que voy a pagar
        /*
            const arrayProduct = req.body
        
            const NuevoArray = arrayProduct.map(e => {
                return {
                    title: e.model,
                    brand: e.brand,
                    unit_price: e.price,
                    currency_id: "CLP",
                    quantity: e.quantity,
                    sku: e.sku,
                    description: e.description
                }
            })
        
            try {
                const preference = {
                    items: NuevoArray,        
        
                    back_urls: {
                        success: "http://localhost:3000/v1/success",
                        failure: "http://localhost:3000/v1/failure",
                    },
                    auto_return: "approved",
                };*/








        const preferenceResponse = await mercadopago.preferences.create(preference);
        console.log(preferenceResponse);
        res.status(200).json(preferenceResponse.response.init_point)
    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }
})



module.exports = MercadoPago