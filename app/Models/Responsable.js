'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const Hash = use('Hash')

class Responsable extends Model {
	static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (responsableInstance) => {
      if (responsableInstance.dirty.password) {
        responsableInstance.password = await Hash.make(responsableInstance.password)
      }
    })
  }

	faculte() {
        return this.belongsTo('App/Models/Faculte');
    }
}

module.exports = Responsable
