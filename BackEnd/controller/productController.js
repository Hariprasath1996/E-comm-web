exports.getProducts=(req,res,next)=>{
res.json(
    {
        success:true,
        message:'get products working'
    }
)
}

exports.getSingleProduct=(req,res,next)=>{
    res.json(
        {
            success:true,
            message:'get singleProduct working'
        }
    )
    } 