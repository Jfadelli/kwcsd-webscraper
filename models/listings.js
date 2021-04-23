const db = require('../dbconfig')


function findAll() {
    return db('listings')
}

async function addListing(payload) {
    const [id] = await db('listings').insert(payload)
    return id

}

function findBy(param) {
    return db('listings').where({ param }).select('id', 'address', 'price', 'link')
}

async function delListing(payload) {
    const [id] = await db('listings').delete(payload)
    return (id)

}

module.exports = {
    delListing,
    addListing,
    findAll,
    findBy
}