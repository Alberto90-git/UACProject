'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Faculte extends Model {
	responsable () {
		return this.hasMany('App/Models/Responsable')
	}
}

module.exports = Faculte
