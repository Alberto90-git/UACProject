'use strict'

const Amphi = use('App/Models/Amphi')

class AmphiController {
	async storeAmphi({request,response}){
		try{
			function capitalize(string){
               return string.charAt(0).toUpperCase() + string.slice(1)
            }
			// les inputs recu du users
			const nouvelAmphi = request.only([('nomAmphi'),'coordX','coordY'])

			//const amphiMajuscul = nouvelAmphi.nomAmphi.toUpperCase() // convertion du nom

			const siAmphiExiste = await Amphi.findBy('nomAmphi',nouvelAmphi.nomAmphi)

			if (siAmphiExiste) {
			 	return response
                .status(400)
                .send({ message: { error: 'Cet Amphi est déjà crée' } })
            }

            const amphiAjout = await Amphi.create(nouvelAmphi)
            return amphiAjout
		}
		catch(err){
			return response
			.send({err})
		}
	}
}

module.exports = AmphiController
