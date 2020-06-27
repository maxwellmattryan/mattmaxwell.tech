const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const projectSchema = Schema({
    _id:            { type: Schema.Types.ObjectId                   },
    profiles:       [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
    uri:            { type: String, required: true, unique: true    },
    title:          { type: String, required: true                  },
    subtitle:       { type: String, required: true                  },
    preview:        { type: String, required: true                  },
    description:    { type: String, required: true                  },
    imageURL:       { type: String, required: true                  },
    externals:      [{ type: Object, required: true                 }],
    created:        { type: Date                                    },
    updated:        { type: Date, default: Date.now                 }
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;