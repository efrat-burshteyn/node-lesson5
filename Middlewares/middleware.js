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
   const errStatus=500 ;
   const resError={
    error:{
        message: err.message,
        type: 'server error',
        ...(process.env.NODE_ENV==='development' ?{stack: err.stack}:{})
    }
   };
   res.status(errStatus).json(resError);
};
