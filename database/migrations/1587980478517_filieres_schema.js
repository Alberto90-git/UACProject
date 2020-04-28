'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilieresSchema extends Schema {
  up () {
    this.create('filieres', (table) => {
      table.increments()
      table.string('codeFiliere',15).notNullable().unique()
      table.string('nomFiliere', 50).notNullable().unique()
      table.string('niveauAnne', 15).notNullable()
      table.string('groupe',2).notNullable()
      table.string('lettreDebut', 1).notNullable()
      table.string('lettreFin', 1).notNullable()
      table.datetime('deleteAt')

      table.integer('filiere_id').unsigned().references('id').inTable('facultes')
      table.timestamps()
    })
  }

  down () {
  	this.alter('filieres', (table) => {
  		table.dropForeign('filiere_id')
  	})

    this.drop('filieres')
  }
}

module.exports = FilieresSchema
