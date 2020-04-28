'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Filiere extends Model {
	faculte() {
        return this.belongsTo('App/Models/Faculte');
    }

    cours_programme() {
		return this.hasMany('App/Models/CoursProgramme')
	}
}

module.exports = Filiere
