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
  div
 {
   text-align: justify;
   text-justify: inter-word;
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
</style>

# Mechanics
<hr>

## Rules

### Implicit

- That the tethered animal perceives the stimulus to be real and life-like. 
- That DLC-live accurately labels the desired points without bias.
- A total system latency of ~50 ms
- Using WBAD in the yaw gain calculation will allow for the tethered animal’s avatar to mirror the desired heading of the tethered animal. 
- Using WBAS in the thrust gain calculation will allow for the tethered animal’s avatar to mirror the desired speed of the tethered animal. 

### Explicit
- The system should produce unique frames at 165 Hz.
- Updating the tethered animal’s heading within the virtual world at the refresh rate of the camera (100 Hz).


## Physics

The tethered animal is stuck at a predetermined height within the virtual environment, due to the limitations of tracking with only one camera. Additionally, gravity and collisions are not being simulated within the scenes, the tethered animal will be able to travel through all objects shown within the scene should it attempt to fly into them.  

## Character movement within the system

The tethered animal’s avatar is moved through the virtual environment using the data provided by the tethered animal’s physical movements. These movements are captured by a camera and the live footage is fed into DLC-Live, where labels are placed using pose estimation. 

These coordinates of these labels are sent into Unity using a UDP socket. Once they arrive the wing beat amplitude for each wing is updated using the new coordinates and is stored along with the coordinates used to calculate head yaw and roll. Unique coordinates are provided at a rate of 100 Hz (camera rate). whereas Unity updates the stimulus screens at a rate of 165 Hz (temporal resolution of the screens). This results in roughly 65 frames per second being produced using coordinates that are not unique. 

The tethered animal will be forced to maintain its starting height within the scene unless overridden by an Interpolation or Trial settings. The gains used to control yaw and thrust velocity can be configured using the Settings_Manager script shown below in Figure 6, the available methods for gain calculation are shown in Figure 7.

![SettingsManager](../../images/image3.png#centered)
<div class="centertext"><sup><i>Figure 7: Options available via the Settings_Manager to configure yaw and thrust gain.</i></sup></div>

![ConstantGain](../../images/Systemdesignimages/yaw.png#centered)
<div class="centertext"><sup><i>Figure 8: Different methods available to the user for calculating Yaw and Thrust values.</i></sup></div>

## Calculating the Longitudinal Axis and Wing Beat Amplitudes

The tethered animal interacts with the system through flight. This is made possible by a camera mounted above the animal live streaming images into DLC-Live, within this software pose estimation is then performed in order to find and label points necessary for calculating wing beat amplitude and the longitudinal axis. The coordinates of these labels are then sent through to Unity where the wing beat amplitude and the longitudinal axis are calculated. These calculations are used to update the tethered animal’s avatar’s yaw rotation and forward thrust, allowing it to move within the virtual environment and navigate toward objects. 

These calculations are done by first working out the longitudinal axis of the tethered animal as there is no guarantee it is aligned with the camera and any offset will need to be factored into the rest of the calculations. The longitudinal axis is calculated from two points, one at the centre of the upper abdomen and one at the centre of the lower abdomen, these points can be labelled by DeepLabCut-live and continuously updated throughout the trial or manually labelled by the user before starting the first sequence.

- specify that longitudinal line can be determined manually by the user
- DLC-live tracks coloured points in real time
- left WBA (green points) relative to the longitudinal line
- Both go from 0 to 180
- left turn is negative (right WBA > left WBA)

![tracking](../../images/Systemdesignimages/tracking.jpg#centered)
<div class="centertext"><sup><i>Figure 9: A diagram showing how the wing beat amplitudes are tracked and calculated, the resulting WBAD shown in this figure is 65.</i></sup></div>

## Objects and Actions

The tethered animal can control its heading (yaw rotation) and speed (forward thrust) within the virtual environment. As it moves around the scene it can approach an Object of Interest (OOI) such as a flower or tree. The animal’s avatar will not be able to collide with or land on any objects. However, by making use of an Intervention as presented in Figure 10, Objects of Interest such as a dandelion depicted in Figure 9 can be moved, hidden or shown based on the tethered animal’s proximity to any Object of Interest, or after a duration of time has passed.

![OOI](../../images/Systemdesignimages/ooi_dand.png#centered)

<div class="centertext"><sup><i>Figure 10: An Intervention configured to show the Dandelion1 OOI once the tethered animal has remained within 0.5m of the Tree3 OOI for 3 seconds.</i></sup></div>

![Scene](../../images/Systemdesignimages/flowers.png#centered)

<div class="centertext"><sup><i>Figure 11: A close up of the Dandelion1 Object of Interest</i></sup></div>

## Options
*What are the options and how do they affect the system?*

### Settings Profile
Global settings that impact the system at all times, they should be configured with care and only altered when necessary. Different profiles can be created and swapped between.

- Frames per second
Sets the number of times per second the visual stimulus (virtual environment) being displayed to the screens is updated. This should be based on the ability of the graphics card and the screen, taking care to ensure that no frames are dropped. 

- Save location for data files
This setting is used to set the “personal folder” name, where all the data generated while this settings profile is in use is saved.

- Yaw and thrust gain settings
Determines the method and values used to calculate both the yaw and thrust gain.

There are other scriptable objects used throughout the system such as Trials, Sequences, Interventions and Interpolations. These are described in great detail within the User Manual.

## Replaying and Saving

Once a trial has finished and the data associated with it is saved the user will be able to play-back the entire trial using the replay system. This is done by pressing the load replay button on the main menu, from here you will be asked to navigate to the trial’s folder. Once the folder is selected the system will then load the position and rotation of each Object of Interest within the trial as well as the system, sequence and trial settings saved within these files. After the files are loaded you will be presented with the start replay button, once clicked the system will begin the replay.

> :ToCPrevNext