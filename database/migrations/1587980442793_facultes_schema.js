'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacultesSchema extends Schema {
  up () {
    this.create('facultes', (table) => {
      table.increments()
      table.string('nomFaculte',25).notNullable().unique()
      table.datetime('deleteAt')
      table.timestamps()
    })
  }

  down () {
    this.drop('facultes')
  }
}

module.exports = FacultesSchema
