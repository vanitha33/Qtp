﻿ Dialog("Login").Activate
Dialog("Login").WinEdit("Agent Name:").Set "abcd"
 Dialog("Login").WinEdit("Password:").Set "mercury"
 Dialog("Login").WinButton("OK").Click
 Dialog("Login").WinButton("Cancel").Click
 Dialog("Login").WinButton("Help").Click
