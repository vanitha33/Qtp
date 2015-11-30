Environment.LoadFromFile"G:\VanithaTrainings\VanithaQtp\Environment.xml"
RepositoriesCollection.Add "G:\VanithaTrainings\VanithaQtp\SharedObjRep.tsr"
 Dialog("Login").Activate
Dialog("Login").WinEdit("Agent Name:").Set  Environment ("agentname")
Dialog("Login").WinEdit("Password:").Set Environment("password")
Dialog("Login").WinButton("OK").Click

