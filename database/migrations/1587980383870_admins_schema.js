'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminsSchema extends Schema {
  up () {
    this.create('admins', (table) => {
      table.increments()
      table.string('pseudo', 25).notNullable().unique()
      table.string('email', 200).notNullable().unique()
      table.string('password', 60).notNullable()
      table.datetime('deleteAt')
      table.timestamps()
    })
  }

  down () {
    this.drop('admins')
  }
}

module.exports = AdminsSchema
