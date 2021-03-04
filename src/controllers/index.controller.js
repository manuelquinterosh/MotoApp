
const indexCtrl = {};

indexCtrl.renderIndex = (req, res, next) => {
    res.render('index')
}

indexCtrl.renderAbout = (req, res, next) => {
    res.render('about')
};

module.exports = indexCtrl;