'use strict'

const Faculte = use('App/Models/Faculte')

class FaculteController {
	async storeFaculte({request,response}){
		try{
			// take data from input and test them

			let newData = request.only(['nomFaculte']).nomFaculte;
			//console.log("voici le nom",newData)

			newData = newData.toUpperCase();
			//console.log("voici le nom",newData)
			const siFaculteExiste = await Faculte.findBy('nomFaculte', newData)

			 if (siFaculteExiste) {
			 	return response
                .status(400)
                .send({ message: { error: 'Cette Faculté est déjà crée' } })
            }
            const faculteAjoute = await Faculte.create({nomFaculte: newData});
            // pour verifier en console
            //console.log("ce qui est cree",faculteAjoute.$attributes)
            return faculteAjoute
		}
		catch(err){
			return response
			.send({err})
		}
	}
}

module.exports = FaculteController
