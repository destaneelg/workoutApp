const Workout = require("../models")

module.exports = function(app){ 

    app.post("/api/workouts",function (req,res){    
        let  newWorkout = new Workout(req.body)
        newWorkout.save()
        .then(data => res.json(data))
    });

    app.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
    });


    // app.post("",function (req,res){    
    //     Workout.create({})
    //     .then(data => res.json(data))
    //     .catch(err => { 
    //         res.json(err)
    //     })
    // });

    app.put("/:id",({body,params},res)=>{   
        Workout.findByIdAndUpdate(  
        params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}