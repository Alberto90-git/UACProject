'use strict'

const AnneAcademique = use('App/Models/AnneAcademique')

class AnneAcademiqueController {
	async storeAnne({request,response}){
		try{
			//input values
			const nouvelleAnne = request.only(['anneDebut','anneFin'])

			const anne1 = parseInt(nouvelleAnne.anneDebut)
			const anne2 = parseInt(nouvelleAnne.anneFin)
			// recuperation de la date du systeme
			let date = new Date();
			const anneReferenceur = date.getFullYear()

			//const ExistsAnnee1 = await AnneAcademique.findBy('anneDebut', nouvelleAnne.anneDebut)

			if(anne1 !== anneReferenceur || anne2 !== anneReferenceur + 1){
				return response
                .status(400)
                .send({ message: { error: 'Veuillez bien entrer l\'année !' } })
			}
			const amphiAjout = await Amphi.create(nouvelleAnne)

            return amphiAjout
		}
		catch (err) {
			return response
            .send(err)
        }
	}
}

module.exports = AnneAcademiqueController
