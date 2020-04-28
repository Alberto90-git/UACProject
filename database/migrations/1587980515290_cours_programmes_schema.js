'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoursProgrammesSchema extends Schema {
  up () {
    this.create('cours_programmes', (table) => {
      table.increments()
      table.string('nomMatiere', 15).notNullable()
      table.string('groupe',2).notNullable()
      table.date('jourDebut').notNullable()
      table.date('jourFin').notNullable()
      table.time('heureDebut', { precision: 6 }).notNullable()
      table.time('heureFin', { precision: 6 }).notNullable()
      table.date('dateValidateCours').notNullable()
      table.datetime('deleteAt')

      table.integer('cours_programmeFil_id').unsigned().references('id').inTable('filieres')
      table.integer('cours_programmeAmphi_id').unsigned().references('id').inTable('amphis')
      table.integer('cours_programmeAnneeAca_id').unsigned().references('id').inTable('anne_academiques')
      table.timestamps()
    })
  }

  down () {
  	 this.alter('cours_programmes', (table) => {
  	 	table.dropForeign('cours_programme1_id')
        table.dropForeign('cours_programme2_id')
        table.dropForeign('cours_programme3_id')
     })

    this.drop('cours_programmes')
  }
}

module.exports = CoursProgrammesSchema
