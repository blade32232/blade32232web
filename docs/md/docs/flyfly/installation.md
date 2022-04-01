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

# INSTRUCTIONS FOR INSTALLING FLYFLY
<hr>

**Note:**
FlyFly uses the software package PsychToolbox to present stimuli on-screen and to manage precise timing of screen frames. The makers of PsychToolbox strongly advise against using their software on Mac OSX, and seem to be only luke-warm in endorsing the use of Windows. They strongly recommend running PsychToolbox on Ubuntu, and consequently we use Ubuntu for all our stimulus computer installations of FlyFly.

This manual is for installing FlyFly on a computer that is NOT a stimulus computer, i.e. it will NOT be used for presenting stimuli during experiments. Examples of non-stimuli computer usage may be that you want to run FlyFly simply to see what the stimuli look like, or because you want to do software development on FlyFly itself. If you want to install FlyFly on a stimulus computer (which should therefore be dual-boot Ubuntu with some other operating system), please instead consult the document “User manual for setting up a stimulus computer for running FlyFly at high temporal resolution” (on the Google Drive as “user_manualdemiv3.pdf”).

## INSTALL MATLAB 
Follow normal procedure to install MATLAB. 
- FlyFly will work with MATLAB 2015a on Windows and this version is recommended.
- FlyFly is known not to work with MATLAB 2018a (at least on 64-bit Windows 10).
- (For developers) Deselect all optional toolboxes when downloading, as FlyFly is intended to run with core MATLAB only.

## INSTALL SUBVERSION
Subversion is required by Psychtoolbox for its installation. It may be possible to bypass this requirement (see Psychtoolbox documentation), but we have not yet attempted to do this.
Either 
- Download and run an SVN installer (Psychtoolbox recommend SlikSVN, https://sliksvn.com/download/), or use the command-line SVN client from Apache 
- Download binaries only, e.g. from https://www.visualsvn.com/downloads/
- Save the binary files to a suitable location, and unzip them
- Modify the Windows System Path to include the bin subfolder inside the folder where they are stored. 

## INSTALL PSYCHTOOLBOX
- The best approach is to visit the Psychtoolbox website for the latest download, as well as installation instructions (http://psychtoolbox.org/).
- Remember to start MATLAB as an administrator before running DownloadPsychtoolbox.
- In general, installation will require downloading a file named DownloadPsychtoolbox.m, and running this file in MATLAB. The script will then download all required components via SVN, install them and modify the MATLAB search path. 
- The installation process churns out a lot of text onto the MATLAB console window. Check the text carefully for error messages (they will not always be visually obvious), as there are many things that can go wrong during PsychToolbox installation, and their error messages generally give you instructions on how to fix problems that occur.

## INSTALL FLYFLY
- Download the latest version from https://hoverflyvision.weebly.com/software.html, and unzip the file into an appropriate location (which may as well be under C:\Applications in the case of a Flinders lab-imaged machine). 
- Set the active directory in MATLAB to the top FlyFly folder, and test the installation by entering *flyfly* at the MATLAB prompt. 



