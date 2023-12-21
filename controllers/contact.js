class ContactController {
    static getContact(req,res){
        res.render('contact',{
            title:'contact'
        });
    }
}

module.exports = ContactController;