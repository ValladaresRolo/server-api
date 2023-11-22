const Catalog = require('../models/Catalog.model')

const createCatalog = async (req, res) => {
    try {

        const catalog = new Catalog(req.body)
        const resp = await catalog.save()
        return res.json({
            message: 'Producto fue creado satisfactoriamente',
            detail: resp
        })

    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}


const getCatalog = async (req, res) => {
    try {
        // populate , llena todo con la datos de mongo de ese documento
        const resp = await Catalog.find().populate('category')
        return res.json({
            message: "Products",
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}
const updateCatalog = async (req, res) => {
    try {
        const newData = req.body
        const resp = await Catalog.findByIdAndUpdate(
            newData.catalogId,
            { $set: newData },
            { new: true }
        )
        return res.json({
            message: 'Product was updated successfully',
            detail: resp
        })

    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const deleteCatalog = async (req, res) => {
    try {
        const resp = await Catalog.findByIdAndDelete(req.body.catalogId)

        return res.json({
            message: 'Prduct was deleted successfully',
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}


module.exports = {
    createCatalog,
    getCatalog,
    updateCatalog,
    deleteCatalog
}