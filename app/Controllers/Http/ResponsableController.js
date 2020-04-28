'use strict'

const Responsable = use('App/Models/Responsable')

class ResponsableController {
	async storeResponsable({request,response}){
		try{
			//recuperation des donnee inputs
			const valeurRecu = request.only(['pseudo','poste','email','password','faculte_id'])

		    const siResponsableExiste = await Responsable.findBy('email',valeurRecu.email)

		    if(siResponsableExiste) {
			 	return response
                .status(400)
                .send({ message: { error: 'Le Responsable existe déjà' } })
            }

            const responsableAjout = await Responsable.create(valeurRecu)
            return  response.jason(responsableAjout) 
        }
        catch(err){
			return response
			.send({err})
        }	
	}
}

module.exports = ResponsableController
