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
</style>

# Interface
<hr>

## Visual System
- HUD
- Menus
- Camera Model

Main Menu
![MainMenu](../../images/Systemdesignimages/image15.png#centered) 

Stimulus Screen
![StimulusScreen](../../images/Systemdesignimages/image14.png#centered) 

POV of Tethered Animal

![LeftScreen](../../images/Systemdesignimages/image4.png#small) ![MiddleScreen](../../images/Systemdesignimages/image5.png#small) ![RightScreen](../../images/Systemdesignimages/image3.png#small)


## Control System
How does the game experimenter and tethered animal interact with the system? What are the specific commands?

The user has a few different ways to interact with the system, they are able to design scenes, navigate the project and create scriptable objects using the Unity editor. They can also activate the software by pressing the ‘Play’ button, this will then allow them to interact with the TFA user interface. From here they can start a sequence or replay a previous trial.

The tethered animal interacts with the system through a camera mounted above them, this feeds images to DLC-Live which calculates four points along the forward most facing edge of both wings, two on each wing. This is then fed into Unity where the points are used to calculate the wing beat amplitude for each wing, by calculating the difference between wing beat amplitudes (WBAD) we can then calculate the yaw rotation of the tethered animal as shown below. 

![StimulusScreen](../../images/Systemdesignimages/image7.png#invertedcenter) 
<div class="centertext">Results in a wing beat amplitude difference (WBAD) of 65</div>





## Help System

At this stage help is only provided in the form of documentation found here – (HacknPlan / GoogleDrive link / Github)


> :ToCPrevNext