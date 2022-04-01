<style>
img[src*="#centered"] {
    margin:auto;
    display:block;
 }
 img[src*="#invertedcenter"] {
    margin:auto;
    display:block;
    background: white;
    width: 55%;
    height: auto;
 }
 img[src*="#small"] {
    width: 250px;
    height: auto;
 }
 div.centertext{
    text-align:center;
 }
 abbr{
    border: none;
    text-decoration: none;
    color: lightblue;
}
h1{
   text-align:center;
}
 div
 {
   text-align: justify;
   text-justify: inter-word;
 }
</style>

# Terminology
<hr>

An alphabetical list of the terms used throughout this document

## CAVE project
Named after Plato’s allegory of the cave it is a project built into the Unity editor which allows for a tethered animal to navigate through a virtual environment in real time, saving the results to CSV files for later analysis.

## Control Stimulus
A stimulus used to establish a baseline which can then be used to justify the inclusion or exclusion of an animal from the data set.

## Closed Loop
Used to describe a system that allows for its current output to inform future input in a continued cycle.

## DeepLabCut (DLC)
An open source software tool that utilises markerless pose estimation powered by machine learning. Using this software we train a model that can be used by DeepLabCut-Live to track several points on the tethered animal’s body in real-time.

## DeepLabCut-Live (DLC-Live)
An open source software tool that uses a model trained by DeepLabCut to perform markerless pose estimation in real-time (frame by frame) on a pre-recorded or live video stream.

## Default Stimulus
The stimulus which plays before the first sequence is started and in between sequences in order to keep the tethered animal interested (keep it flying).

## Interpolation
A scriptable object which can be set to manipulate an OOI or setting across a series of trials. E.g. across all 6 trials make an object start 2m further away each trial.

## Intervention
A scriptable object which can be set to move, rotate, scale, hide or show an Object of Interest based on the proximity of the tethered animal’s avatar to an OOI, or after a duration of time has passed.

## Object of Interest (OOI)
An object which acts as an independent variable due to the experimenter’s ability to alter various settings such as its position and behaviour. There can be none or many Objects of Interest within one trial and these objects will usually take the form of a plant, tree, prey, or predator familiar to the tethered animal.

## Post Stimulus
A stimulus shown to the tethered animal after a trial. The stimulus can be configured to display a blank canvas set to one colour, the contents of a single scene, or a scene that is rotating at a velocity specified by the user.

## Pre-stimulus
A stimulus shown to the tethered animal before a trial. The stimulus can be configured to display a blank canvas set to one colour, the contents of a single scene, or a scene that is rotating at a velocity specified by the user.

## Scriptable Object
A specific type of script (code) that is used to configure settings and store data in the Unity Editor, These scripts can then be accessed at runtime if required when the CAVE software is active.

## Sequence
A scriptable object which stores the settings for one sequence, e.g. a List of trials, Interpolations and the default stimulus.

## Tethered Animal’s Avatar (Player Avatar)
The virtual character which is used to represent the tethered animal within the virtual environment. This avatar contains three virtual cameras which are used to display the virtual environment from the avatar’s perspective onto the 3 screens surrounding the tethered animal.

## Tethered Flight Arena (TFA) 
The physical setup and accompanying software (DLC, Unity, CAVE) used to present an interactable virtual environment to a tethered animal.

## Trial
A scriptable object used to store the specific settings for one trial, e.g. scene, duration, start position, intervention, duration, completion condition, pre- and post-stimulus etc. 

## Virtual Environment (Scene)
This describes the visual surroundings and objects presented to the tethered animal by Unity.

## Unity Development Platform (Unity)
A commonly used real-time development software which allows users to create virtual environments and manipulate them with scripts written in the C# programming language.

## Wing Beat Amplitude Difference (WBAD)
The left wing’s amplitude minus the right wing’s amplitude. WBAD is used when calculating the yaw of the tethered animal’s avatar.

## Wing Beat Amplitude Sum (WBAS)
The left wing’s amplitude plus the right wing’s amplitude. WBAS is used when calculating the thrust of the tethered animal’s avatar.

> :ToCPrevNext