module.exports = {
   index(req, res){
      const rommId = req.params.room;
      const questionId = req.params.question;
      const action = req.params.action;
      const password = req.body.password;

      console.log(`room = ${rommId}`)

   }
}