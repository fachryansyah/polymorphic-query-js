exports.morphTo = (table, id, types) => {
    let type = types.replace(/s$/g, "")
    return `SELECT * FROM ${table} JOIN ${types} ON ${types}.${type}able_id = ${table}.id WHERE ${type}able_type = '${table}' AND ${table}.id = '${id}'`
}

exports.morphedByOne = (tables, id, type) => {
    let table = tables.replace(/s$/g, "")
    return `SELECT * FROM ${type} JOIN ${tables} ON ${type}.id = ${tables}.${table}able_id WHERE ${tables}.id = ${id}`
}