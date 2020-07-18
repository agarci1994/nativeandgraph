 const User = require("../models/user")
 const bcryptjs = require('bcryptjs')


 const resolvers = {
     Query: {

     },
     Mutation: {
         createUser: (_, {
             input
         }) => {
             const {
                 email,
                 password
             } = input
             const existUser = await User.findOne({
                 email
             })
             if (existUser) {
                 throw new Error("El usuario ya existe")
             }

             try {
                 const salt = await bcryptjs.getSalt(10)
                 input.password = await bcryptjs.hash(password, salt)
                 const newUser = new User(input)
                 newUser.save()

                 return 'usuario creado'
             } catch (error) {
                 console.log(error)
             }
         },

         authUser: async(_, {input}) => {
            const {email, password} = input
            const existUser = await User.findOne({
                 email
             })
             if (!existUser) {
                 throw new Error("El usuario no existe")
             }
            
            const passCheck = await bcryptjs.compare(password, existUser.password)
            if(!passCheck){
                throw new Error("pass incorrecto")
            }

            return "Has iniciado sesion"
         }
     }
 };

 module.exports = resolvers