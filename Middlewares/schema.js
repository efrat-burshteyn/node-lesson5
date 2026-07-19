export const schemas=(schema)=>{
    return (req,res,next)=>{
      const {error}=schema.validate(req.body,{abortEarly: false});
      if(error){
        const errorMessage=error.details.map(detail=>detail.message);
        const err =new Error(JSON.stringify(errorMessage));
        err.status=400;
        return next(err);
      }  
      next();
    };
};