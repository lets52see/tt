const axios = require('axios');//allow us to make req
const PORT = process.env.PORT 


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    url1 = 'http://localhost:'+ String(PORT) + '/api/users'
    // axios.get('http://localhost:10000/api/users')
    axios.get(url1)
        .then(function(response){
            //console.log(response.data) //response has data property
            res.render('index', { users : response.data });// View/index.ejs can access users var
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    // axios.get('http://localhost:10000/api/users', { params : { id : req.query.id }})
    url2 = 'http://localhost:'+ String(PORT) + '/api/users'
    axios.get(url2, { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}