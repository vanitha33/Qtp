Environment.LoadFromFile"G:\VanithaTrainings\VanithaQtp\Environment.xml"
Dialog("Login").Activate
Dialog("Login").WinEdit("Agent Name:").Set  Environment ("agentname")
 Dialog("Login").WinEdit("Password:").Set Environment("password")
 Dialog("Login").WinButton("OK").Click
 Dialog("Login").WinButton("Cancel").Click
 Dialog("Login").WinButton("Help").Click
