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

# Tethered Flight Arena - User Manual

# Workflow

Starting a Sequence

In order to start a sequence, first make sure that you have loaded the “MainMenu” Scene. It is important to start from this scene as it creates vital managers which control most of what happens within the software. 

The MainMenu Scene can be found and loaded by navigating to the Scenes folder and double clicking on the scene.

![MainMenuScene](/images/image12.png#centered)

To choose the sequence we wish to run, click on the Sequence_Manager, in the hierarchy to your left.

![Heirarchy](/images/image10.png#centered)

Once you have done that, the Inspector on your right should show you the following script, in the Sequence_Manager script you should now remove the sequences you do not what and add the ones which you would like to use.

![SequenceMangaer](/images/image4.png#centered)

Then click the play button at the top of your screen.

![SequenceMangaer](/images/image13.png#centered)

> :ToCPrevNext