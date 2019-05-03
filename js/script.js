"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
		"bgsound": "bgsound.mp3"
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {



};

// Define the Characters
const characters = {
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	},
	"e": {
		"Name": "{{player.Name}}",
		"Color": "#5bcaff"
	},
	"c": {
		"Name": "Carve",
		"Color": "#5bcaff"
	}


};




//put vibration later

let script = {
	// The game starts here.
	//finished
	"Start": [
		"scene rgb(0,0,0)", //scn

		"notify Welcome",
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},
		"play music bgsound loop", //msc
		"show begin.png center",
		"Hi {{player.Name}}, Welcome to the Cyber World!",
		"hide begin.png",
		"The time is 21:00. ",
		"show ouac.png center",  //img
		"You are currently on the internet checking out the OUAC website to see if you have received any university acceptances yet.",
		"show popup.png center", //img
		"An email notification pops up as you are typing in your password to view your offers page.",
		"You believe that it is an acceptance, but you are skeptical because your email account has been receiving a lot of scams lately.",
		"hide popup.png", //img
		"hide ouac.png", //img

		{
			"Choice": {
				"Dialog": "What would you like to do?",
				"Open Email": {

					"Text": "Open Email",
					"Do": "jump OpenEmail"
				},
				"Continue Typing": {
					"Text": "Continue Typing",
					"Do": "jump ContinueTyping"
				},
				"Turn Off Computer": {
					"Text": "Turn Off Computer",
					"Do": "jump TurnOff"
				}

			}

		}
	],
	/*
	"Yes": [

		"That's awesome!",
		"Then you are ready to go ahead and create an amazing Game!",
		"I can't wait to see what story you'll tell!",
		"end"
	],

	"No": [

		"You can do it now.",

		"display message Help",

		"Go ahead and create an amazing Game!",
		"I can't wait to see what story you'll tell!",
		"end"
	],
	*/

	//finished
	"OpenEmail": [
		"show scam.png",
		"e This email looks so much like a scam.",
		"You open to read it anyway, because you are tired of your mom pestering you about your future.",
		"You see the words, in big bolded letters, <b>Welcome to U of T Mississauga</b>.",
		"e Just like I suspected, it's just a scam.",
		"hide scam.png",
		{
			"Choice": {
				"Dialog": "What do you want to do?",
				"Delete Email": {
					"Text": "Delete Email",
					"Do": "jump DeleteEmail"
				},
				"Ask A Friend About It": {
					"Text": "Ask A Friend About It",
					"Do": "jump AskFriend"
				}
			}
		}

	],

	//finished
	"DeleteEmail": [
		"A few days later,",
		"show ouac.png",
		"You try logging back in to your account.",
		"e Why is this not working?",
		"hide ouac.png",
		"You realize that your email has been hacked, and all your other data such as your bank accounts have been compromised.",
		"You lose your family, your money, your house, and everything else.",
		"You are a failure.",
		"end"

	],

	//finished
	"AskFriend": [
		"show call.jpg",
		"You try calling Carve for advice.",
		"hide call.jpg",
		"e Hey, Carve, I just got a random email. It seems fishy.",
		"c You might have received one of those emails where they install virus into your computer without knowing.",

		{
			"Choice": {
				"Dialog": "c Your data might be okay, but just in case, download a password manager and change your passwords for all your accounts.",
				"Get Password Program": {
					"Text": "Get Password Program",
					"Do": "jump GetProgram"
				},
				"Do Nothing": {
					"Text": "Do Nothing",
					"Do": "jump DoNothing"
				}
			}
		}
	],


	//finished
	"GetProgram": [
		"e Alright, I'll check it out. Thanks, Carve!",
		"show pass.png center",
		"You use a password manager program, and change your passwords for all your accounts.",
		"Carve's great advice seems to have worked.",
		"Your passwords are now safe, and your valuable information is now stored away from terrible hackers.",
		"hide pass.png",
		"Now you wait with anticipation for your university acceptances, and for your mom to be finally proud of you.",
		"end"
	],

	//finished
	"DoNothing": [
		"c I'm warning you.",
		"c You really need to check and change your passwords.",
		"c You might get hacked.",
		"You don't pay attention to him.",
		"Within the following weeks,",
		"show matrix.jpg center",
		"All your accounts get hacked, including your OUAC account.",
		"You don't have any more future, and you get kicked out and disowned by your family.",
		"hide matrix.jpg",
		"end"
	],


	"ContinueTyping": [
		"You continue typing your password.",
		"Another email notification pops up, and a chat log opens on the side bar.",
		{
			"Choice": {
				"Dialog": "You see your tech savvy friend's name, Carve.",
				"Open Chat": {
					"Text": "Open Chat",
					"Do": "jump OpenChat"
				},
				"Turn Off Computer": {
					"Text": "Turn Off Computer",
					"Do": "jump TurnOff"
				}
			}
		}


	],


	"TurnOff": [
		"You turn off your computer and go to bed.",
		"You never find out if you made it into university, because you were such a loser that you were always too scared to check.",
		"You end up being shunned by your friends and family, and live the rest of your life sad and lonely, because you have no future.",
		"end"

	],


	"OpenChat": [

		"c Yo, you have a malware on your computer.",

		{
			"Choice": {
				"Dialog": "c Your OUAC account might get hacked, so your future is in grave danger.",
				"Continue Asking": {
					"Text": "Continue Asking",
					"Do": "jump ContinueAsking"
				},
				"Leave Chat": {
					"Text": "Leave Chat",
					"Do": "jump LeaveChat"
				}
			}
		}


	],

	"LeaveChat": [
		"You suspect that something is up with Carve, and you don't go back to the chat.",
		{
			"Choice": {
				"Dialog": "c What do you do?",
				"Call Carve": {
					"Text": "Call Carve",
					"Do": "jump CallCarve"
				},
				"Leave It Alone": {
					"Text": "Leave It Alone",
					"Do": "jump IgnoreCarve"
				}
			}
		}

	],

	//Leave it All Alone jumps back to IgnoreCarve

	"CallCarve": [
		"You try to call Carve because it seemed suspicious",
		"c Hey there, {{player.Name}}. What's up?",
		"e Yeah, so...",
		"You tell him the situation that just happened.",
		"c Really? Let me check my computer for a sec.",
		"c I think my OUAC account got hacked. I think it was from a computer virus.",
		"c I'll bring this to the computer shop nearby, tomorrow.",
		"The next day.",
		"c Thanks, {{player.Name}}, I prevented the hacker from getting all my data because of what you told me.",
		"c I can't thank you enough. I almost didn't get into a university because of that.",
		"A few years after you and Carve finish Computer Science at UTM,",
		"c Here, I bought you a car as thanks for that time a few years ago. Thanks!",
		"end"
	],



	"ContinueAsking": [
		"c You've been hacked on the website you just visited.",
		"c It's tracking you right now.",
		"c If it continues, you might lose all your data and your future at a University.",
		{
			"Choice": {
				"Dialog": "c I'll help you right now.",
				"Take Help": {
					"Text": "Take Help",
					"Do": "jump TakeHelp"
				},
				"Leave Chat": {
					"Text": "Leave Chat",
					"Do": "jump LeaveChatAsk"
				}
			}
		}

	],




	"LeaveChatAsk": [
		"c I'm warning you.",
		"c If you don't want me to help, you might get hacked, and get all your data stolen.",
		"The next day at school.",
		"show Hallway.jpg center",
		"You see your friend Carve by the hallway.",
		"e Hey, Carve.",
		"e Why did you ask me for my password yesterday night?",
		"c I was hacked last night, and I lost all my data through a Trojan sent by a hacker.",
		"c I'm done for.",
		"c I'm never going to get into university. My parents already kicked me out of the house and disowned me.",
		"You feel sad for Carve as he walks away from you, and you never hear from him again.",
		"end"
	],


	"TakeHelp": [
		"c You aren't safe.",
		"c You need to give me your password so I can fix it for you.",

		{
			"Choice": {
				"Dialog": "c If you do, I'll make sure to keep your password save for privacy reasons.",
				"Ignore Carve": {
					"Text": "Ignore Carve",
					"Do": "jump IgnoreCarve"
				},
				"Give Password": {
					"Text": "Give Password",
					"Do": "jump GivePassword"
				}
			}
		}

	],



	"IgnoreCarve": [
		"The next day at school,",
		"show Hallway.jpg center",
		"You see your friend Carve by the hallway.",
		"e Hey, Carve.",
		"e Why did you ask me for my password yesterday night?",
		"c I was hacked last night, and I lost all my data through a Trojan sent by a hacker.",
		"c I'm done for.",
		"c I'm never going to get into university. My parents already kicked me out of the house and disowned me.",
		"You feel sad for Carve as he walks away from you, and you never hear from him again.",
		"end"
	],

	"GivePassword": [
		"After 10 minutes,",
		"You try to access your OUAC account again.",
		"It's not working!",
		"You call Carve, and try to ask him about the issue.",
		"c I never asked for it what do you mean?",
		"Carve realizes that his account got hacked.",
		"You both realize that you messed up, and your parents find out.",
		"Both you and Carve got kicked out by your own families, because you guys have no future.",
		"Next time, try to make the right decisions."
	],




};
