class IndexController {
    static getIndex(req,res){
        res.render('index',{
            title:'index'
        });
    }
}

module.exports = IndexController;