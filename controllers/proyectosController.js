const Proyectos = require('../models/Proyectos');
const slug = require('slug');

exports.proyectosHome = async (req,res) => {
    const proyectos = await Proyectos.findAll();

    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
        
    });
}

exports.formularioProyecto = async(req,res) =>{
    const proyectos = await Proyectos.findAll();
    res.render('nuevoProyecto',{
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    })
}

exports.nuevoProyecto = async (req,res) => {
    const proyectos = await Proyectos.findAll();
    //enviar a consola lo que el usuario escriba
   // console.log(req.body);

   //validar que tengamos algo en el input
   const{ nombre } = req.body;
    //tambien se puede usar 
    //const nombre = req.body.nombre;
    let errores = [];

    if(!nombre) {
        errores.push({'texto' : 'agrega textosss ahre xd '})
    }

    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores,
            proyectos
        })
    } else{
    
        const proyecto = await Proyectos.create({nombre});
        res.redirect('/');
            
    }
}


exports.proyectoPorUrl = async(req,res) => {
    const proyectos = await Proyectos.findAll();
    const proyecto = await Proyectos.findOne({
        where:{
            url: req.params.url
        }
    });

    if(!proyecto) return next();
    
        //render a la vista

    res.render('tareas',{
        nombrePagina: 'Tareas del Proyecto',
        proyecto,
        proyectos
    })

}