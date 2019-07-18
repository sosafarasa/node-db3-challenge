const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,

}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({id})
    .first()
    .then(scheme => {
        if(scheme){
            return scheme;
        } else {
            return null;
        }
    })
}

// needs debugging

function findSteps(id) {
    return db('scheme as s')
    .innerJoin('steps as st', 's.id', 'st.scheme_id')
    .select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions')
    .where({ scheme_id: id });
}

