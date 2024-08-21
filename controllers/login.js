const getlogin = (req, res) => {

    return res.render('login', { csrfToken: req.csrfToken() });

}

const postlogin = (req, res) => {

    if (req.body.mail === "admin@gmail.com" && req.body.password === "admin") {
       return res.redirect('/dashboard');
    } else {
        return res.redirect('/login');
    }

}

const logout = (req, res) => {
    return res.redirect('/login');
}

module.exports = {getlogin,postlogin,logout};