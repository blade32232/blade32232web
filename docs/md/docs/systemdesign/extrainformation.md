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

# Extra Information
<hr>

## Unique Selling Points
Critically important. What makes your system stand out? How is it different from all other systems?

The combination of using DLC-live to track the behavior of a tethered animal and Unity to interpret this data and use it to drive a stimulus is a unique and robust solution. In theory this combination of software could allow for the behaviour of almost any tetherable animal to be monitored in a completely controlled virtual environment. This should provide researchers with an invaluable tool to study animal behaviour.

## Player Experience and POV
What species is the tethered animal? What is the setting? What is the experience granted to the tethered animal? What stimulus excites the tethered animal for the duration of the experiment?

The tethered animal will be suspended from a tether that will be attached to their back, they will be surrounded on all sides by up to three screens, one in front and one on each side. Depending on the tethered animal they may be able to see all three screens at the same, others might require head movement to see more than one fullscreen and parts of the other two screens.

## Visual Style
What is the “look and feel” of the system? How does this support the desired player’s experience? What concept art or reference art can you show to give the feel of the system?

## Look and feel
Minimalistic yet realistic world
Performance
Visual acuity

## Platform(s), Technology and Scope
PC or mobile? Table or phone? 2D or 3D? Unity or Javascript? How long to make, and how big a team? How long until complete? How long will it take to complete the system? Major risks?

This system is developed for an Ubuntu PC but should work on any system that can run DLC-live and Unity as it is driven by the combination of these products. The development for this project will continue to be ongoing for the foreseeable future with a small development team, it is expected to be usable within 3-6 months (September-December 2021). 





## Core Loops
How do the experimenter’s actions form loops? Why is this effective? How does this support the experiment goals? What emergent results do you expect/hope to see? 
one fly
control stimuli
play a sequence, which each contain several different or identical trials (1-N)
	start and stop of each trial (end point, duration, skip)
next sequence
then control stimuli
play a sequence, which each contain several different or identical trials (1-N)
next sequence
control stimuli

## Internal Systems
What systems are needed to make this product? Which ones are internal (simulation, etc.) and which does the player interact with?

Converting the raw DLC-live data collected from the tethered animal (movements) into player movements within the virtual world (stimulus). 

Allowing the player to Thrust and Yaw dynamically based on wing beat amplitude sum and wing beat amplitude difference. 

Some mechanism to save the input, stimulus, and tethered animals behaviour frame by frame so that the entire experiment can be replayed exactly as it occurred and reanalysed.

A Sequence Manager responsible for playing one or more trials in succession and allowing the user to edit the settings for each individual trail and save the entire sequence. 

A Directory Manager responsible for the storing and loading of files from within the designated file-path.

A Settings Manager responsive for the loading and saving of profiles, as well as distributing these values to where they are needed.



## Interactivity
How are different kinds of interactivity used? (Action/Feedback, ST Cog, LT Cog, Emotional, Social, Cultural) What is the player doing moment-by-moment? How does the player move through the world? How does physics/combat/etc. work? A clear, professional-looking sketch of the primary game UX is helpful.

> :ToCPrevNext