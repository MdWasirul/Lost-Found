import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true
        },
        description:
        {
            type: String,
            required: true
        },
        category:
        {
            type: String,
            required: true // e.g., Electronics, Pets
        },
        type:
        {
            type: String,
            enum: ['lost', 'found'],
            required: true
        },
        location:
        {
            type: String,
            required: true
        },
        date:
        {
            type: Date,
            default: Date.now
        },
        image:
        {
            type: String // URL of the image
        }, 
        contactEmail:
        {
            type: String,
            required: true
        },
        isResolved:
        {
            type: Boolean,
            default: false
        } // Set to true when item is returned
    }, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);
export default Item;