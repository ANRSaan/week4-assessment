let users = require('./db.json')
let userID = 0

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will step on the soil of many countries!", "You shall come across a bathroom the moment you need one!", "A million dollars is gonna fall right from the frickin' sky, I swear!", "Right now, someone nice is thinking something nice about you, and that's just swell!", "You deserve everything coming to you!"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getProfile: (req, res) => {
        const { emotion, firstName, lastName, userName} = req.body
        userID++

        let newUser = {
            
            id: userID,
            userName,
            firstName,
            lastName,
            emotion
        }

        /* Add in if statement to check for existing user.  If it doesn't 
        exist, execute following code.  If not, send a 400 error saying the 
        user already exists and don't push or return the data. */
        // console.log(newUser.userName)
        for (i = 0; i < users.length; i++){
            if (users[i].userName === newUser.userName){
                res.status(400).send()
                return
            }
        }
        users.push(newUser)
        res.status(200).send(newUser)
    },

    changeEmotion: (req, res) => {
        
    }

}