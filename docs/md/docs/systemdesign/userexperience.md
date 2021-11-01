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

# User Experience
<hr>

## System Flow
How does the system flow for the experimenter and tethered animal?

The experimenter will always start at the main menu. From here they can choose to load a sequence or replay a previous trial. Upon starting a new sequence one or more trials will be shown to the tethered animal, during these trials its movements will be recorded and used to move its avatar within the virtual environment. After each trial is complete the frame by frame location and orientation of the tethered animal’s avatar will be stored in a CSV file for later analysis along with the input from DLC-Live. This information can be used to replay each trial individually which will allow the experimenter to see what was happening within the virtual world from the tethered animal’s perspective.

## Mission/Challenge structure
What tasks will the experimenter and tethered animal be attempting to complete and how will they complete these tasks?

The experimenter will be attempting to provide stimuli to the tethered animal and collect quality data which can be used to support their research. As such the first challenge that the user is likely to encounter is creating the different virtual environments (scenes) they wish to use within their trials. 

Creating scenes is an involved process which requires a basic understanding of the Unity Game Engine. By using the editor, scenes can be created by importing assets from the project files. These assets (flowers, trees, ground) can then be rotated and moved with relative ease into a configuration suitable for the trial. Once the scene is complete and it has been added to the build list, the user can then create a trial and select their scene from the dropdown list.

Once a trial has been correctly set up it should then be added to a new or existing sequence, when run the sequence will play through one trial at a time. The data from each trial will be saved in its own folder after the trial has been completed. Trials and sequences can be created, modified, saved and loaded through the use of the Unity user interface.

The goals of the tethered animal will be to orient itself and fly in the direction it chooses within the virtual world. This could be toward Objects of Interest that are attractive or away from predators. This will be achieved from the tethered animal's perspective as orienting and moving within the limits of the tethered environment, but in reality these movements (wing beat amplitude, head yaw and roll) will be tracked and relayed to the tethered animal’s avatar within the virtual world which should then accurately mirror the movements of the tethered animal. Thus, creating the illusion from the tethered animal’s perspective that it is truly present and moving within the virtual scene in real-time.

> :ToCPrevNext