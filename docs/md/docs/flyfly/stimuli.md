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
 img[src*="#righted"] {
    float: right;
    margin-bottom:15px;
    margin-left:15px;
    width: 30%;
    display:block;
 }
  img[src*="#sideright"] {
    margin-bottom:15px;
    margin-left:15px;
    float: right;
    width: 48%;
    display:block;
 }
  img[src*="#sideleft"] {
    margin-bottom:15px;
    margin-right:15px;
    float: left;
    width: 48%;
    /* display:block; */
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

# STIMULI

In the main window you will see a list of the Available stimuli. You choose what stimuli to use by clicking on their name in the left hand column. They are then added into the right-hand column (Chosen stimuli). You can change the name of any stimulus by using the Rename button. You can change the order of your chosen stimuli by using the Move Up and Move Down buttons. In addition, if you have a very complicated stimulus, you can use the Copy button, which copies all parameter settings. This, together with Rename, can be very useful.

![mainwindow](/images/flyfly/image5.png#centered)

## RECT TARGET

![Rect Target](/images/flyfly/image3.png#centered)

The Rect Target stimulus displays a rectangular target. Its size is given by Height and Width (in pixels). Its starting position is given by Xpos and Ypos. This is given in pixels and refers to the center of the target.

If you want the target to move, you specify its Velocity in pixels/s. This can be in either positive or negative values. Negative velocities move in the opposite direction to positive velocities.

For moving targets you specify its Direction in degrees, where 0 is right, 90 up, 180 left and 270 down.

You can change the Brightness of the target on a scale from 0 (black) to 255 (white).

Time, etc, have been described above.

## IMAGE TARGET

![Image Target](/images/flyfly/image14.png#centered)

This stimulus displays a static or moving image on the screen. An example of its use is size tuning for TSDNs using circular targets, from 1 pixel to full screen height.
 
The Height and Width sets the size, in pixels, of the image being displayed, however the aspect ratio of the original image is always maintained. If both the height and width are set to 0 the image is the default size (ie the size of the original image). If the height is >0 and the width is 0, the image is set to the height entered while the width is determined by the original aspect ratio of the image. Conversely, if the width is >0 and the height is 0, the image is set to the width entered while the height is determined by the original aspect ratio of the image.
When both the height and width are >0, the image is set to whichever setting is lower and the other setting is determined by the original aspect ratio of the image. Negative values will cause a crash.
 
The Xpos and Ypos gives the starting location of the middle of the image being displayed. If you want an image to start off the screen you need to compensate for its size in determining the start position. Both negative values and values outside the screen dimensions work perfectly well. Note - Xpos = 0 denotes the left-hand side of the screen and Ypos = 0 denotes the top of the screen.
 
Velocity sets the speed, in pixels per second, at which the image moves across the screen. Both positive and negative velocities work well, with negative velocities moving in the opposite direction to positive velocities, set at 0 the image is stationary. Ensure you check that the velocity being used is not too quick for the refresh rate of the monitor the stimulus is displayed on. Small images being displayed at fast speeds may not be presented as a smooth movement across the screen but instead may appear as if the image is jumping positions between frames. 
 
The Direction sets the heading in degrees, in which the image moves across the screen. Note - 0 = right, 90 = down, 270 = up and 180 = left.
 
The Contrast is scaled between -1 and 1, with number close to 1 being darker and numbers close to -1 being lighter.
 
You need to use the Layer settings to specify the path to the image that you want to display. This stimulus often defaults to the default image (especially if trying to only
show a subset of trials), so double and triple check that the image you chose is actually shown on the screen, in all trials.

## 3D TARGET

![3D Target](/images/flyfly/image7.png#centered)

This stimulus is a 3D counterpart to “Rect Target”. It displays a spherical object moving
through 3-dimensional space in a straight line between two specified points.
An important feature that needs to be kept in mind is that 3D Target does not work like the
rest of FlyFly. Other stimuli use the Time field to determine the number of frames
that should be displayed per trial. In the case of 3D Target, we specify the start and end
positions, plus the velocity of movement, and this combined information determines the
duration of the stimulus. Note that the Time field is still displayed in the 3D Target parameter grid, and can be edited, but supplying a value here will have no effect.

Once a start and end position and a velocity have been specified, the target will move in a straight line from the start, at the desired velocity, until it reaches the end. See next page for an illustration of how to specify start and end position. Velocity is measured in cm/s.

If you specify a value n for Target Noise, the target position in every frame will deviate from its “correct” position, by a random amount between 0 and n cm in each of the x, y and z directions. This can be used to make the target follow a more “jittery” path.

Specification of the start and end positions is done by providing an azimuth and elevation value, as shown in the diagram below.
The target is located at the position of the black sphere. In order to “get there”, we provide three steps that need to be carried out, which are represented by azimuth, elevation and distance.
The azimuth angle is the degree of turning measured in the XZ plane, which you can think of as the “yaw angle” by which you need to turn your head to look in the right direction. The azimuth angle ⍺ is shown in red. The elevation angle is the “pitch angle” by which you need to lift (or turn down) your head after performing the yaw turn, and is shown as the angle ε in blue. Finally, you need to specify distance, which in Target 3D is measured as the Z “depth” value, i.e. the projection of the target’s position vector onto the Z axis (NOT the straight-line distance from the origin to the target). Distance is shown as d (in green). Distances are measured in centimetres.

![3D Target](/images/flyfly/image6.png#centered)

## SINE GRATING

![Sinegrating](/images/flyfly/image13.png#righted)

This stimulus displays a moving sinusoidal grating. The stimulus settings allow the contrast of the sine-wave to be varied across Wavelength (in pixels), Direction of movement (in degrees), Temporal frequency (in Hz) and Contrast (between 0 and 1). 

Direction
0 = right
90 = up
180 = left
270 = down
-90 = down

Contrast 
1 = full contrast, using the full range of the screen from white to black
0 = compressed completely towards the mean value of the screen (in our case 127)

The portion of the screen the sine wave occupies is controlled by manipulating “PatchHeight” and “patchWidth” (both in pixels). The image below depicts a small sinusoidal grating in the top left corner has a patch height of 200 and patch width of 200 pixels, whereas the one next to it has patch height and width of 1000 and 1200 pixels.

<p style="clear: both;">
<br>

![Sinegrating2](/images/flyfly/image16.png#sideleft)

![Sinegrating3](/images/flyfly/image22.png#sideright)

<p style="clear: both;">

Sine grating positioning can also be varied around the x and y axis of the screen by using the “Patch Xpos” and “Patch Ypos” settings, both in pixels. The position refers to the center of the patch.

**NOTE:** that the maximum temporal frequency should be given by the temporal resolution of the screen. For example, if you run your stimuli at 160 Hz, don’t use a temporal frequency above 40 Hz.

## COLOR FILL

This stimulus has previously been used to set the background color between trials, but has now been replaced with the Background Color function.

Color fill has a unique bug/feature where it does not switch off like other stim do. Stimulus duration has no effect unless the duration is longer than the duration of all other layers. Once it switches on it will only switch off when the entire sequence of trials is finished.

Also make sure color fill is on the top of your layer manager, otherwise it can occlude your other stimuli.

![Colour Fill](/images/flyfly/image10.png#centered)

## ROLLING IMAGE

![Rolling Image1](/images/flyfly/image19.png#sideright)

This stimulus is very buggy, so please double and triple check every new stimulus, and every single parameter before trusting it!!!!!

This stimulus displays an image sliding across the screen. The image is set using the Image Path in Layer settings. In layer settings you can also generate an image with random black and white bars by clicking “Generate image”. If you want the bars to be horizontal, click “Horizontal Bars”.

If using a DLP projector, ensure that DLP mode is chosen.

Keep Offset means that the position of the image is retained between trials.


<p style="clear: both;">

![Rolling Image2](/images/flyfly/image30.png#sideleft)

The main window of Rolling Image gives you control of the Speed (pixels/s, negative values give you motion in the opposite direction), Direction (degrees) and position of the stimulus (Xpos and Ypos, both in pixels).

Direction can only have values between -90 (down) and 90 (up), other values will make FlyFly crash.

NOTE that if you use Direction 0, Xpos and Ypos refers to the center of the image. However, if you rotate the motion and use e.g. Direction 90, the location of the stimulus ALSO changes, and rotates around its top left corner. This has caused severe headaches in the past so ensure that you check your stimuli carefully!

Offset refers to what portion of the image is shown at the start. If 0, it starts from the left hand side of the image. If 100, it starts displaying the image 100 pixels in. This is overruled if using Keep offset from Layer settings.

<p style="clear: both;">

Contrast 
1 = full contrast, using the full range of the screen 
0 = compressed completely towards the mean value of the screen (in our case 127)

## ROLLING IMAGE MII
**This stimulus is very buggy, so please double and triple check every new stimulus, and every single parameter before trusting it!!!!!**

![Rolling Image MII](/images/flyfly/image34.png#sideleft)

This stimulus displays an image, sliding across the screen. The Direction can only have values between -90 (down) and 90 (up), other values will make FlyFly crash. 0 is motion to the right. You have to combine the Direction with the motion (given in Layer settings) to get the image to move to the left.

The Height and Width tell you how  much of the image is shown. If the values are larger than the image, it will simply ignore what you entered.

In theory, the Xpos and the Ypos give the location of the center of the image, but in practice, this is where most problems arise. For example, if you use a Direction of -90 or 90, the image will rotate around the top left corner of the image, and actually switch where it is located on the screen. In addition, if you change the Height and the Width of the image, this also affects the position of the image on the screen, in what appears to be random ways.

<p style="clear: both;">

The Contrast is scaled from 0 to 1, but you can enter values outside of this range without the software crashing. It simply performs some apparently self invented calculations.

You need to use the Layer settings to specify the path to the image that you want to display. This stimulus often defaults to the default image (especially if trying to only show a subset of trials), so double and triple check that the image you chose is actually shown on the screen, in all trials.

In Layer settings you can make the image move in some pretty cool ways, which is what the stimulus was designed for. Image offset specifies what part of the image is displayed. For example, if I only show 200x200 pixels of an image that is 2048x1240 large, and then add Image offset, the location of the patch itself will be stationary on the screen, but within the patch the pattern will move.

Similarly, Xpos and Ypos (patch movement) can be used to specify the motion of the patch itself. It can move over a stationary image, or an image that has its own Image offset. For all 3 options (Image offset, Xpos and Ypos) n specifies each frame. Try different combinations, and you will soon get the idea.

The last 2 options in Layer settings give you the opportunity to generate a random image with vertical (Generate image) or Horizontal bars. The bars have random brightness of 0 (black) or 255 (white). The values given specifies the width, or the height of the bars, respectively, in pixels.

![Rolling Image MII](/images/flyfly/image35.png#centered)

## STARFIELD 2: 3D Space

![Starfield](/images/flyfly/image20.png#centered)

The Starfield represents a 3-dimensional space in which a number of black spheres are suspended. The spheres can move together in unison, simulating self-motion on the part of the fly. The Starfield therefore provides a way to simulate optic flow in 3 dimensions. 

The Starfield stimulus maintains an internal representation of the underlying modelled 3-D space and the positions of the spheres within that space. Nominally, the space is modelled as a cuboid with sides 4m in length in each of the x, y and z directions (but see “Note on movements at high velocities” below). 

Spheres are displayed on-screen as flat black circles. All spheres are modelled as being the same size (as specified by the “Dot size” parameter, given in cm), and are scattered randomly through 3-D space, so that some are closer to the viewer than others. 

Distance from the viewer is visually conveyed so that size is inversely proportional to distance away from the viewer.


The Starfield can be made to move in 3-D space, with all spheres moving together. The view on the screen is the projection, onto 2 dimensions, of how the underlying 3-D space would appear to an idealized viewer located at the position of the fly’s head. 

“Dot size” specifies the size of the sphere in the underlying modelled 3-D space, given in cm. 
This number is NOT directly interpretable as numbers of pixels on the screen, or centimetres on the screen. Instead, the number of pixels occupied by a sphere will increase as the sphere moves closer to the fly. 

“Dot density” refers to the density of the spheres in the underlying space. Because the space is finite, increasing the density has the effect of increasing the overall number of spheres in the space, and hence the number of circles displayed on-screen. Density is proportional to the probability that a sphere will be found within a certain 3D volume. If you enter 1, this means a density of 100/m3.

“Sideslip”, “Lift” and “Thrust” allow the user to specify translational movements of the starfield, in respectively the left-right, up-down and forward-backward directions in relation to the screen. These values are specified as velocity of movement, in units of cm/s. In particular, therefore, these values do NOT give the amount of movement performed during a trial; instead, the amount of movement is determined by the velocity in combination with the duration of the trial. Also, this is the velocity of motion of the underlying simulated 3D space, and does not refer to centimetres on the screen.

“Yaw”, “Pitch” and “Roll” are used to specify rotational movements of the starfield, as angular velocities with units of degrees/s. It is important to note that rotations cannot be combined in Starfield, as doing so will not result in the correct movement. It is fine to combine translations with either rotations or other translations.

“Background noise” adds random noise to each frame of the trial. For a value of 1, a small increment is added to or subtracted from the amount of motion to be carried out in that frame, up to 100% of its original magnitude. For a value of 2, the increment can be up to 200% of the original value, etc.

By default, when a stimulus consists of multiple trials, a new Starfield is initialized at the start of each trial. Sometimes, it is desirable to create a longer trajectory over time of the same Starfield, by using a sequence of trials with a different motion in each trial. In such cases, it is necessary to keep the same Starfield across all trials. In order to achieve this, the “Retain into next Trial” parameter needs to be set to 1 for every trial that retains the starfield from the previous trial (in the position where it ended up at the end of the trial).

Note on movements at high velocities:
Because the 3-D space is finite, and because it can be moved relative to the viewer, there exists a risk of carrying out a movement that causes the stimulus to “run over the edge” of the space. Note that in this event, the stimulus will “crash” completely. 

There are mechanisms in the code that attempt to avoid this situation: when Starfield is asked to perform a motion that shifts the current viewpoint beyond the boundaries of the space, the spheres behind the current viewpoint are “moved across” to appear in front of the viewpoint. In this way, space is continually “rolled into place” in front of the viewer.

However, there are two side effects of this mechanism: (i) if the Starfield moves along a prolonged trajectory in one direction, the 3-D space will continually “repeat itself”, as the same points are repeatedly rolled into place again and again. Space is effectively made circular, and it is possible that the cyclic nature of the stimulus can have unintended effects on the results; (ii) when the velocity of movement approaches or exceeds the size of the cuboid, i.e. for velocities close to 200 cm/s or more, this mechanism will fail anyway.

If a Starfield stimulus is required to translate at high velocities (in excess of 150 cm/s), it is recommended that the user should perform a “dry run” of the stimulus first before starting a recording. For lower velocities, the possible effect of presenting a repeating trajectory through a cyclic space, as discussed above, should be considered before using the stimulus.

## SINE GRATING RF

![Sinegrating RF](/images/flyfly/image33.png#sideleft)

This stimulus was designed for mapping the receptive field for responses to sinusoidal gratings.

Wavelength in pixels
Temporal Freq in Hz

The Starting Direction sets the first direction, in degrees, in which the sine grating moves, while the number of Steps determines how many directions are shown. For example, if Steps is set to 8, Starting Direction to 0 and Time to 800, the sine grating in the patch will be shown in 8 directions (0, 315, 270, 225, 180, 135, 90 and 45) for 100 frames each. Note - 0 = right, 90 = down, 270 = up and 180 = left. The default setting presents the directions in a clockwise order, however this can be changed in Layer settings to a counter clockwise order.
 
The size of sine grating patch is given by the PatchHeight and the patchWidth (in pixels) and the location in Patch Xpos and Patch Ypos (in pixels, referring to the centre of the sine grating patch). Use multiple trials each with a unique position on the screen to cover the entire screen of the portion of the screen to be mapped. The Contrast of the sine grating is given on a scale from 0 (the entire patch is grey) to 1 (the darkest point of the bar is black and the lightest point between the bars is white).

<p style="clear: both;">
 
## APERTURE  

![Sinegrating RF](/images/flyfly/image25.png#sideleft)

This stimulus is designed to be used as Layer 2, allowing you to either show or cover a section of the stimulus in Layer 1.

Transp Surround is the transparency of the area surrounding the aperture, it is scaled between 0 and 255, with 0 being completely transparent and 255 solid black. Likewise, Transp Hole is the transparency of the aperture also scaled from 0 to 255, however in this instance 255 is solid white. In this stimulus you are unable to change the brightness of either the surround or the hole, whereas in Dual Aperture both the brightness and the transparency can be adjusted.
 
 The size of the aperture is given by the Width and the Height (in pixels) and the location by Xpos and Ypos (in pixels, referring to the centre of the hole). Note -  Xpos = 0 denotes the left-hand side of the screen and Ypos = 0 denotes the top of the screen.
 
The default setting is for the aperture to be an ellipse, however this can be changed in Layer settings to a rectangle.

<p style="clear: both;">

**WARNING: Using Aperture in a multiple screen setup is known to cause heavy frame drops after a non specified amount of time. This is possibly due to Aperture not releasing the memory it uses each sequence, therefore causing memory usage to skyrocket.**

## FLICKER RECT

![Flicker Rect](/images/flyfly/image36.png#sideright)

This stimulus displays a flickering rectangle that can be placed anywhere on the screen. The size of the rectangle is given by the Height and the Width (in pixels) and the location in Xpos and Ypos (in pixels, referring to the centre of the rectangle). The rectangle flickers between 2 brightness levels, which are given by Brightness 1 and Brightness 2. Note that these are given on a scale from 0 (black) to 255 (white). The time each brightness level is displayed, before switching to the other brightness level, is given by FramesPerFlicker.

This stimulus has useful Layer settings, which allows for control of the movement of the flickering rectangle. By adding a function to the Offset X function or the Offset Y function the rectangle will move across the screen in the x, and y-plane, respectively. In the function, n refers to every frame. As you can see below, you can be very creative when describing the movements.

<p style="clear: both;">

![Flicker Rect](/images/flyfly/image37.png#centered)

## MOUSE TARGET

This stimulus serves no practical purpose as is, and will not be of much use in an experiment. However, it is potentially very useful for developers of new FlyFly stimuli, as it provides an example of how to obtain and use mouse and keyboard input. Hence, it has been included in the list of available stimuli.

## GRID

The grid stimulus can be used to display a grid with the pixel values on the screen. This can be very useful when troubleshooting, but probably has little value during actual experiments.

![Grid1](/images/flyfly/image39.png#centered)

![Grid2](/images/flyfly/image38.png#centered)

## .MAT SEQUENCE

Note that unlike the other stimuli, .Mat sequence is incompatible with layers. This means that you cannot combine a .Mat sequence stimulus with an aperture overlay, for example.
 
This stimulus is the most general one in FlyFly, in the sense that it allows any sequence of pixel patterns whatsoever to be displayed (as long as it is in grayscale); but this sequence needs to be created appropriately first, and the creation process occurs outside of FlyFly.

The data for the stimulus is stored as a .mat file, containing a single 3-dimensional MATLAB matrix. The name of the 3D matrix must be “out”. (The name of the file containing it can be anything.) The third dimension of the matrix defines time, and the first and second dimensions define the Y and X dimensions of each frame, in pixels. So a “slice” through the matrix at one index of the third dimension, 
out(:, :, n)
represents a single image to be displayed on the screen. The data values range between 0.0 and 1.0, and represent the colour (shade of gray) to be displayed at each pixel.

One particular “use case” for the .Mat Sequence is that it can be used to display a movie. The script “convert” (in the “Stimuli/MatSequence” subfolder) may be useful in helping to achieve this, although it has only been tested on a few movie files. It takes in two arguments, “infile” and “outfile”, converts the movie in “infile” into the matrix format that is required for this stimulus, and saves the matrix to “outfile”. If the movie is in colour, it is converted to black and white.

NOTE: It really does not like larger videos. More like, in this format, video file sizes get extremely big extremely quickly. For example a 1000x1000x825 (5s long video, not exactly a super long video) is > 100mb in size, and flyfly pauses for about 30 seconds after hitting run before playing the stimulus, while it loads it.

Interestingly there is the option to go fullscreen, which just expands your video to the full dimensions of the screen. Might be worth looking at that one day, so we can load smaller videos (XY size wise) and then expand them in FlyFly to reduce the file size and load time

## Parameter saving structure
Before FlyFly executes a stimulus, it saves all parameters related to that stimulus to disk.
The file is automatically named so as to uniquely identify the particular stimulus. The file name has the structure "Stimulus Name-Date Starting Time.mat",
Where "Starting Time" is equal to the parameter timeStart described below.

The parameters are saved as a .mat file, containing the following Matlab variables:
- timeStart - string representing the time at the start of the saving of the parameter file  (system timestamp from the FlyFly machine), to the nearest second (Note: this is not the time of the start of stimulus presentation!)
- timeStartPrecision - the same as timeStart, but represented as a length-6 array with date broken down into year, month, day, hour, minute, seconds (to subsecond precision)
- timeFinished - string representing the time when the stimulus ended
- message - string: either 'NOTE: STIMULUS PLAYED TO THE END', when the stimulus was successfully completed, or 'NOTE: THIS RUN WAS ABORTED' when the stimulus was terminated by FlyFly for any reason. (Parameters are saved before and after the stimulus is run. The “aborted” message is saved before running, and the “to the end” message is save after running.)
- stimulus - the core details of the actual stimulus that was specified(discussed in more detail below)
- debugData - additional data describing the stimulus and the way it executed (discussed in more detail below)

***stimulus***

The stimulus struct contains two fields: name, which is the name of the stimulus, and layers, which is a struct array describing each of the layers that the stimulus consists of. Each item in layers has the following structure:
name - the name of the layer
fcnPrep, fcnDraw - the names of the Matlab functions used to create and render the stimulus
impulse - whether the stimulus was run in impulse mode or not
Param - a struct array of length equal to the number of trials, containing the actual parameter values specified for each trial
settings - a struct array of the same length as Param, containing the corresponding Layer Settings for each trial.

***debugData***

This variable contains mostly information that is useful for developers of FlyFly or FlyFly stimuli. However, it does also contain information that can be used to examine frame timing, including the numbers of frames dropped during stimulus presentation. It contains the following variables:
- stimulus - contains the same information as the stimulus variable described above. The format of this one is probably more difficult to work with.
- screenData - information about the properties of the screen
- userSettings - miscellaneous settings used by FlyFly
- trialSubset - a list of the trials that were selected to run
- dataLog - information about frame timing (discussed in more detail below)

The dataLog is a struct array containing timing information for every frame that was scheduled to run (whether it was actually displayed, or was skipped/dropped). The size of dataLog is TxF, where T = the number of trials, and F = the maximum number of frames scheduled in any of the trials. Each item in dataLog corresponds to a single frame in each trial, and has the following structure:
- frameDelay - zero if the frame was not dropped; if non-zero, the value is the number of frames that have been dropped (Note: this is only a rough estimate. Nevertheless if frameDelay is zero, it is safe to assume no frames were dropped.)
- missed - a value returned by Screen(Flip) in PsychToolbox. A negative value indicates that the deadline for displaying the frame was met, while a positive value indicates that the deadline was missed (and hence that a number of frames were dropped)
- time - the amount of time used in rendering the frame (or attempting to render it, if frames were dropped)
- frames - a Lx1 array, where L = (number of layers + 1). The value of frames for each layer is the number (in order) of the frame for that trial, for that layer. The last element of frames gives the trigger value displayed for the photodiode trigger.

**Note on the interpretation of timeStart**
It is convenient (and in many cases it may be accurate enough) to treat timeStart as if it represents the onset time of the stimulus, but as described above, this is not really correct. The value of timeStart is determined just before the parameter file is saved (with the stimulus commencing immediately after saving). Hence the value of timeStart is always earlier than the actual stimulus onset time, and deviates from it by the amount of time required to save the parameters file. The size of this deviation will be system-specific, and will increase according to the number of trials and the number of layers. Also keep in mind that it is possible for a particular kind of stimulus to include arbitrary additional information, as determined by the developer of the stimulus, into the parameters file, so that the time deviation is not predictable in principle. Even when the number of trials is small and no additional information is included, users of FlyFly and analysts of the data should treat timeStart as an approximation of the stimulus start time, and should not rely on it for high precision. 

For example, when performing data merging using FlyFlyDataMerger, the user is required to provide a time offset between “data block time” and “FlyFly time”, where the latter is taken from timeStart. When one stimulus in a recording has a large number of trials (on the order of hundreds), this time offset will not be constant, but will vary substantially over the course of a recording, due to variations in the numbers of trials in various stimuli, and in such cases it may not be possible to merge all data from the recording in a single pass with DataMerger. The workaround in this case is to separate out the longer stimuli and merge them separately.