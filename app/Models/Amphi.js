'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Amphi extends Model {
	cours_programme() {
		return this.hasMany('App/Models/CoursProgramme')
	}

}

module.exports = Amphi
