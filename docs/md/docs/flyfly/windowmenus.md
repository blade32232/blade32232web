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

# Window Menus

<hr>

## Main Window

After starting FlyFly this is what you will see. 

Under File you can open a saved file, or save your current file. NOTE that you have to save from this main window.

![FirstWindow](/images/flyfly/image5.png#centered)

## SETTINGS WINDOW
Found under “Tools” in the Main window

### Screen
We usually run our stimulus computer with at least 2 screens. One is a high resolution display screen (typically Asus or similar), and one is a low-resolution control screen.  At the bottom of the section called “Screen” FlyFly tells you what screens are available (in this case 0 and 1). Enter one of these numbers in the box called “Number” and press “Test Init”. This will initialize the screen specified in “Number” for a few seconds, and allow you to make sure that the stimulus is displayed where you want it to be. You can choose Full screen mode or partial screen mode, and if using Partial you can specify the size and width (in pixels) of the screen. 

If you are running a three screen setup and you are using three 2650x1440 screens rotated 90 degrees the height of the ‘screen’ should be 4320 and width should be 2560*. Set the fly position exactly in the centre of the screen, use the set fly position button to get an approximate position and then fine tune the position. Make sure the distance from the monitor is correct and that the Monitor height is set based on the width of the screen and not the height, i.e., if you are using three ASUS pg279qe rotated 90 degrees the height of the monitor will be 60cm.

<sup>*Originally we used 4319 by 2559 but as of 15/03/2022 it was noticed this causes screen tearing with high frequency stimulus as ubuntu doesn't give full control to flyfly on a partial screen. Instead use 4320 by 2560 or full screen settings in flyfly.</sup>

DLP mode should be used if you are using a DLP projector with the color wheel removed. In this case the R-G-B screens are offset slightly from each other, so PsychToolbox thinks that the stimulus is running at e.g. 120 Hz, but you actually generate greyscale 360 Hz motion from your projector. This feature has not been actively used since 2009, so could be buggy.

### Trigger
This section is used to separate a small part of the screen from the rest of the stimulus. Instead of displaying the stimulus, the trigger switches between black (OFF) and white (ON). This allows you to attach a photodiode to the screen, and record exactly when the stimulus was on, for high precision offline analysis. The input boxes specify where the trigger is placed, and its size (in pixels). It usually needs some tweaking, as you want it as small as possible so as not to interfere with your experiments, but large enough to give a reliable signal. 

Note that the trigger is ON during pre-stimulus time, time, and post-stimulus time (see more on stimuli below), but OFF during pause. 

Note that when the trigger is ON, on each frame it fluctuates between white and slightly grey. This can be very useful for troubleshooting precise timing, dropped frame issues, or similar.

### Fly position
This specifies where the fly is located relative to the screen. Unfortunately, at the moment it is not used properly, so all perspective distorted stimuli assume that the fly is located centered in the screen (i.e. “Position” and “Eye focus” is in the screen’s center), so these values are currently not used. However, it is important that you give the “Distance from monitor” and “Monitor height” as this is used by the perspective distorted stimuli.

### Data saving
Specify the folder where you want the parameter files to be saved to by clicking on “Change”. Ensure that “Enable Saving Data” is ticked.

![mainSettings](/images/flyfly/image15.png#centered)

## STIMULUS WINDOW

Once you have selected one or more stimuli from the main window and clicked on Next (or double-clicked on the name of one of the stimuli), the Stimulus Window will appear. The appearance of the window is as below, where we have created five trials of the Image Target stimulus as an example. Each of the sections identified with numbers in red will be discussed below (roughly in order of importance). Note that this is for version 3.1. See further down for important change in version 3.2.

![mainSettings](/images/flyfly/image27.png#centered)

1. #### Stimulus Parameters

   This area is where the user sets the values of all the parameters that determine what exactly the presented stimuli will look like. The parameters are organized in a grid, where each column represents a trial, and each row represents a different aspect of the stimulus (a parameter). 

   Trials are executed sequentially from left to right. The duration of each trial, and whether or not there are pauses between or around trials, are set by the common timing parameters (see below).

   In each trial, more than one kind of visual stimulus can be displayed on the screen simultaneously by the use of additional layers which run in parallel to each other. Each layer will share the same division into sequential trials.

   For information on managing trials, see “Trial Controls” (below). For information on managing layers, see “Layer Controls” and “Layer Manager” (below).

   Stimulus-Specific Parameters
   Each stimulus type has a number of parameters that control how it appears on the screen. For example, in the ImageTarget stimulus shown here, we can control the size of the image displayed on the screen by manipulating the Width or Height parameters. Stimulus-specific parameters are discussed in depth under each of the later sections in this document dedicated to the individual stimulus types.

   Common Timing Parameters
   In addition to the stimulus-specific parameters, there are four parameters in the last four rows of the grid that are common to every stimulus type. These parameters govern the timing of trials. They are given in frames rather than seconds, to avoid rounding off errors.
   Time - The number of frames the stimulus is displayed on the screen for. 
   PauseTime - The number of frames between trials. The photodiode trigger will be set to off during the pause time.
   PreStimTime - The number of frames before the stimulus is displayed on the screen. The photodiode trigger is on during PreStimTime.
   PostStimTime - The number of frames after the stimulus is displayed on the screen. The photodiode trigger is on during PostStimTime.
   When multiple layers are used, it is possible to specify different timing parameter values for different layers within the same trial. In this case, FlyFly’s interpretation of these parameters is more complex. See “Layer Manager” for more details.

   Other comments on Parameters
   It is possible to speed up the creation of a stimulus, by preparing the data that goes into the grid using a tool such as a spreadsheet, and copying and pasting data values into FlyFly. The ease with which this can be done depends on the operating system and the spreadsheet tools involved.
   In general, the procedure is to: 
   Copy a block of cells from spreadsheet software
   Place the cursor inside the stimulus parameters grid at the top-left corner where the copy operation needs to be performed
   Press Control-V to copy (note: even on a Mac, the key required is Control-V, not Command-V).
   This process works on Ubuntu when copying data values from a LibreOffice spreadsheet. TODO: windows? 

   On a Mac, this process works for single rows of data, but not blocks spanning several rows, when using MS Excel.
   If you really want to copy blocks of several rows at a time on a Mac, this is possible, but requires:
   saving the data in comma-separated (CSV) format
   opening the file with an appropriate text editor
   copying the block
   pasting into FlyFly (still using Control-V, not Command-V as might be expected).
   However, whether this works or not depends on how the specific text editor handles newline characters. We have not tested a wide range of text editors; TextEdit, XCode and Atom do not work, but MacVim and SublimeText do. We suggest trying this out on your text editor of choice.

   The opposite process, of selecting a block of cells from the parameters grid in FlyFly and copying it to the clipboard using Control-C (or Command-C on Mac), works on all operating systems, and may be convenient when it is required to, for example, save parameter values back into a spreadsheet.

2. #### Layer Settings 
   When you click on the “Layer Settings” button, a new window appears, showing the Layer Settings for the stimulus type you have selected (see example below for Image Target). 

   ![layersettings](/images/flyfly/image24.png#centered)

   This part of the interface is arguably misnamed: a better name may have been “Stimulus Settings”. These settings are conceptually similar to Stimulus Parameters, and functionally they work more or less the same. The main difference is that stimulus parameters are all numerical values: therefore they can be displayed compactly in a grid, and can undergo operations such as interpolation (see “Interpolate” below). Layer settings deal with non-numeric parameters that are of three different types:
   Checkboxes, corresponding to yes/no decisions
   File paths to files located on the computer
   Strings of text
   The example above shows that the Image Target stimulus type has only one setting, namely a path to the file containing the image that will be displayed on the screen. Other stimulus types will have different settings, and these will be described in detail in the sections for the stimulus types. At present, however, most stimulus types have no Layer Settings at all.

   In addition to the settings themselves, the Layer Settings window displays two other controls. There is a drop-down box that is used to select the trial for which the layer settings values apply (for stimulus parameters, this would have corresponded to simply choosing the appropriate column in the grid). 

   In addition, there is a “Global Setting” checkbox. When this is checked, all specified settings values are used for all trials.  If you have specified different settings values for different trials, but checked “Global Setting” on, the value specified for the first trial will be used for all trials. 

   Note – the meaning of “the first trial” is not necessarily the trial specified as “Trial 1” in the Stimulus window, but rather the first trial that is actually run - so if you have specified a trial subset and have set “Global Setting” to on, the layer settings will be taken from the first trial in order in that trial subset (see “Trial Controls” below).

   There is no way to mark only some settings as being global and others as trial-specific. There is also no easy way to use a global value, but override it only on some trials (as could be done for stimulus parameters, with the “Use value” function, see “Interpolate” below). Layer settings are therefore less flexible than stimulus parameters.

3. #### Layer Controls
   There are two Layer Controls, one on either side of the “Layer Settings” button. The “Layer Manager” button opens the Layer Manager window (see “Layer Manager” below), which allows the user to add multiple layers to the stimulus. Once layers have been added, the drop-down box on the left allows the user to switch from one layer to the next, in order to enter the stimulus parameters and layer settings for each layer.

   ![layermanager](/images/flyfly/image2.png#centered)

   Layer manager allows for the user to display multiple stimuli on the screen at the same time. Double click on the stimulus you want to use from the layer templates (displayed on the left) to move it to current layers (displayed on the right). In current layers, stimulus can be moved up or down the list and copied or removed as required.
 
   The stimuli are displayed on the screen from bottom to top, ie the stimulus at the top of the list is displayed as the bottom stimulus and the stimulus at the end of the list is displayed on top of all other layers. For example, if you intended to display a small target on a background image, Rolling Image would need to be at the top of the current layers list and Rect Target at the bottom.
   
   Effect of multiple layers on the timing of stimuli
   When multiple layers are used, it is possible to specify different timing parameter values for different layers within the same trial. In this case, FlyFly’s interpretation of these common timing parameters can be affected by the values entered for other trials.
   Time - Each layer is displayed for the number of frames entered for that layer.
   PauseTime - The longest pause time listed in all the layers is used.
   PreStimTime - The number of frames entered in each layer is the total number of frames displayed before this layer is shown. 
   PostStimTime – Is affected by the timing of all other layers. The layer with the longest combined PreStimTime, Time and PostStimTime overrides the other layers.  
   Manipulation of the timing parameters for each layer can be a useful tool in allowing for stimuli in different layers to be shown before or after another layer. For instance, having different PreStimTime settings for each layer allows for the stimulus in each layer to be shown over a different time course. (need to fix wording here) For example, if you intended to display a small target on a background image, where the background motion began before the target appeared on the screen, the layer containing Rect Target would need to have a longer PreStimTime than the layer containing Rolling Image. Explain figure.

   ![layerexample](/images/flyfly/image23.jpg#centered)

   The layer manager setting allows two or more stimuli to be displayed simultaneously. 

   The figure above shows two stimuli with different Timing parameters described in its Layer Settings table. The Frame Number image represents the combined parameter values of all layers specified, which in this case is Layers 1 and 2 shown beneath it. The On Screen Display shows only the layer’s Time Parameter periods, highlighting whether the layer is displayed in isolation or in combination with other layers on the visual stimulus screen.

4. #### Trial Controls / Sequencer
   The controls on the subpanel entitled “Sequencer” allow the user to add or delete trials. If you enter a number greater than the current number of trials, additional trials are created at the end. Each of the new trials will have its stimulus parameters and layer settings set to the values for the last trial that you currently have. If you enter a number smaller than the current number of trials, then trials will be discarded from the end.

   The “Trial Subset” control allows you to run only some of the trials, or to run them in a different order. Tick the checkbox to activate this function, and use the text box to specify the trials that you wish to run. By default, if you enter nothing, all trials will be executed. But it is possible to run trials in other configurations, as shown in the table below.

   | Trial Subset Text | Effect |
   | --- | ----------- |
   | 1:end  | Run all trials (default) |
   | 3 | Run trial 3 only |
   | 2:5 | Run trials 2 to 5 inclusive |
   | [4, 2] | Run trial 4, followed by trial 2 |
   | 2:end-1 | Run all trials except the first and last trials |
   | 2:3:end | Run trial 2 and every third one thereafter (2,5,8,...). |
   | randperm(end) | Run trials in a different random order every time |

   NOTE ON RANDPERM!
   Make sure that you use datamerger modified on July 30, 2020 (function saveStimulus.m) , if you use randperm, or the data merging will not take the correct order of trials into account, making your analyzed data look random.

   In general, any valid MATLAB expression can be used here. The string “end” will be automatically replaced by the number of trials at run-time, so it is even possible to use expressions that are not allowable in MATLAB, e.g. the “randperm(end)” example in the table.

   Even if the stimulus definition itself has been saved with definitions of all trials, the specific subset used will be correctly saved into the stimulus parameters file at run-time. For example, if you specify a trial subset of [4, 2] as above, then the stimulus definition file will show all trials, but the parameters file saved at run-time will show only two columns in the Params structure, corresponding to trial 4 and 2 respectively.

5. #### Execution Controls 
   This block of controls is used for running the stimulus. The “Run” button is especially convenient for quickly seeing what a stimulus looks like. “Run” will initialize a screen according to the specification in the General Settings, run the stimulus and automatically close the screen at the end.

   However, when actually conducting an experiment, it is preferable to follow a three-step process:
   1. Click on “Init Screen” to initialize the screen at the start of the experiment
   2. Click on “Run” to deliver the stimulus
   3. Repeat until you have done all your desired experiments
   4. Click on “Kill Screen” to close the screen at the end of your experimental session

   The reason for this is to allow the experimenter to perform all other tasks needed before running the stimulus, e.g. entering comment markers into data acquisition software, and also to ensure that the screen will in fact display correctly. The photodiode trigger remains on-screen in the “off” state and will be recorded; this also facilitates identifying the data block in the recorded trace.

   The “Grid” button allows the user to see a grid overlaid on the screen, showing pixel coordinates of various locations on the screen. This may be useful in designing a stimulus, estimating the rough screen location of a receptive field during recording, etc. “Grid” only works after the user has clicked on “Init Screen”. Clicking on the “Clear” button removes the grid again. Note that the grid does NOT remain on-screen once the stimulus starts running; in order to obtain this effect, it is necessary to add a layer containing the “Grid” stimulus (see below). 

6. #### Stimulus Navigation Controls
   If you have defined more than one stimulus for an experimental session, you can navigate from one stimulus to the other via the “Previous” and “Next” buttons, or by directly selecting the stimulus name from the dropdown box. (Note that this is “stimulus” in the sense of a series of layers displayed over a number of trials, rather than the individual stimulus displayed in a particular layer in one trial.)

7. #### “Interpolate” / Editing Controls
   These controls allow the user to more conveniently enter values into the stimulus parameters grid.

   The “Row/Col” boxes provide information only - they display the indexes (row and column) of the cell in the grid where the cursor is currently located. (It is possible to edit these values, but this has no effect.)

   The “lin” and “log” buttons allow interpolation of values. By default, interpolation operates on the current row only, and sets the values in the row to an interpolation between the first and last values in the row. The interpolation is linear if “lin” was selected (adding a constant each time), and logarithmic if “log” was selected (multiplying by a constant each time). If the “All rows” checkbox is ticked on, the interpolation is performed on all rows instead of just the current row.

   The “Use value” button takes the value that is currently under the cursor, and copies it into other cells of the current row. The behaviour of “Use value” is controlled by the text box to its right, in which the user specifies the period of repetition of the value. If the user specifies a value of 2, the value is copied into every second cell both before and after the current cell (so that if the current cell was in column 9, the value in that cell would be copied to columns 1, 3, 5, 7, and 11, 13, …). With the default value of 1, the value under the cursor is copied to all columns in the current row. “Use value” is modified by “All rows” - if the checkbox is selected, the whole current column is copied.

   The “Shuffle” button randomly shuffles the values in the current row into a different order. This button is also modified by “All rows”, so that selecting the checkbox will shuffle values in all rows. It’s important to note that the rows will be shuffled independently, i.e. clicking “Shuffle” in this case does not have the effect of shuffling entire columns (trials) around. To shuffle whole trials at a time, use something like the “randperm(end)” technique in the Sequencer.

   The two remaining buttons “<<” and “>>” shift the entire current column to the left or to the right.

8. #### Screen Info
   When a screen has been initialized, information about the screen is displayed here. The information shown is:
   Screen: The resolution in pixels, and the screen frame rate
   Skipped frames: the number of frames skipped in the last stimulus that was run
   Skipped total: the running total number of frames skipped so far
   Clicking on the “Reset” button sets the Skipped total back to zero 

9. #### Impulse checkbox
   Ticking this checkbox allows a stimulus to be presented as an impulse stimulus. This means that only the first frame of each trial is carried out. After the first frame, all visual components of the stimulus remain stationary on the screen until the trial completes. 

   The impulse checkbox applies at the layer level only, so that it is possible to display one layer that moves continuously while the other is an impulse stimulus.

   If the first frame entails performing a motion, the use of Impulse allows the user to define a “jumping” motion across trials. This is true with, for instance, the Starfield 2 stimulus, in conjunction with setting “Retain into next trial” to 1 (see description of the stimulus type below).

10. #### Stimulus and Layer Name Controls
   These controls allow the user to change the name of the current stimulus (block of layers x trials), as well as the current layer, by clicking on the “Edit” buttons next to the names. This is useful for the sake of documenting the structure of an experiment, for example when there are multiple stimuli with the same default name (taken from the stimulus type you selected when creating the stimulus), or multiple layers with the same default name. Stimulus and layer names are displayed in the stimulus selection dropbox (see “Stimulus Navigation Controls” above”) and the layer selection dropbox (see “Layer Controls” above). Stimulus names are also displayed when you return to the Main window.

11. #### “File” menu
   This menu offers the same options as the File menu from the Main window. However, there are known bugs associated with using the File menu options inside the Stimulus Window, and this menu SHOULD NOT BE USED until these bugs have been fixed. Instead, create and save experiment definition files using the corresponding options from inside the Main window only.

12. #### “Tools” menu
   There are two menu options on this menu. “Settings” is identical to the Settings option in the Main Window. The specific menu item for a stimulus is the “Record Stimulus” option. This allows the user to save all frames rendered in a stimulus, in one of two ways: as an .avi movie, or as a sequence of images. To use it, do the following:
   - Initialize the screen
   - Select Tools > Record Stimulus > [either “AVI movie” or “Image sequence”]
   - Specify the frame rate at which frames will be sampled (use the screen frame rate if you want to capture every frame)
   - In the case of “Image Sequence”, you will be prompted for a name to give to the folder where the images will be saved
   - Finally, you will be prompted to select the location where the .avi movie or folder will be saved
   - Note that the stimulus will not actually be displayed on the screen as well. It will only be saved in the format you have selected.

13. #### “Special” menu
   - DO NOT USE the options in this menu. They are no longer available, and the menu will be removed in a later release.

14. #### M-sequence controls
   M-sequences (or maximum-length sequences) offer a way to generate a pseudo-random sequence of values. In FlyFly, the user can specify that the values of the current row should be taken from an m-sequence containing either 2 or 3 equally spaced values. The two edit boxes on the Stimulus Window define the range of values, in conjunction with the “Base value” box in the subsequent m-sequence dialog window. The left box defines the central value of the m-sequence (we can call it C), and the second box defines the spacing between values (call it s). If “Base value” is equal to 2, a binary m-sequence is generated, and all values will be either C+s or C-s. If “Base value” is equal to 3, the sequence is ternary, and C will also be one of the possible values

   Examples: 
   Set left and right box to 0.5 and 0.5, and Base value to 2, to generate an m-sequence of 0s and 1s.
   Set left box to 0, right box to 1, Base value to 3, to generate a sequence made up of -1, 0 and 1.

   It is possible to specify additional details of the exact m-sequence to use, by modifying the other 3 values in the m-sequence dialog box, but detailing how this works falls outside the scope of this manual. The user should consult appropriate references on how m-sequences work before using them. TODO: eventually we will write something more here. Review/methods paper by Aptekar and Frye?

15. #### Gaussian White Noise controls
   These controls are used to add Gaussian white noise to the values in the currently selected row. FlyFly will generate samples from a Gaussian distribution, with mean of zero and sigma equal to the value you specify in the “Variance” box, and add the sample values to the values that are in the current row. Note that the label “Variance” is actually incorrect; this value represents the sigma or standard deviation. By setting all values in the current row to the value m, it is therefore possible to generate samples from the distribution with sigma as specified and mean equal to m. Alternatively, use different starting values in the current row to sample from distributions with different means. 
   Are they saved?

16. #### Paloma XY generation
   These controls are used only by the “Paloma Target Replication” stimulus and are described in the section for that stimulus. The controls are expected to be removed from FlyFly in a later release.

17. #### High Definition Image
   This button allows for the capture of a high detail image that is needed for calculating an accurate centreline position of the tethered animal.
   #### Version 3.2 change
   ![stimtable](/images/flyfly/image11.png#centered)
   <sub>**Note:** As of version 3.2 the user can set the background color (the screen color when no stimulus is shown) from the stimulus window, on a scale from 0 - 255. The background color is applied by either pressing “Apply” or “Run”, and is saved with the other parameters.</sub>

   #### Version 3.3 change
   ![stimtable2](/images/flyfly/image31.png#centered)
   <sub>**Note:** In version 3.3 init screen launches guvcview for capturing footage. Two new buttons, Highdef Image is used before init screen to capture high definition image from camera to get centreline of the tethered animal, while Centreline Calc* can be used to get said centreline.</sub>






