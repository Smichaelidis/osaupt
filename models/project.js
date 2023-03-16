import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    author_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    picture: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

export default mongoose.models.Project || mongoose.model('Project', projectSchema)