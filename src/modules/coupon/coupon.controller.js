import CouponModel from "../../../DB/model/coupon.model.js";

export const createCoupon = async (req,res)=>{
   
    const {name} = req.body;
    

    if(await CouponModel.findOne({name})){
        return res.status(409).json({message:"coupon name already exists"});
    }
    const coupon = await CouponModel.create(req.body);
    return res.status(201).json({message:"coupon created success",coupon})
    
}

export const getCoupones = async (req,res)=>{

    const coupons = await CouponModel.find({isDeleted:false});
    return res.status(200).json({message:"success",coupons});
};

export const updateCoupon = async (req,res)=>{
    const coupon = await CouponModel.findById(req.params.id);

    if(!coupon){
        return res.status(404).json({message:"coupon not found"});
    }

    if(req.body.name){
        if(await CouponModel.findOne({name:req.body.name}).select('name')){
            return res.status(409).json({message:`coupon ${req.body.name} already exists`})
        }
        coupon.name = req.body.name;   
    }


    if(req.body.amount){
        coupon.amount = req.body.amount;
   }

   await coupon.save();

   return res.status(200).json({message:"success",coupon});


}

export const softDelete = async (req,res)=>{
    const {id} = req.params;

    const coupon = await CouponModel.findOneAndUpdate({_id:id,isDeleted:false},
        {isDeleted:true},
        {new:true}
        );

        if(!coupon){
            return res.status(400).json({message:"can't delete this coupon"});
        }

        return res.status(200).json({message:"success"});
}

export const hardDelete = async (req,res)=>{
    
        const {id} = req.params;

    const coupon = await CouponModel.findOneAndDelete({_id:id,isDeleted:true});

    if(!coupon){
        return res.status(400).json({message:"can't delete this coupon"});
    }

    return res.status(200).json({message:"success"});
     

}

export const restore = async (req,res)=>{
    const {id} = req.params;

    const coupon = await CouponModel.findOneAndUpdate({_id:id,isDeleted:true},
        {isDeleted:false},
        {new:true}
        );

        if(!coupon){
            return res.status(400).json({message:"can't restore this coupon"});
        }

        return res.status(200).json({message:"success"});
}