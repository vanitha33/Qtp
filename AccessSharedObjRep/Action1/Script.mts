RepositoriesCollection.Add "G:\VanithaTrainings\VanithaQtp\SharedObjRep.tsr"
 Dialog("Login").Activate
Dialog("Login").WinEdit("Agent Name:").Set "abcd"
Dialog("Login").WinEdit("Password:").Set "mercury"
Dialog("Login").WinButton("OK").Click

