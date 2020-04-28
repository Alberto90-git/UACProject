'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnneAcademiquesSchema extends Schema {
  up () {
    this.create('anne_academiques', (table) => {
      table.increments()
      table.date('anneDebut').notNullable()
      table.date('anneFin').notNullable()
      table.datetime('deleteAt')
      table.timestamps()
    })
  }

  down () {
    this.drop('anne_academiques')
  }
}

module.exports = AnneAcademiquesSchema
