'use strict'

const Admin = use('App/Models/Admin')
const Hash = use('Hash')

class AdminController {
	// fonction to save data
	async storeAdmin({request,response}){
		try{

			var dataToSend = request.only((['pseudo','email','password']))
			
			 const userExists = await Admin.findBy('email', dataToSend.email)
			 console.log("userExists",userExists)

			 if (userExists) {
			 	return response
                .status(400)
                .send({ message: { error: 'Cet administrateur existe déjà' } })
            }
             // if admin doesn't exist, proceeds with saving him in DB
             const adminAjoute = await Admin.create(dataToSend)
             //console.log("azerty",userCreate)
             //return response.send({userCreate: 'userCreate.$originalAttributes'});
             return response.json(adminAjoute)
		} 
		catch (err) {
			console.log(err)
			return response
            .send(err)
        }
	}

	//fonction for updating
	async updateAdmin({request,response,params, auth}){
		try{
			const id = params.id
			let UpdateData = request.only(['oldPassword','newPassword'])
			//verify if the user is in database
			let admin = await Admin.find(id)

        	let isSame = await Hash.verify(UpdateData.oldPassword, admin.password)

        	if (isSame) {
        		await Admin.query().update({"password":UpdateData.newPassword}).where("id",id)
            	return response.json("ok")
        	}
        	else 
        		return response.status(422).json({"code_error":"not_match","message":
        			"les mots de passes ne correspondent pas"})
		
		}
		catch(e){

			console.log(e)
		}
	}

}

module.exports = AdminController
