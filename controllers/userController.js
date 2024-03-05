// const Items = require('../models/items')

// const getMarketItems = async (req, res) => {
//     try {
//         const items = await Items.find({})
//             res.render('market.ejs', {items})
//         } catch (error) {
//             console.log('test', error)
//         }
// }

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

module.exports = {
    // getMarketItems,
    getHomePage,
    getAccountPage
}

// router.get('/market', async (req, res) => {
//     try {
//         const items = await Items.find({})
//         res.render('market.ejs', {items})
//     } catch (error) {
//         console.log('test', error)
//     }
// })

// router.get('/home', async (req, res) => {
//     try {
//         res.render('index.ejs')
//     } catch (error) {
//         console.log('error')
//     }
// })

// router.get('/account', async (req, res) => {
//     try {
//         res.render('account.ejs')
//     } catch (err) {
//         console.log('error')
//     }
// }) 


// module.exports = router