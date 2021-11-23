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
