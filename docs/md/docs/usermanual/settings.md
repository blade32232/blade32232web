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
h1{
   text-align:center;
}
</style>

# Tethered Flight Arena - User Manual

# Settings

The Settings_Profile allows the user to configure various parts of the Tethered Flight Arena to match the physical setup as well as determine the frame rate and gain settings. Once set it is unlikely that these settings should be changed. 

The current Settings_Profile can be swapped or edited via the Settings_Manager object located in the MainMenu scene. By selecting this object from the scene hierarchy menu on the left, the inspector on the right will display the Settings_Manager script. The Settings_Profile can then be manipulated directly or replaced by a different Settings_Profile. All of the Settings_Profiles within the project should be located in the following folder.

Assets > _ScriptableObjects > Profiles

![SettingsManager](/images/image3.png#centered)

> :ToCPrevNext