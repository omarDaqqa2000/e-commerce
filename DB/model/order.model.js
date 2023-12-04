import mongoose ,{Schema,Types,model} from "mongoose";

const orderSchema = new Schema({

    userId:{
        type:Types.ObjectId,ref:'User',required:true,
    },
    products:[{
        productId:{type:Types.ObjectId,ref:'User',required:true},
        quantity:{type:Number,default:1,required:true},
        unitPrice:{type:Number,required:true},
        finalPrice:{type:Number,required:true}
    }],
    finalPrice:{
        type:Types.ObjectId,required:true,
    },
    address:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    couponName:{
        type:String,
        required:true,
    },
    paymentType:{
        type:String,
        default:'cash',
        enum:['cart','cash']
    },
    status:{
        type:String,
        default:'pending',
        enum:['pending','cancelled','confirmed','onWay','deliverd']
    },
    reasonReject:String,
    note:String,
    updatedBy:{type:Types.ObjectId,ref:'User',required:true},
},
{
    timestamps:true,
}
);

const orderModel =mongoose.models.Order || model('Order',orderSchema);

export default orderModel;
