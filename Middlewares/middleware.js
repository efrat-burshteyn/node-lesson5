export const reqCurrentDate=(req,res,next)=>{
    req.currentDate= new Date().toLocaleString();
     next();
};
export const printReqCurrentDate=(req,res,next)=>{
    if(req.method==='GET'){
        console.log(req.currentDate);
    }
    next();
};
export const error=(err,req,res,next)=>{
   const errStatus=err.status||500;
   const Messange=errStatus===400? JSON.parse(err.message):err.message;
   const resError={
    error:{
        message: Messange,
        type: errStatus===400? 'validation error': 'server error',
        ...(process.env.NODE_ENV==='development' ?{stack: err.stack}:{})
    }
   };
   res.status(errStatus).json(resError);
};
export const errorNotFound=(req,res,next)=>{
    const error=new Error('Route not found');
    error.status=404;
    next(error);
};
