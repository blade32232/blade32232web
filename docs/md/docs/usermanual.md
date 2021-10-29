# Tethered Flight Arena - User Manual

# Settings

The Settings_Profile allows the user to configure various parts of the Tethered Flight Arena to match the physical setup as well as determine the frame rate and gain settings. Once set it is unlikely that these settings should be changed. 

The current Settings_Profile can be swapped or edited via the Settings_Manager object located in the MainMenu scene. By selecting this object from the scene hierarchy menu on the left, the inspector on the right will display the Settings_Manager script. The Settings_Profile can then be manipulated directly or replaced by a different Settings_Profile. All of the Settings_Profiles within the project should be located in the following folder.

Assets > _ScriptableObjects > Profiles


> :CenterImage

![SettingsManager](/images/image3.png)

# Workflow

Starting a Sequence

In order to start a sequence, first make sure that you have loaded the “MainMenu” Scene. It is important to start from this scene as it creates vital managers which control most of what happens within the software. 

The MainMenu Scene can be found and loaded by navigating to the Scenes folder and double clicking on the scene.

![MainMenuScene](/images/image12.png)

To choose the sequence we wish to run, click on the Sequence_Manager, in the hierarchy to your left.

![Heirarchy](/images/image10.png)

Once you have done that, the Inspector on your right should show you the following script, in the Sequence_Manager script you should now remove the sequences you do not what and add the ones which you would like to use.

![SequenceMangaer](/images/image4.png)

Then click the play button at the top of your screen.

![SequenceMangaer](/images/image13.png)

# Data Collection

![FolderStructure](/images/image9.png)

Master Folder : Contains all the data recorded by the Tethered Flight Arena software.

Personal Folder : Set via the Settings_Profile, this folder contains all the data recorded while that specific Settings_Profile was being used.

Daily Folder : Created for each day data was recorded.

Animal Folder : Created for each unique animal used to record data, the name for this folder is defined by the user at the TFA MainMenu.

Sequence Folder : Created for each sequence run by the user, and time-stamped with the time that sequence was started. Also contains a data file used to store all the relevant information about the sequence.

Trial Folder : Created for each trial run by the user and time-stamped with the time that trial was started. This folder contains the transform data for each Object of Interest within the scene, the DLC_data file and the trial data file used to store all the relevant information about the trial.

# Scriptable Objects

## Creating New Scriptable Objects

![ScriptableObjects](/images/image8.png)

Right click in the folder (shown by red dot) where you wish to create your new scriptable object. Then follow the path Create > ScriptableObjects > “Scriptable object”.


## Object of Interest (OOI)
The Object of Interest script stores only one value, the OOI_ID, this allows for the appropriate manager scripts to find and interact with the Object of Interest within the scene that is represented by this unique ID, if it exists.

![ScriptableObjects](/images/image1.png)

Using this script within the trials, sequences, interventions, and interpolations is how we let the software know which object in the scene we wish to manipulate, as well as how to manipulate it.

## Intervention

![ScriptableObjects](/images/image11.png)

Interventions are used to manipulate Objects of Interest within the scene during a trial.

- Actions
    - Edit transform
    - Spawn object
    - Hide object


- Triggers
    - Duration
    - Line of sight (not implemented)
    - Proximity

The selected action is performed on the Object of Interest once the conditions of the trigger have been met. E.g 3 seconds have passed.

![ScriptableObjects](/images/image2.png)

In this case, Tree2 will be hidden once the Tethered Animal is within 2 metres of Tree1 for 3 seconds.

## Interpolation

![ScriptableObjects](/images/image7.png)

Interpolations allow us to manipulate an Object of Interest or a particular setting across all of the trials in a sequence.
 - Uncheck the interpolate object setting, to switch it to interpolate options

Select an Object of Interest, choose how you wish to manipulate it, select the range you wish to interpolate between and how you wish that interpolation to be calculated.




## Trial

![ScriptableObjects](/images/image6.png)

A trial is where the vast majority of the users choices and setting will be applied, here the user is able to modify the :


- **Scene** : The virtual world shown to the tethered animal.

- **Completion Type** : Duration, duration or proximity, this allows for trials to be completed after a certain amount of time has passed or if they satisfy the proximity requirements, whichever comes first.

- **Trial duration** : The amount of time that passes in seconds before the trial completes itself.

- **Pre and post stimulus** : What is shown to the tethered animal before and after the trial (virtual world) is shown.

- **Pre and post stimulus duration** : Duration the stimulus is shown for in seconds.

- **List of Interventions** : The interventions being applied to this trial.

- **Object of Interest Changes** : Select object, edit position and if necessary set the proximity range and duration.
    - **Object of Interest** : The OOI that we are manipulating.
    - **Position Changes** : Position change to be added to the current position.
    - **Proximity** : How close the tethered animal needs to be to the object in metres.

        ***Note*** : A value of 0, disables proximity checking.
    - **Proximity Duration** : The duration for which the tethered animal must be within the specified proximity, before trial completion is triggered.

## Sequence

![ScriptableObjects](/images/image5.png)

The sequence contains all the trials we wish to run in a row and allows us to organise the order and number of trials. Here we can also set which control stimulus we wish to use as well as how long this stimulus should last. Finally, we can also add interpolations which will affect all trials within the sequence.



















Unity Project Settings


Color Space is set to Gamma
By default this is set to Linear, but was switched to Gamma in order to provide more realistic images for the tethered animal. This setting can be found in the following location.

Edit > Project Settings > Player > Other Settings > Rendering > Color Space 




> :ToCPrevNext