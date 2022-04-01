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
</style>

# User Experience
<hr>

## System Flow

The experimenter will use the Unity development platform to configure and set up the CAVE project. Once this has been done and various scenes, trials and sequences have been created the user can then begin running the CAVE software to present stimuli to a tethered animal. 

To present stimuli the experimenter will always load the MainMenu scene, from this scene’s hierarchy several manager scripts can be found and edited which impacts how the software runs. Additionally, the Sequence_Manager within this scene is used to select the sequences which will be run by the Cave software. In order to start the Cave software begin the Unity runtime by pressing the “Play” button, the CAVE main menu will now be available via display 1. From this menu the user can start the first sequence or replay a previous trial. Upon starting a new sequence one or more trials will be shown to the tethered animal, during these trials the animal’s movements will be recorded and used to move its avatar within the virtual environment. 

After each trial is complete the frame by frame location and orientation of the tethered animal’s avatar will be stored in a CSV file for later analysis along with the data from DLC-Live. This information can be used to replay each trial individually, which will allow the experimenter to see what was happening within the scene from the tethered animal’s perspective. The information can also be used for offline analysis of flight trajectories, etc.

## Mission/Challenge structure

The experimenter will be providing stimuli to the tethered animal and collecting quality data which can be used to support their research. As such the first challenge that the user is likely to encounter is creating the different virtual environments (scenes) they wish to use within their trials. 

Creating scenes is an involved process which requires a good understanding of the Unity development platform. By using the editor, scenes can be populated with assets from the project files. These assets (flowers, trees, terrain) can be rotated and moved with relative ease into a configuration suitable for the trial. Once the scene is complete and it has been added to the build list, the user can create a trial and select their scene from the dropdown list.

Once a trial has been correctly set up it should be added to a new or existing sequence. When run the sequence will present the trials one after the other until the sequence is finished. The data from each trial will be saved in its own folder after the trial has been completed. Trials and sequences can be created, modified, and loaded through the use of the Unity user interface.

The tethered animal will orient itself and fly in the direction it chooses within the virtual environment. This could e.g. be toward Objects of Interest that are attractive or away from predators. This will be achieved from the tethered animal's perspective as orienting and moving within the limits of the tether, but in reality these movements (wing beat amplitude, head yaw and roll) will be tracked and relayed to the tethered animal’s avatar within the scene, which should then accurately mirror the movements of the tethered animal. Thus, creating the illusion from the tethered animal’s perspective that it is truly moving within the virtual environment in real-time.

## Saving Data (folder hierarchy)

The CAVE project generates several different files for the purpose of data collection and analysis. As such, a complex folder hierarchy shown below in Figure 6 is used to order the files and store them. 

![Camera](../../images/Systemdesignimages/folder.png#invertedcenter)

<div class="centertext"><sup><i>Figure 6: A diagram of the folder hierarchy which illustrates how and where data is stored.</i></sup></div>

The Parent Folder contains all folders and files created by the CAVE project, within the Parent Folder will be the Personal Folders. The name of the Personal Folder is defined by the Settings_Profile scriptable object assigned to the Settings_Manager. Personal Folders help to separate the results from different studies and users, although best practice is to have a completely separate project for each user. 

The data created and stored within the Personal Folder will also be split into one folder for each day, this will then be further separated by an Animal Folder for each unique animal. Within the Animal Folder will be a Sequence Folder for each sequence that was shown to that animal, the Sequence Folders will contain the settings used to run the sequence as well as a Trial Folder for each trial in the sequence.

Each Trial Folder will contain a DLC-Data file which stores the packets received from DeepLabCut-live as well as a transform file for each Object of Interest within the scene and a trial settings file.


> :ToCPrevNext