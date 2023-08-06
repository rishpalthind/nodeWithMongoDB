async function validateCreate(req, res, next){

    const bodyReq = req.body;
    let valid = true;
    let message = '';
    if(!bodyReq.name){
        valid = false;
        message = 'Name field missing';
    }
    else if(!bodyReq.email){
        valid = false;
        message = 'Email field missing';
    }
    else if(!bodyReq.password){
        valid = false;
        message = 'Password field missing';
    }

    if(!valid){
        return res.status(400).json({
            message
        });
    }

    next();

}


async function validateUpdate(req, res, next){

    const bodyReq = req.body;
    if(!bodyReq.name && !bodyReq.email && !bodyReq.password){
        return res.status(400).json({
            message: 'None of the parameters (name, email, password) are sent in the body in correct form'
        });
    }

    next();

}


module.exports = {
    validateCreate,
    validateUpdate
}