import  {model,Schema} from "mongoose";
const bookSchema=new Schema({
        name:String,
        price: Number,
        categories: [String],
        detailsAuthor:{
            name:String,
            phone: String,
            email: String
      }    
});
export const Book=model("Book",bookSchema);