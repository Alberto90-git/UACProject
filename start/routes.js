'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('admins/add', 'AdminController.storeAdmin') 

Route.post('facultes/add', 'FaculteController.storeFaculte') 
Route.post('amphis/add', 'AmphiController.storeAmphi')
Route.post('annees/add', 'AnneAcademiqueController.storeAnne')
Route.post('responsables/add', 'ResponsableController.storeResponsable')
Route.post('filieres/add', 'FiliereController.storeFiliere')

// pour mettre à jour
 Route.put('admin/update/:id', 'AdminController.updateAdmin')