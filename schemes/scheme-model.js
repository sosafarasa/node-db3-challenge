const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
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

function findSteps(id) {
    return db('schemes as s')
    .innerJoin('steps as st', 's.id', 'st.scheme_id')
    .select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions')
    .where({ scheme_id: id })
}

function add(scheme) {
    return db('schemes')
    .insert(scheme, 'id')
    .then(schemes => {
        const scheme_id = schemes[0];
        return scheme_id;
    })
}

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(changes)
    .then(updated => {
        if(updated) {
            return updated;
        }
    })
}

function remove(id) {
    return db('schemes')
    .where({ id })
    .delete()
    .then(scheme => {
        if(scheme) {
            return scheme;
        } else {
            return null;
        }
    })
}

