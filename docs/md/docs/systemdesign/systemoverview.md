<style>
img[src*="#centered"] {
    margin:auto;
    display:block;
 }
  div
 {
   text-align: justify;
   text-justify: inter-word;
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

The Tethered Flight Arena makes use of DeepLabCut-live to perform markerless pose estimation in order to capture the movements of a tethered animal (currently wing beat amplitude, head yaw and roll, and longitudinal axis). This information is sent via a socket into another program known as Unity. Here, calculations are performed on the data by the CAVE software, which is then used to manipulate the tethered animal’s avatar within the scene. These changes or updates to the avatar’s position within the scene are presented as a stimulus to the tethered animal via 3 screens forming what is known as a closed loop.

Successfully closing the loop in such a way will allow for an increased understanding of the tethered animal’s behaviour and decision making as well as their ability to visually detect and target objects within the virtual environment, such as flora, predators and prey.


## Physical Setup

The Tethered Flight Arena shown below in Figure 1, requires a variety of hardware in order to function properly, it is also likely that the physical setup will need to vary based on which species of animal is being studied. As such, this section is based on the requirements for studying the behaviour of an Eristalis Tenax hoverfly as an example. 


![Camera](../../images/Systemdesignimages/image12.jpg#centered)

<div class="centertext"><sup><i>Figure 1: An image of the Tethered Flight Arena.</i></sup></div>

**Specifications:**

1 - 3x Asus Rog Swift PG279QE monitors connected to the computer via display cable. The three screens are rotated into the portrait position and are placed an equal distance from the tethered animal. The monitors are used to fill as much of the tethered animal’s visual field as possible, collectively the monitors are referred to as the stimulus screens.

2 - Tethered animal (Eristalis Tenax)

3 - An infrared light filter (760-860nm, 95%) attached to the camera (see below) which only allows infrared light through.

4 -  A PlayStation 3 Eye Motion Camera used to capture live footage of the tethered animal. This camera has been modified to detect infrared light, which is done by removing the filter layer on the camera sensor. The camera is set to capture at 100 Hz at a spatial resolution of 320x240. 100 Hz allows motion blur of the wings, which is optimal for detecting the WBA.

5 - A Custom built PC which includes a Nvidia RTX 3080 (10GB VRAM), 1TB of NVMe storage and an intel i7-10700k along with 32GB of RAM. This is used to provide the computational power necessary to run both DLC-live and Unity at the same time.

6 - DLC-live (pose estimation software), takes a video feed as input. Pose estimation is performed on each frame and the coordinates of the labels are then packaged and sent to Unity. With the described hardware Unity receives approximately 135 packets a second, 100 of these contain unique values, while the rest are all duplicates (camera records at 100 Hz).

7 - Unity development platform (CAVE project), takes the tracked points (labels) as input and uses them to move the tethered animal’s avatar within the virtual environment. This is displayed on the three stimulus screens surrounding the tethered animal. The screens are updated at 165 Hz. The CAVE software also provides the user with an interface accessible on the experimenter’s monitor.

8 - A generic monitor used to display a basic user interface to the experimenter.

9 - 2x USB Reading Lamps modified to use Infrared LEDs, they are used to illuminate the tethered animal from an angle of the experimenter’s choice. 

10 - Infrared microscope ring light used to illuminate the tethered animal from directly above. 

11 - An infrared absorbing material used to provide a black background during video capture, this produces clearer images for DLC-live to analyse.

Diagrams of the system are provided in Figures 2 and 3. Figure 2 highlights the flow of information from the camera all the way through to the stimulus screens, it also shows the number of times per second unique information is passed from one component to the next as well as the latency added by each section of the system. Figure 3 is an isometric representation of all the equipment and its position within the arena.

Within the system, the camera captures unique frames at 100 Hz and passes these frames into DLC-live (red, figure 2). DLC-live performs pose estimation more than 100 times a second but only 100 unique packets are sent into Unity (green, figure 2). From here Unity updates the tethered animal’s avatar’s  position and shows a new point of view to the tethered animal at 165 Hz (blue, figure 2). However, despite the perspective being unique, 65 of these frames are generated using DLC-live data that is not unique. 

It is also necessary to create a custom rig to hold the tethered animal, camera and infrared lights in position.

![Camera](../../images/Systemdesignimages/image10.png#invertedcenter)

<div class="centertext"><sup><i>Figure 2: (A) A system blueprint of the Tethered Flight Arena, highlighting each component and the flow of information. Where the frequency of unique information is represented in Hz and the system latency is represented in ms, the system has a minimum latency of 48ms and a maximum latency of 74ms. (B) A side view illustrating the tethered animal’s position relative to several components of the rig. (C) The raw image captured by the camera. (D) The same image as shown in part C after DLC-live has performed pose estimation and placed labels, the x and y coordinates of these labels are then sent to Unity where the behaviour of the tethered animal is simulated. (E) A frame from the current environment being rendered by Unity in real time as seen from a single display (120 degrees of the horizontal visual field).</i></sup></div>

![Camera](../../images/Systemdesignimages/image9.png#invertedcenter)

<div class="centertext"><sup><i>Figure 3: An isometric view of the Tethered Flight Arena, highlighting the positioning of all relevant equipment and materials.</i></sup></div>

## System Latency

The system latency describes the amount of time that passes before the tethered animal’s physical movements are used to generate a new perspective within the virtual environment which is shown to the tethered animal via the stimulus screens.

This latency was calculated through two separate approaches, estimated latency and measured latency. Estimated latency was calculated by outputting timestamps when certain functions were executed within the software of both DLC-live and Unity, Measured latency was calculated using a photodiode to measure the duration of time that passed before a real world change was represented on the stimulus screens.

The outcome of these two separate measurements was an estimated latency of xx ms and a measured latency of xx ms. The correlation is …

The main contributing factors to system latency are
- Camera exposure settings (0 - 10 ms)
- Camera frame buffer (10-20?)
- Pose estimation by DLC-live (16-26 ms)
- Unity receive packet and load values (<100 microseconds)
- Unity frame buffer (6-12?)
- Frame generated from updated values (0 - 6 ms)

Average latency (standard deviation or error of the mean)
Best case latency
Worst case latency

## Target Audience

The target audience for this product are the current and future researchers who are aiming to understand the behaviour of tetherable animals which respond to visual stimuli (screens) and whose physical movements can be tracked using DLC-live. Through this system researchers will be able to show various types of stimuli in a 3D environment and record the tethered animal’s physical responses during closed loop experimentation. This is especially appealing in virtual environments as it will give the researchers complete control over the scene and the objects in it. 

While this product is not necessarily targeted at the tethered animals themselves, steps must be taken to ensure that the experience they have is as close to life-like as possible. This should result in less error and fewer results which do not match the real world behaviour for such animals. 

## Genre(s)

Tethered Flight, Exploration, Research

## System Flow Summary

When using the CAVE project, the experimenter will start a sequence by opening the MainMenu scene. From here they can select the sequence manager in the hierarchy and add the sequences they wish to run. Now the user can press the Unity “Play” button in order to start the runtime and give the user at the menu shown below in Figure 4.

![Camera](../../images/Systemdesignimages/cave.png#invertedcenter)

<div class="centertext"><sup><i>Figure 4: Main menu of the CAVE software, only active once the MainMenu scene is run.</i></sup></div>

From the CAVE user interface the experimenter can start a new sequence or replay a previous trial. If starting a new sequence the experimenter can also provide the sex of the tethered animal (‘N/A’, figure 4) as well as a unique number (‘Animal Number’, figure 4). This information is used to alter settings based on the current animal’s sex and help identify the saved data for this specific animal. 

After a sequence is complete the system will play the default stimulus as chosen by the experimenter. This stimulus will continue to play until the user clicks the start sequence button (‘Start Sequence’, figure 4). Upon finishing the last sequence the runtime will automatically end. To start it again the user needs to press the unity “Play” button. 

In order to create and edit system settings (Gain, Framerate, Save filepath), sequences, and trials the user must make use of the scriptable objects present in the Unity project. The CAVE user manual discusses how to use these scriptable objects in detail.

## Look and Feel
The CAVE software will prioritise temporal performance (run on 3 monitors at 165 Hz) over spatial resolution (what would look like more realistic visuals to the human observer). By using objects with simplified geometry (low polygon count) as shown in Figure 5, the experimenter can present what they want the tethered animal to see in satisfactory detail while still allowing for the best possible temporal performance.

As the animal being used as a template by this system (Eristalis tenax) has fast photoreceptors, a high refresh rate of the stimulus screens (165 Hz) is necessary to provide an appropriate stimulus. Other animals may not require such a fast refresh rate allowing for more detailed scenes as well as less intensive hardware.

![Camera](../../images/Systemdesignimages/image8.png#centered)

<div class="centertext"><sup><i>Figure 5: An image from the tethered animal’s perspective (centre screen only).</i></sup></div>

> :ToCPrevNext