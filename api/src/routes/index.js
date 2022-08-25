const express = require('express')
const router = express.Router()
const itemsSchema = require('../models/items')



router.get('/', async (req,res)=>{
    let query = req.query.search?.toLowerCase()
    let aux = []
    if (query) {
        const search = await itemsSchema.find()
        search.map(el => {
            if (el.name.toLowerCase().includes(query)) {
                aux.push(el)
            }
        })
        res.json(aux)
    }else{
    const item = await itemsSchema.find()
    res.json(item)
    }
    
});

router.get('/:id', async (req, res) => {
    const itemid = await itemsSchema.findById(req.params.id)
    res.json(itemid)
})

module.exports = router;