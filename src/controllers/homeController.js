import db from "../models/index";

let getHomePage = async (req, res) => {
    try {
        console.log("ok");
        return res.render('homepage.ejs', {
            data: "day la data"
        });
    } catch (error) {
        console.log(error);
    }
};

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
};

module.exports = {
    getHomePage, getAboutPage
}