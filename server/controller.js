module.exports =  {

    postContactForm: (req, res) => {
        var params = [
            req.body.firstname,
            req.body.lastname,
            req.body.email,
            req.body.phone,
            req.body.comment
        ]
        console.log(params)

        req.app.get('db').postContact(params).then((response) => {
            res.send('posted')
        })
    }

}