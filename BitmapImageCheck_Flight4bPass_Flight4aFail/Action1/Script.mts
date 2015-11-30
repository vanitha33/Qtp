Environment.LoadFromFile"G:\VanithaTrainings\VanithaQtp\Environment.xml"
Dialog("Login").Activate @@ hightlight id_;_4981930_;_script infofile_;_ZIP::ssf7.xml_;_
Dialog("Login").WinEdit("Agent Name:").Set  Environment ("agentname") @@ hightlight id_;_3474444_;_script infofile_;_ZIP::ssf8.xml_;_
 Dialog("Login").WinEdit("Password:").Set Environment("password")
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_4064424_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "Help;About..."
Window("Flight Reservation").Dialog("About Flight Reservation").WinButton("Button").Check CheckPoint("Button_2") @@ hightlight id_;_787868_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Flight Reservation").Dialog("About Flight Reservation").Close
Window("Flight Reservation").Close
