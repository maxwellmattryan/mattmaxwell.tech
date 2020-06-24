const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const passport = require('passport');
require('../config/passport')(passport);

const Profile = require('../models/profile');
const Project = require('../models/project');

router.put('/:uri', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const projectData = {
        _id: req.body._id || new mongoose.Types.ObjectId(),
        profiles: req.body.profiles,
        uri: req.body.uri,
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        imageURL: req.body.imageURL,
        externals: req.body.externals,
        updated: Date.now()
    };

    Profile.updateMany({}, {$pull: {projects: projectData._id}}, (err, result) => {
        if(err) throw err;
    });
    Profile.updateMany({_id: {$in: projectData.profiles}}, {$push: {projects: projectData._id}}, (err, result) => {
        if(err) throw err;
    });
    
    Project.updateOne({_id: projectData._id}, projectData, (err, result) => {
        if(err) throw err;

        if(result.n === 0) {
            const newProject = new Project({
                ...projectData,
                created: Date.now()
            });

            newProject.save((err, project) => {
                if(err) {
                    res.status(400).json({
                        success: false,
                        msg: 'This project already exists.'
                    });
                } else {
                    res.status(201).json({
                        success: true,
                        msg: 'Successfully created new project!'
                    });
                }
            });
        } else if(result.nModified === 0){
            res.sendStatus(304);
        } else {
            res.status(200).json({
                success: false,
                msg: 'Successfully updated project!'
            });
        }
    });
});

router.delete('/:uri', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Project.findOneAndDelete({ uri: req.params.uri }, (err, project) => {
        if(err) {
            res.sendStatus(400);
        } else {
            Profile.updateMany({}, {$pull: {projects: project._id}}, (err, result) => {
                if(err) throw err;

                else {
                    res.sendStatus(204);
                }
            });
        }
    });
});

module.exports = router;