'use strict'

const CoursProgramme = use('App/Models/CoursProgramme')

class CoursProgrammeController {
	async storeCours({request,response}){
		try{
			//Recuperation des valeurs
			const newCours = request.only(['nomMatiere','groupe','jourDebut',
				'jourFin','heureDebut','heureFin','dateValidateCours','cours_programmeFil_id',
				'cours_programmeAmphi_id','cours_programmeAnneeAca_id'])
			
		}
		
	}
}

module.exports = CoursProgrammeController
