'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttribuersSchema extends Schema {
  up () {
    this.create('attribuers', (table) => {
      table.increments()
      table.integer('attribuer1_id').unsigned().references('id').inTable('amphis')
      table.integer('attribuer2_id').unsigned().references('id').inTable('facultes')
      table.datetime('deleteAt')

      table.timestamps()
    })
  }

  down () {
  	 this.alter('attribuers', (table) => {
  	 	table.dropForeign('attribuer1_id')
  	 	table.dropForeign('attribuer2_id')
     })

    this.drop('attribuers')
  }
}

module.exports = AttribuersSchema
