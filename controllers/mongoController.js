
const userCollection = require('../models/User');

const mongoTest = async () => {

   try {

    const data = await userCollection.findByIdAndUpdate('638237914526867d62b9cc2a', { $unset : { isPaid : true } })
    
       console.log(data);
    
   } catch (error) {
        console.log(`${error.message}`.bgBlue.black);
   }
}

//Exports
module.exports = mongoTest;