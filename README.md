# SiMON-Says
Simon Says Memory Pattern Game

Simon is a classic memory pattern game that was played in the 90's (if not before) that involves remembering the sequences of color patterns on a game console and then repeating those patterns back by pressing the corresponding buttons on the console.

## How to play
Click Arcade to begin the game and follow the light pattern to see how high of a score you can achieve.

## Why I Made It
I always enjoyed playing Simon although it has been a very long time. I think I'm drawn to simple concepts but want to make them sleek and visually cool and I thought a Simon game would allow me to do just that. The game itself is simple but you can do many things to spruce it up and I plan on continuing to add functionality as I grow as a developer. 

## Wire Frame
![SiMON Wire Frame](https://user-images.githubusercontent.com/88408297/130312162-0e740b83-1e65-46d6-a88b-c5b7156aa57e.png)

## Technologies & Approach
The main functionality of the game encompasses the use of grabbing the four panel elements from the DOM and putting them into an array. The four panels need to "flash" randomly and that random sequence needs to be continously pushed into an array that the user will then have to repeat by clicking the panels in the correct sequence. I researched about using a Promise function but didn't completely understand it so I wanted to stay away from it for the time being. 

A for loop was used in conjunction with the setTimeout function to give a timing sequence so that the panels would not just all flash at once. This was difficult to figure out as it was tricky trying to "delay" functions and there was a lot of trial and error just in getting the panels to flash appropriately. 

A "good" and "bad" sound was added so the user could determine whether the sequence it was correct or not.

## Unsolved Problems
I have a few bugs that really BUGGED me and I believe I would be able to fix with a little more knowledge and refactoring.

1. Disabling the buttons while the sequence is being displayed. 
2. The timer glitches after the first sequence because the next round has already started before the timer runs out. 

## Forthcoming Features

1. 2 Player functionality. 
2. Unique sounds for each button as it is displayed and pressed. 
3. Increase difficultly levels. 
