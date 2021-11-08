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

### Implicit

- That the tethered animal perceives the stimulus to be real and life-like. 
- That DLC-live accurately labels the desired points without bias.
- A total system latency of 25 ms
- Using WBAD in the yaw gain calculation will allow for the tethered animal’s avatar to mirror the desired heading of the tethered animal. 
- Using WBAS in the thrust gain calculation will allow for the tethered animal’s avatar to mirror the desired speed of the tethered animal. 


### Explicit
- The system should produce 165 unique frames per second in order to provide smooth visuals for the Eristalis Tenax.
- Updating the tethered animal’s input 100 times a second allows for the tethered animal to accurately control its virtual position.


## Physics

The tethered animal is stuck at a predetermined height within the virtual environment, due to the limitations of tracking with only one camera. Additionally, gravity and collisions are not being simulated within the scenes, the tethered animal will be able to travel through all other objects shown within the scene should it attempt to fly into them. 

## Character movement within the system

The tethered animal’s avatar is moved through the virtual environment using the data provided by the tethered animal’s physical movements. These movements are captured by a camera and the live footage is fed into DLC-Live, where coordinate points are extracted using pose estimation. 

These coordinates are then sent into Unity using a UDP socket, once they arrive the wing beat amplitude for each wing as well as head yaw and roll movements are all updated using the new coordinates. Unique coordinates are provided at a rate of 100hz. whereas Unity updates the stimulus screens at a rate of 165hz, this results in roughly 65 frames per second being produced using coordinates that are not unique. 

The tethered animal will be forced to maintain its starting height within the scene unless overridden by an Interpolation or Trial. The gains used to control yaw and thrust velocity can be configured using the Settings_Manager script shown below in Figure 6, the available methods for gain calculation are shown in Figure 7.

![SettingsManager](../../images/image3.png#centered)
<div class="centertext">Figure 6: Options available via the Settings_Manager to configure yaw and thrust gain.</div>

![ConstantGain](../../images/Systemdesignimages/image2.png#centered)

<div class="centertext">Constant Gain, value never changes no matter what the wing beat amplitude values are.</div>

![LinearGain](../../images/Systemdesignimages/image1.png#centered)

<div class="centertext">Linear Gain, value linearly scales with the wing beat amplitude values.</div>

![VariableGain](../../images/Systemdesignimages/image11.png#centered)

<div class="centertext">Variable Gain, the value linearly scales between 2 points, where the mid point is set by the user.</div>

## Objects and Actions

The tethered animal can control its heading and speed within the virtual environment, as it moves around the scene it can approach an Object of Interest (OOI) such as a flower or tree. The animal’s avatar will not be able to collide with or land on any objects. However, by making use of an Intervention as presented in Figure 8, Objects of Interest such as a dandelion depicted in Figure 9 can be moved, hidden or shown based on the tethered animal’s proximity to any of the Objects of Interest that exist within the scene or after a duration of time has passed.

![OOI](../../images/Systemdesignimages/ooi_dand.png#centered)

<div class="centertext">Figure 8: An Intervention configured to show the Dandelion1 OOI once the tethered animal has remained within 0.5m of the Tree3 OOI for 3 seconds.</div>

![Scene](../../images/Systemdesignimages/flowers.png#centered)

<div class="centertext">Figure 9: A close up of the Dandelion1 Object of Interest</div>

## Replaying and Saving

Once a trial has finished and the data associated with it is saved the user will be able to play-back the entire trial using the replay system. This is done by pressing the load replay button on the main menu, from here you will be asked to navigate to the trial’s folder. Once the folder is selected the system will then load the position and rotation of each Object of Interest within the trial as well as the system, sequence and trial settings saved within these files. After the files are loaded you will be presented with the start replay button, once clicked the system will begin the replay.

![SampleScene](../../images/Systemdesignimages/sidebyside.png#centered)

<div class="centertext">Figure 10: Image of low fidelity high performance scene.</div>

> :ToCPrevNext