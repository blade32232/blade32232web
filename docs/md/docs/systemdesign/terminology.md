<!-- <style>
abbr{
    border: none;
    text-decoration: none;
    color: lightblue;
}
</style> -->

# Terminology
<hr>
An alphabetical list of the terms used throughout this document

## Control Stimulus
A <abbr title='stim'>stimulus</abbr> used to establish a baseline which can then be used to justify the inclusion or exclusion of an animal from the data set.

## Closed Loop
Used to describe a system that allows for its current output to inform future input in a continued cycle.

## DeepLabCut (DLC)
[DeepLabCut](http://www.mackenziemathislab.org/deeplabcut) - An open source software tool that utilises markerless pose estimation powered by machine learning. Using this software we train a model that can be used by DeepLabCut-Live to track several points on the tethered animal’s body in real-time.

## DeepLabCut-Live (DLC-Live)
[DeepLabCut-Live](http://www.mackenziemathislab.org/deeplabcut) - An open source software tool that uses a model trained by DeepLabCut to perform markerless pose estimation in real-time (frame by frame) on a pre-recorded or live video stream.

## Default Stimulus
The stimulus shown to the tethered animal which plays before the first sequence is started and in between sequences in order to keep the tethered animal interested (keep it flying).</div>

## Interpolation
A scriptable object which can be set to manipulate an OOI or setting across a series of trials. E.g. across all 6 trials make an object start 2m further away each trial.

## Intervention
A scriptable object which can be set to move, rotate, scale, hide or show an Object of Interest based on the proximity of the tethered animal’s avatar to an OOI, or after a duration of time has passed.

## Object of Interest (OOI)
An object which acts as an independent variable due to the experimenter’s ability to alter various settings such as its position and behaviour. There can be none or many Objects of Interest within one trial and these objects will usually take the form of a plant, tree, prey, or predator familiar to the tethered animal.

## Post Stimulus
A stimulus shown to the tethered animal after a trial, the stimulus can be set to show a blank screen set to 1 colour, the contents of a single scene, or show a scene that is rotating at a rate specified by the user.

## Pre Stimulus
A stimulus shown to the tethered animal after a trial, the stimulus can be set to show a blank screen set to 1 colour, the contents of a single scene, or show a scene that is rotating at a rate specified by the user.

## Scriptable Object
A specific type of script (code) that is used to configure settings and store data in the Unity Editor, These scripts can then be accessed at runtime if required when the Tethered Flight Arena is active.

## Sequence
A scriptable object which stores the settings for one sequence, e.g List of trials, Interpolations and the default stimulus.

## Tethered Animal’s Avatar (Player Avatar)
The virtual character which is used to represent the tethered animal within the virtual world. This avatar contains three virtual cameras which are used to display the virtual world from the avatar’s perspective onto the 3 screens surrounding the tethered animal.

## Tethered Flight Arena (TFA) 
The software described by this design document, built within the Unity Game Engine.

## Trial
A scriptable object used to store the specific settings for one trial, e.g Scene, duration, start position, intervention, duration, completion condition, pre and post stimulus etc. 

## Unity Game Engine (Unity)
A commonly used game development software which allows users to create virtual environments and manipulate them with scripts written in the C# programming language.

## Wing Beat Amplitude Difference (WBAD)
The angle of the left wing’s amplitude minus the angle of the right wing’s amplitude, this provides the direction or heading of the tethered animal as it travels through the scene.

> :ToCPrevNext