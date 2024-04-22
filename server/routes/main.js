const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');

router.get('/', (req, res) => {
    // Sample data to pass to the EJS template
    const data = {
        title: 'ECHOPRIX',
    };

    // Render the 'index.ejs' template with the provided data
    res.render('accueil', data);
});

router.get('/publications', async (req, res) =>{

    try {
        const data = await Post.find();
        res.render('publications', {data});
    } catch (error) {
        console.log(error);
    }

})

router.get('/compte', (req, res) =>{
    res.render('compte');
})

router.get('/recherche', (req, res) =>{
    res.render('recherche');
})

function insertUserData (){
    User.insertMany([
        {
            firstName: "Belhaddad",
            lastName: "Ilyes",
            email: "ilyBel@echoprix.com",
            password: "Yelta"

        }
    ])
}

function insertPostData (){
    Post.insertMany([
        {
            title: "Chaine de Taha",
            description: "Jai trouver une chaine dans une classe qui forme des professeurs",
            adresse: "Rue BdeB",
            price: 100000000000000,
            image: "images/LOGO.png",
            vues: 0
        }
    ])
}

// insertUserData();
insertPostData();

module.exports = router;