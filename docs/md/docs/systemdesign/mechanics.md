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
</style>

# Mechanics
<hr>

## Rules
What are the rules to the system, both implicit and explicit?

## Implicit
That the tethered animal perceives the stimulus to be real and life-like. 
That wing beat amplitude difference indicates yaw turn.
That wing beat amplitude sum indicates translation speed.

## Explicit
That a minimum of 165 frames is required for Eristalis Tenax to perceive smooth motion.
Updating the tethered animal’s input 100 times a second allows for the tethered animal to accurately control its virtual position. 
latency?

## Physics
How does the physical universe work?
should the tethered animal be able to collide with world objects such as trees and flora?

The tethered animal is stuck at a predetermined height within the world space, due to the limitations of tracking. Additionally, there is also no gravity or collision being simulated within the scenes, the tethered animal will be able to travel through all other objects shown within the environment. 

## Character movement within the system
How do the characters navigate the playable space?

The tethered animal’s avatar is moved through the environment using the data provided by the tethered animal’s physical movements. These movements are captured using live footage and fed into DLC-Live, where coordinate points are extracted using pose estimation. These points are then fed into Unity using a UDP socket, here the wing beat amplitude is calculated for each wing as well as head yaw and roll movements. 

However, movement will be limited to a singular height, specified within the experiment settings, and changes in rotation and thrust can be based on a constant, linear or variable gain as illustrated below.

![ConstantGain](../../images/Systemdesignimages/image2.png#centered)

Constant Gain, value never changes no matter what the wing beat amplitude values are.

![LinearGain](../../images/Systemdesignimages/image1.png#centered)

Linear Gain, value linearly scales with the wing beat amplitude values.

![VariableGain](../../images/Systemdesignimages/image11.png#centered)

Variable Gain, the value linearly scales between 2 points, where the mid point is set by the user.

## Objects and Actions
*What world items or objects can the tethered animal interact with and how do they interact with these items. What actions can the animal perform such as landing on flora and interacting with other animals present within the scene*

In order to make an object interactable an intervention must be set to target that specific Objects of Interest, if this object exists within the scene the intervention can then be used to move, hide or show the object based on the tethered animals proximity to an Object of Interest or a duration of time has passed. 

![Scene](../../images/Systemdesignimages/image6.png#centered)

## Screen Flow
How each screen is related to every other screen and a descriptive purpose for each screen.

Once the user has configured their sequence and they are ready to begin displaying the stimulus, they should load the MainMenu scene and then hit the unity “Play” button. This will begin the runtime and bring the user to the main menu, from here all other screens will be made accessible as required. 

During each sequence the stimulus screen will be displayed, this shows some basic information about the current trial as well as how many trials are left. 

Once a sequence has finished the user is brought to the sequence screen which is primarily blank with a start sequence button, this is to be used once the experimenter is ready to begin the next sequence. Doing so will bring them back to the stimulus screen. Once the last sequence has finished the runtime will self terminate. 

If the user chooses to replay a previous trial from the main menu, they will be brought to the begin replay screen after locating the trial’s folder. From this screen the user can begin the replay when they are ready. After the replay has finished the system will wait for them to end the runtime themselves by pressing the unity “Play” button. 

## Options
What are the options and how do they affect the system?

## Settings Profile
Global settings that impact the system at all times, they should be configured with care and only altered when necessary. Different profiles can be created and swapped between.

- Frames per second
Sets the number of times per second the visual stimulus (virtual environment) being displayed to the screens is updated. A higher framerate results in smoother visuals. 

- Save location for data files
This setting is used to set the “personal folder” name, this folder stores all the data generated while this settings profile is in use.

- Yaw and thrust gain settings
Determines the method and values used to calculate both the yaw and thrust gain.

There are other scriptable objects used throughout the system such as Trials, Sequences, Interventions and Interpolations. These are described in great detail within the User Manual.

## Replaying and Saving
Will the tethered animal be forced to repeat content if they fail and at what points can progress be saved?

Once a trial has finished and the data associated with it is saved the user will be able to play-back the entire trial using the replay system. This is done by pressing the load replay button on the main menu, from here you will be asked to navigate to the trial’s folder. Once the folder is selected the system will then load the position and rotation of each Object of Interest within the trial as well as the system, sequence and trial settings saved within these files. After the files are loaded you will be presented with the start replay button, once clicked the system will begin the replay.

![SampleScene](../../images/Systemdesignimages/image13.png#centered)

> :ToCPrevNext