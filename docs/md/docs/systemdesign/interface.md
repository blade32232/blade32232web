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
  img[src*="#full"] {
    width: 100%;
    height: auto;
 }
 div.centertext{
    text-align:center;
 }
  div.lefttext{
    text-align:left;
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

# Interface
<hr>

## Visual System

As the CAVE software exists within the Unity project the user will need to load the MainMenu scene and use the Unity “Play” button to access the CAVE user interface.

This interface is simple in design as shown in Figure 11. The main menu allows the user to input some basic information about their session, e.g. the sex of the animal (‘N/A’, figure 11). They will be able to use the “Start Sequence” button to present the sequences provided to the Sequence_Manager one after the other. Once a sequence has begun and trials are being displayed, the stimulus screen will show some basic information about the current trial. From this screen the user will be able to skip the current trial or stop the entire process.

Aside from starting a sequence the user can choose to load a replay. This can be used to load and play back a previous trial that has been saved. Simply navigate to the trial’s folder when prompted and then click the start replay button. 

<div class="centertext">Main Menu</div>

![MainMenu](../../images/Systemdesignimages/cave.png#centered) 

<div class="centertext">Stimulus Screen</div>

![StimulusScreen](../../images/Systemdesignimages/image14.png#centered) 

<div class="centertext"><sup><i>Figure 13: The Cave main menu and stimulus screen user interface.</i></sup></div>

During a trial the tethered animal will be presented with a stimulus of the chosen virtual environment (scene). This scene will cover 360 degrees of the visual field displayed across the 3 screens surrounding the tethered animal (Figure 14).

<div class="centertext">POV of Tethered Animal</div>
<p style="text-align:center;">
 <span style="float:left;">Left Screen</span> 
 Centre Screen
 <span style="float:right;">Right Screen</span>
</p>

![POVScreen](../../images/Systemdesignimages/pov.png#full)
<div class="centertext"><sup><i>Figure 14: 360 degrees of a virtual environment shown across 3 screens such that each screen contains 120 degrees of the scene’s horizontal axis.</i></sup></div>

## Control System
How does the game experimenter and tethered animal interact with the system? What are the specific commands?

The user has a few different ways to interact with the system, they are able to design scenes, navigate the project and create scriptable objects using the Unity editor. They can also activate the software by pressing the ‘Play’ button, this will then allow them to interact with the TFA user interface. From here they can start a sequence or replay a previous trial.

The tethered animal interacts with the system through a camera mounted above them, this feeds images to DLC-Live which calculates four points along the forward most facing edge of both wings, two on each wing. This is then fed into Unity where the points are used to calculate the wing beat amplitude for each wing, by calculating the difference between wing beat amplitudes (WBAD) we can then calculate the yaw rotation of the tethered animal as shown below. 

![StimulusScreen](../../images/Systemdesignimages/image7.png#invertedcenter) 
<div class="centertext">Figure 13: A diagram showing how wing beat amplitude is tracked and calculated, the resulting WBAD shown in this figure is 65.</div>

> :ToCPrevNext