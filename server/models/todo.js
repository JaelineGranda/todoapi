import mongoose from 'mongoose';

// creates new mongoose schema with properties for todo items
const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        lastModifiedDate: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
);

TodoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// converts schema to JSON
TodoSchema.set('toJSON', { virtuals: true});

const model = mongoose.model('Todo', TodoSchema);
export default model;