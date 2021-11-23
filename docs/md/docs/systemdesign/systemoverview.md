<style>
img[src*="#centered"] {
    margin:auto;
    display:block;
 }
 img[src*="#invertedcenter"] {
    margin:auto;
    display:block;
    background: white;
    width: 75%;
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
</style>

# System Overview

<hr>

## System Concept

The Tethered Flight Arena makes use of DeepLabCut-live to perform markerless pose estimation in order to capture the movements of a tethered animal (wing beat amplitude, head yaw and roll). This information is then sent via a socket into another program known as Unity. Here, calculations are performed on the data by the CAVE software which is then used to manipulate the tethered animal’s avatar within the scene. These changes or updates to the animal’s position within the scene are presented as a stimulus to the tethered animal via 3 screens forming what is known as a closed loop.

Successfully closing the loop in such a way will allow for an increased understanding of the tethered animal’s behaviour and decision making as well as their ability to visually detect and target objects within the virtual environment, such as flora, predators and prey. 


## Physical Setup

The Tethered Flight Arena shown below in Figure 1, requires a variety of hardware in order to function properly, it is also likely that the physical setup will need to vary based on which species of animal is being studied. As such, this section is based on the requirements for studying the behaviour of an Eristalis Tenax hoverfly as an example. 


![Camera](../../images/Systemdesignimages/image12.jpg#centered)

<div class="centertext">Figure 1: An image of the Tethered Flight Arena.</div>

**Specifications:**

1 - 3x Asus Rog Swift PG279QE monitors connected to the computer via display cable, these screens are rotated into a portrait position and are placed with the goal of filling the tethered animal’s visual field as much as possible. These monitors are collectively referred to as the stimulus screens.

2 - Tethered animal (Eristalis Tenax)

3 - A visible light filter attached to the camera to ensure only infrared light is captured.

4 -  A PlayStation 3 Eye Motion Camera used to capture live footage of the tethered animal. This camera needs to be modified to accept infrared light, this is done by removing the filter layer on the camera sensor. The camera should be set to capture at 100hz with a resolution of 320x240.

A Dell Precision 3630 Tower, which includes a Nvidia RTX 3080 (10GB VRAM), 1TB of NVMe storage and an intel i7-10700k along with 32GB of RAM. This is used to provide the computational power necessary to run both DLC-live and Unity at the same time.

5 - DLC-live (pose estimation software), takes a video feed as input. Pose estimation is performed on each frame and the coordinates of the labels are then packaged and sent to Unity . With the described hardware Unity receives approximately 135 packets a second, 100 of these contain unique values the rest are all duplicates.

6 - Unity Game Engine (simulation software), takes the tracked points (labels) as input and uses them to simulate the tethered animal’s movement within the virtual environment. This environment is then displayed on the three stimulus screens surrounding the tethered animal, these screens are updated ~165 times a second. Unity also provides the user with an interface accessible on the experimenter’s monitor.

7 - A generic monitor used to display a basic user interface to the experimenter.

8 - 2x USB Reading Lamps, modified to use Infrared LEDs, which are used to illuminate the tethered animal. 

It is also necessary to create a custom rig to hold the tethered animal, camera and infrared lights in position.

![Camera](../../images/Systemdesignimages/image10.png#invertedcenter)

<div class="centertext">Figure 2: A top down view of the Tethered Flight Arena, it’s components and the flow of information.</div>

![Camera](../../images/Systemdesignimages/image9.png#invertedcenter)

<div class="centertext">Figure 3: A side view showing the relative positions of the camera and infrared lights.</div>


## Target Audience

The target audience for this product are the current and future researchers who are attempting to understand the behaviour of tetherable animals which respond to visual stimuli (screens) and whose physical movements can be tracked using DLC-live. Through this system researchers will be able to show various types of stimuli in a 3D environment and record the tethered animal’s physical responses during closed loop experimentation. This is especially appealing in virtual environments as it will give the researchers complete control over the scene and the objects in it. 

While this product is not necessarily targeted at the tethered animals themselves, steps must be taken to ensure that the experience they have is as close to life-like as possible. This should result in less error and fewer results which do not match the real world behaviour for such animals. 

## Genre(s)

Tethered Flight, Exploration, Research


## System Flow Summary

When using the CAVE software, the experimenter will start a sequence by opening the main menu scene. From here they can select the sequence manager in the hierarchy and load the sequence they wish to run. Now the user can press the unity “Play” button in order to start the runtime and place the user at the main menu shown below in Figure 4.

Figure 4: Main menu of the CAVE software, only active once the MainMenu scene is run.

From the main menu they can start a new sequence or replay a previous trial. If starting a new sequence the experimenter can also provide the sex of the tethered animal as well as a unique number. This information is used to provide the correct gain values and help identify the saved data for this specific animal. 

After a sequence is complete the system will play the default stimulus as chosen by the experimenter, this stimulus will continue to play until the user clicks the start next sequence button. Upon finishing the last sequence the runtime will automatically end, to start it again the user only needs to press the unity “Play” button. 

In order to create and edit system settings (Gain, Framerate, Save filepath), sequences, and trials the user must make use of the scriptable objects present in the Unity project. The CAVE user manual discusses how to use these scriptable objects in detail.

![Camera](../../images/Systemdesignimages/cave.png#invertedcenter)

## Look and Feel
The CAVE software will prioritise temporal performance (run on 3 monitors at 165 Hz) over spatial resolution (realistic visuals). By using objects with simplified geometry (low polygon count) as shown in Figure 5, the experimenter can present what they want the tethered animal to see in satisfactory detail while still allowing for the best possible performance.

As the animal being used as a template by this system (Eristalis Tenax) has fast photoreceptors, a high refresh rate (165 Hz) is necessary to provide an appropriate stimulus. Other animals may not require such a fast refresh rate allowing for more detailed scenes as well as less intensive hardware.

![Camera](../../images/Systemdesignimages/image8.png#centered)

<div class="centertext">Figure 5: An image from the tethered animal’s perspective (centre screen only).</div>



> :ToCPrevNext