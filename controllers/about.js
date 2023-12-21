
class AboutController {
    static getAbout(req,res){
        res.render('about',{
            title:'about'
        });
    }
}

module.exports = AboutController;