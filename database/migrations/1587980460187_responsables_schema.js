'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResponsablesSchema extends Schema {
  up () {
    this.create('responsables', (table) => {
      table.increments()
      table.string('pseudo',25).notNullable().unique()
      table.string('poste', 30).notNullable()
      table.string('email', 200).notNullable().unique()
      table.string('password', 60).notNullable()
      table.datetime('deleteAt')

      table.integer('faculte_id').unsigned().references('id').inTable('facultes')
      table.timestamps()
    })
  }

  down () {
  	this.alter('responsables', (table) => {
  		table.dropForeign('codFacFil')
  	})

    this.drop('responsables')
  }
}

module.exports = ResponsablesSchema
