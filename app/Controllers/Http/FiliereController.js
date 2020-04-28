'use strict'

const Filiere = use('App/Models/Filiere')

class FiliereController {
	async storeFiliere({request,response}){

		try{

			// recuperation des valeurs
			const dataRecu = request.only(['codeFiliere','nomFiliere','niveauAnne','groupe',
			'lettreDebut','lettreFin','filiere_id'])
			//console.log("fghdsghdfsghdfg",dataRecu)
		      //to verify if this value is in database
		     const siFiliereExist = await Filiere.findBy('codeFiliere',dataRecu.codeFiliere)
		     //console.log("filier deja creer",siFiliereExist)
		    if(siFiliereExist) {
		     	return response
                .status(400)
                .send({ message: { error: 'La Filière existe déjà' } })
            }
            const filiereAjoute = await Filiere.create(dataRecu)
            return filiereAjoute
		}
		catch(err){
			return response
			.send({err})
		}
	}
}

module.exports = FiliereController
