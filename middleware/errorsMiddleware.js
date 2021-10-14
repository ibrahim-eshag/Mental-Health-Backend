const NotFound = (req,res,next)=>{

    const error = new Error(`Not found: URL ${req.originalUrl}, please Make sure you visited a valid URL...`)
    res.status(404)
    next(error)
  }



const ErrorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500: res.statusCode
  res.status(statusCode)
  res.json({
    message:err.message,
    stack:process.env.NODE_ENV === "production"? null: err.stack
  })
  }

  export  {
      NotFound,ErrorHandler
  }
