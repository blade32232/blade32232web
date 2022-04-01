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
  div
 {
   text-align: justify;
   text-justify: inter-word;
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

# Extra Information
<hr>

## Unique Selling Points

The combination of using DLC-live to track the behaviour of a tethered animal and Unity to interpret this data and use it to drive a stimulus is a unique and robust solution. In theory this combination of software could allow for the behaviour of almost any tetherable animal to be monitored in a completely controlled virtual environment. This should provide researchers with an invaluable tool to study animal behaviour.

## Player Experience and POV

The system is being designed around the Eristalis tenax hoverfly, this animal will be suspended from a tether attached to the dorso-anterior part of the thorax, and will be surrounded on all sides by three screens, forming a triangle as seen from above. These stimulus screens will be used to show various stimuli and produce a variety of behaviours from the tethered animal.

## Platform(s), Technology and Scope

This system is developed for an Ubuntu PC but should work on any system that can run DLC-live and Unity as it is driven by the combination of these programs. The development for this project will continue to be ongoing for the foreseeable future with a small development team, it is expected to be usable within 3-6 months (September-December 2021). 

## Internal Systems

### Scripts

| Name | Role |
| --- | ----------- |
| DataProcessor | Converts the packets received by the UDPServer into wing beat amplitudes. |
| DefaultStimulusController | Moves the default scene as specified by the provided default stimulus Scriptable Object. |
| Enum_Storage | A file that stores all the public enum’s that are used within the project. |
| FrameLimiter | A script that can optionally be used by the Settings Manager as an alternative way to limit the number of frames. |
| ObjectOfInterest | This script holds a unique ID that allows other scripts to search for it within the scene. |
| TetheredAnimalController | Moves the tethered animal based on its configured settings and input from the DataProcessor. |
| UDPServer | Receives packets from DLC-live and passes them through to the DataProcessor. |
| CreateStimulusScreens | Initialises and moves the stimulus screens into place. |
| Directory_Manager | Organises the folder structure where all data is saved. |
| Interventions_Manager | Keeps track of active interventions and triggers them when they meet their criteria. |
| Objects_Of_Interest_Manager | Keeps track of all the Objects of Interest within the scene and can be used to find them via their ID. |
| Replay_Manager | Loads previously saved data so that it can be used for replay. |
| Sequence_Manager | Passes the appropriate Trial to the Trial_Manager and determines what happens when the sequence is finished. |
| Settings_Manager | Applies the settings provided by the chosen Settings_Profile. |
| Stimulus_Manager | Activates and deactivates stimulus when asked to by the other scripts. |
| Trial_Manager | Loads the Trial provided by the Sequence_Manager, and passes on the active interventions and interpolations to the other managers. |
| UI_Manager | Allows the user to interact with the software through the CAVE user interface. |

### Scriptible Objects

| Name | Role |
| --- | ----------- |
| DefaultStimulus | Choose between 2D stimulus or a 3D scene and apply various settings to either. |
| Interpolation | Manipulate the starting values of an object or setting across all trials within a sequence. |
| Intervention | Manipulate an object in a variety of ways during a trial. |
| Object_Of_Interest | Provides the ID of the object you wish to manipulate. |
| Objects_Of_Interest_Parent | Provides the ID of the object you wish to manipulate. |
| Sequence | Provides a list of trials and the order they should be performed in. |
| Settings_Profile | Configures various project settings such as frame rate and the name of your personal folder. |
| Trial | Pick the scene, completion type, pre stimulus and various other settings for an individual trial. |

> :ToCPrevNext