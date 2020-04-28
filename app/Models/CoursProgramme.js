'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CoursProgramme extends Model {
	amphi() {
        return this.belongsTo('App/Models/Amphi');
    }

    filiere() {
        return this.belongsTo('App/Models/Filiere');
    }

    anne_academique() {
        return this.belongsTo('App/Models/AnneAcademique');
    }
}

module.exports = CoursProgramme
