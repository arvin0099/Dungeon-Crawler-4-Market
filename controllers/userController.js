const getHomePage = async (req, res) => {
    try {
        res.render('index.ejs')
    } catch (error) {
        console.log('test', error)
    }
}

const getAccountPage = async (req, res) => {
    try {
        res.render('account.ejs')
    } catch (error) {
        console.log('test', error)
    }
}

const deletePage = async (req, res) => {
    try {
        res.render('deleteacc.ejs')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getHomePage,
    getAccountPage,
    deletePage
}

