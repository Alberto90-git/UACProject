'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AmphisSchema extends Schema {
  up () {
    this.create('amphis', (table) => {
      table.increments()
      table.string('nomAmphi',50).notNullable().unique()
      table.string('coordX',50).notNullable().unique()
      table.string('coordY',50).notNullable().unique()
      table.datetime('deleteAt')
      table.timestamps()
    })
  }

  down () {
    this.drop('amphis')
  }
}

module.exports = AmphisSchema
