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

# Tethered Flight Arena / CAVE

This wiki will document how to make use of the Tethered Flight Arena (CAVE) Software built on <abbr title="A commonly used game development software which allows users to create virtual environments and manipulate them with scripts written in the C# programming language.">Unity</abbr>, using <abbr title="An open source software tool that utilises markerless pose estimation powered by machine learning. Using this software we train a model that can be used by DeepLabCut-Live to track several points on the tethered animal’s body in real-time.">DeepLabCut</abbr> for pose-estimation. Also included are instructions for FlyFly, the open-loop stimulus software.

## Table of Contents

> :Collapse label=CAVE - User Manual
>
> [Settings](/docs/usermanual/settings)
>
> [Workflow](/docs/usermanual/workflow)
>
> [Data Colletion](/docs/usermanual/datacollection)
>
> [Scriptable Objects](/docs/usermanual/scriptableobjects)
>
> [OOI Managgement](/docs/usermanual/ooimanagement)

> :Collapse label=CAVE - System Design
>
> [Terminology](/docs/systemdesign/terminology)
>
> [System Overview](/docs/systemdesign/systemoverview)
>
> [User Experience](/docs/systemdesign/userexperience)
>
> [Mechanics](/docs/systemdesign/mechanics)
>
> [Stimuli](/docs/systemdesign/stimuli)
>
> [Interface](/docs/systemdesign/interface)
>
> [Extra Information](/docs/systemdesign/extrainformation)

> :Collapse label=TFA - Flyfly
>
> [Installation](/docs/flyfly/installation)
>
> [Window Menus](/docs/flyfly/windowmenus)
>
> [Stimuli](/docs/flyfly/stimuli)

> :Collapse label=Hoverfly Motion Vision Lab
>
> [About Us](/docs/About)
>
> [Papers](/docs/Papers)
>
> [Videos](/docs/Videos)

> :ToCPrevNext

<iframe style="border-radius: 10px;" height="620" data-tweet-url="https://twitter.com/HoverflyLab" src="data:text/html;data-theme=%22dark%22;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/HoverflyLab%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20HoverflyLab%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>