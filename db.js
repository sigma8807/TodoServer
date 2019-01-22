var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Todo = new Schema({
    id    : Date,
    value    : String,
    done : Boolean
});
 
mongoose.model( 'Todo', Todo );
mongoose.connect( 'mongodb://localhost/27017/data' );