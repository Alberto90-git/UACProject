'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AnneAcademique extends Model {
	cours_programme() {
		return this.hasMany('App/Models/Responsable')
	}
}

module.exports = AnneAcademique
