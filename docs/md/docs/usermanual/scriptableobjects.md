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
h1{
   text-align:center;
}
 div
 {
   text-align: justify;
   text-justify: inter-word;
 }
</style>

# CAVE - User Manual

# Scriptable Objects

## Creating New Scriptable Objects

![ScriptableObjects](/images/image8.png#centered)

Right click in the folder (shown by red dot) where you wish to create your new <abbr title="A specific type of script (code) that is used to configure settings and store data in the Unity Editor, These scripts can then be accessed at runtime if required when the Tethered Flight Arena is active.">scriptable object</abbr>. Then follow the path Create > ScriptableObjects > “Scriptable object”.

## Object of Interest (OOI)
The <abbr title="An object which acts as an independent variable due to the experimenter’s ability to alter various settings such as its position and behaviour. There can be none or many Objects of Interest within one trial and these objects will usually take the form of a plant, tree, prey, or predator familiar to the tethered animal.">Object of Interest</abbr> script stores only one value, the OOI_ID, this allows for the appropriate manager scripts to find and interact with the object of interest within the scene that is represented by this unique ID, if it exists.

![ScriptableObjects](/images/image1.png#centered)

Using this script within the trials, sequences, interventions, and interpolations is how we let the software know which object in the scene we wish to manipulate, as well as how to manipulate it.

## Intervention

![ScriptableObjects](/images/image11.png#centered)

Interventions are used to manipulate Objects of Interest within the scene during a trial.

- Actions
    - Edit transform
    - Spawn object
    - Hide object


- Triggers
    - Duration
    - Proximity

The selected action is performed on the <abbr title="An object which acts as an independent variable due to the experimenter’s ability to alter various settings such as its position and behaviour. There can be none or many Objects of Interest within one trial and these objects will usually take the form of a plant, tree, prey, or predator familiar to the tethered animal.">Object of Interest</abbr> once the conditions of the trigger have been met. E.g 3 seconds have passed.

![ScriptableObjects](/images/image2.png#centered)

In this case, Tree2 will be hidden once the Tethered Animal is within 2 metres of Tree1 for 3 seconds.

## Interpolation

![ScriptableObjects](/images/image7.png#centered)

Interpolations allow us to manipulate an Object of Interest or a particular setting across all of the trials in a sequence.
 - Uncheck the interpolate object setting, to switch it to interpolate options

Select an <abbr title="An object which acts as an independent variable due to the experimenter’s ability to alter various settings such as its position and behaviour. There can be none or many Objects of Interest within one trial and these objects will usually take the form of a plant, tree, prey, or predator familiar to the tethered animal.">Object of Interest</abbr>, choose how you wish to manipulate it, select the range you wish to interpolate between and how you wish that interpolation to be calculated.




## Trial

![ScriptableObjects](/images/image6.png#centered)

A trial is where the vast majority of the users choices and setting will be applied, here the user is able to modify the :


- **Scene** : The virtual world shown to the tethered animal.

- **Completion Type** : Duration, duration or proximity, this allows for trials to be completed after a certain amount of time has passed or if they satisfy the proximity requirements, whichever comes first.

- **Trial duration** : The amount of time that passes in seconds before the trial completes itself.

- **Pre and post stimulus** : What is shown to the tethered animal before and after the trial (virtual world) is shown.

- **Pre and post stimulus duration** : Duration of the stimulus is shown in seconds.

- **List of Interventions** : The interventions being applied to this trial.

- **Object of Interest Changes** : Select object, edit position and if necessary set the proximity range and duration.
    - **Object of Interest** : The OOI that we are manipulating.
    - **Position Changes** : Position change to be added to the current position.
    - **Proximity** : How close the tethered animal needs to be to the object in metres.

        ***Note*** : A value of 0, disables proximity checking.
    - **Proximity Duration** : The duration for which the tethered animal must be within the specified proximity, before trial completion is triggered.

## Sequence

![ScriptableObjects](/images/image5.png#centered)

The sequence contains all the trials we wish to run in a row and allows us to organise the order and number of trials. Here we can also set which control stimulus we wish to use as well as how long this stimulus should last. Finally, we can also add interpolations which will affect all trials within the sequence.

### Unity Project Settings

Color Space is set to Gamma
By default this is set to Linear, but was switched to Gamma in order to provide more realistic images for the tethered animal. This setting can be found in the following location.

Edit > Project Settings > Player > Other Settings > Rendering > Color Space 

> :ToCPrevNext