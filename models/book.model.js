import  {model,Schema} from "mongoose";
const bookSchema=new Schema({
        name:{
            type: String,
            required: true,
            minlengh: 2,
            maxlengh: 20,
            unique : true
        },
        price: Number,
        categories:{
            type: [String],
            required: true,
            enum:["English","Math","Children","History"]
        },
        detailsAuthor:{
            name:String,
            phone: String,
            email: String
      }    
});
export const Book=model("Book",bookSchema);