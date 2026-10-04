export const login=(req,res)=>{
    const {email,password}=req.body;
    if(email==="hero@gmail.com" && password==="12345"){
        return res.json({
            success:true,
            message:"connected successfully"
        })
      
    }
    return res.status(401).json({
            success:false,
            message:"somthing is wrong"
        })
 }
 