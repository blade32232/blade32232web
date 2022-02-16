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

# Object of Interest Management

## Duplicating an existing OOI

Find the OOI you wish to duplicate within the Prefabs > Objects_of_interest folder.

Then click on it and while it is highlighted, duplicate it by either pressing Ctrl + D or navigating to Edit > Duplicate within the Unity menu in the top right.

Delete the existing Object of Interest script and add a new one to get a new unique ID (reset does not work and causes a missing reference in the OOI Manager.

Create OOI Scriptable and link it to the correct ID

## Creating a new OOI

Follow steps for Duplicating an existing OOI

Then swap out visual component


## Adding an OOI to a scene
 - Add your OOI of choice to the scene the same way you would add any prefab
 - Additionally, make sure each OOI within your scene has a unique ID.

Find it within the Prefabs folder

![DynamicOOI](/images/dynamiooi.png#centered)


Then drag it into your scene and unpack the prefab completely by right clicking on it and navigating to Prefab > Unpack Completely

![Unpack](/images/unpackcomp.png#centered)

## Configuring a Dynamic OOI

Once your OOI has been added to the scene and completely unpacked, click on it in the scene hierarchy on the left hand side of the screen. This will allow you to inspect the object via the panel on the right hand side of the screen, here you will see the Object of Interest script.

First, make sure that the Is Dynamic OOI option is checked, this will make the configurable options available.

- **Object Speed** : this value sets the speed of the object in metres per second, this speed will be used when patrolling, chasing and fleeing.

- **Patrol Point Parent** : This is an object within the Dynamic OOI which stores the waypoints as children, it should already be configured and can be ignored.

- **Is Patrol Repeatable** : This option will allow the Dynamic OOI to loop back to its first patrol point and repeat the path rather than stopping once it has reached the last point.




- **Initial Behaviour** : This is the behaviour of the Dynamic OOI when the scene is started, it can be set to Hover, Patrol, Chase and Flee. 
    - Setting Initial Behaviour to No Behaviour will result in an error
    - Hover sets the object to do nothing, it will stay in place.
    - Patrol will set the object to move directly to one patrol point after the other. 
    - Chase will set the object to chase after the Initial OOI
    - Flee will set the object to flee from the Initial OOI

![OOIScript](/images/ooi.png#centered)

- **Encounter Behaviour** : This is the behaviour of the Dynamic OOI after it has encountered the OOI specified by the OOI_To_Encounter variable
    - No Behaviour disables any possible encounter, ensuring the object maintains its initial behaviour.
    - Hover sets the object to do nothing, it will stay in place.
    - Patrol will set the object to move directly to one patrol point after the other. 
    - Chase will set the object to chase after the After Encounter OOI
    - Flee will set the object to flee from the After Encounter OOI

- **Initial OOI** : This value will only be visible if the Initial Behaviour is set to chase or flee, the OOI chosen for this value will be the initial target that will be chased or fled from. 

- **After Encounter OOI** : This value will only be visible if the Encounter Behaviour is set to chase or flee, the OOI chosen for this value will be the target that will be chased or fled from after the encounter has happened.

- **Encounter Type** : This allows the user to choose the type of encounter they wish to use.
    - Duration will allow the user to trigger the Encounter Behaviour after a specified amount of time has elapsed
    - Proximity will allow the user to trigger the Encounter Behaviour after the Dynamic Object of Interest is within the specified radius of the OOI_To_Encounter for the specified duration. 

- **OOI_To_Encounter** : This value will be visible if Encounter Behaviour is not set to No Behaviour, if the OOI chosen for this field is within the encounter radius for the encounter duration then the object will change from its Initial Behaviour to its Encounter Behaviour.

- **Encounter Radius** : The radius in metres which the OOI_To_Encounter must be within for the Encounter Behaviour to be triggered.

- **Encounter Duration** : The duration which the OOI_To_Encounter must be within the radius for in order to trigger the Encounter Behaviour.


## Resetting the Unique ID for all OOI

**If there is only a few errors and you do not wish to reset the entire list**, you will need to open up the Objects_Of_Interest_Parent script, and remove the “, ReadOnly” code from initialisation of the list and counter variables, once saved you can go back into Unity and now manually edit these variables within the Objects_Of_Interest_Parent scriptable object. Once things are set how you like it may be best to re-add the “, ReadOnly” code.

![OOIParent](/images/ooiparent.png#centered)

Otherwise, in order to reset the entire list you will need to manually remove all Object Of Interest scripts from the objects of interest within the project. Objects of interest should be located in the Assets > _Prefabs > Objects_Of_Interest folder

![OOIRemove](/images/ooiremove.png#centered)

Next, navigate to the Object of Interest Parent script and reset it.
Assets > _ScriptableObjects > Objects_Of_Interest > Objects_Of_Interest_Parent

![OOIReset](/images/ooireset.png#centered)

Now you will need to manually re-add the Object Of Interest scripts to the necessary objects, the first object will be assigned ID 0 and the next will be ID 1 and so on. **Do not configure the scripts yet as you may need to repeat the previous steps and start again.**

Once you have added all the Object of Interest scripts you should then check to make sure that the Object_Of_Interest_Parent has no missing references (if it does you may wish to begin again as it cant be guaranteed to show all Objects of Interest and assign unique IDs)

You should also check that the Object of Interest scriptable objects (example below) match the newly assigned IDs, if not you will need to manually change them so that they do match.

![OOITethered](/images/ooitethered.png#centered)

## Configure scripts

All Objects of Interest will need to have their VisibleComponent assigned to the Visible Component variable, this is done by opening the prefab located in the project files by double clicking on it. 

The Hierarchy should now show all the objects that make up the Object of Interest.

![OOIWasp](/images/ooiwasp.png#centered)

Click on the parent object highlighted above in blue, this will display the object of interest script in the inspector on the right side of the window. Now drag the VisibleComponent object from the hierarchy into the Visible Component variable slot shown by the script. If the object is dynamic follow the steps below otherwise the Object of Interest is now set up. 

## If the Object is dynamic
You will also need to check the Is Dynamic OOI boolean value and assign the PatrolPointParent the same way you assigned the Visible Component previously. The script should appear as below.

![OOIWaspDynamic](/images/ooiwaspdynamic.png#centered)

> :ToCPrevNext