const motosCtrl = {};

const Moto = require('../models/Moto');



motosCtrl.renderMotosForm = (req, res, next) => {
   res.render('motos/new-motos')
}

motosCtrl.createNewMoto = async (req, res) => {
   const {title, status= false} = req.body;
   const newMoto = new Moto({title, status});
   newMoto.user_moto = '';
   await newMoto.save();
   req.flash('success_msg', 'Moto added Successfully');
   res.redirect('/motos');
}

motosCtrl.renderMotos = async (req, res, next) => {

   
   const myUser = req.user.id;

   const motos = await Moto.find({user_moto: ""}).lean();
   const allmotos = await Moto.find({user_moto: myUser}).lean();

   res.render('motos/all-motos', { motos, allmotos });
}



 //Rent moto
motosCtrl.rentMoto = async (req, res, next) => {
   const {status=true, user_moto=req.user.id} = req.body;
   //console.log(req.user.id)

   await Moto.findByIdAndUpdate(req.params.id, {status, user_moto});

   req.flash('success_msg', 'Moto has been rented Successfully');
   res.redirect('/motos');
}

//return
motosCtrl.returnMoto = async (req, res, next) => {
   const {status=false, user_moto=''} = req.body;

   await Moto.findByIdAndUpdate(req.params.id, {status, user_moto});
 
   req.flash('success_msg', 'Moto has been return Successfully');
   res.redirect('/motos');
}

module.exports = motosCtrl;