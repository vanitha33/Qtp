Environment.LoadFromFile"G:\VanithaTrainings\VanithaQtp\Environment.xml"
Dialog("Login").Activate @@ hightlight id_;_853326_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinEdit("Agent Name:").Set  Environment ("agentname") @@ hightlight id_;_2361560_;_script infofile_;_ZIP::ssf3.xml_;_
 Dialog("Login").WinEdit("Password:").Set Environment("password")
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_1704302_;_script infofile_;_ZIP::ssf5.xml_;_
 @@ hightlight id_;_4786182_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation_2").WinMenu("Menu").Select "Help;About..."
Window("Flight Reservation_2").Dialog("About Flight Reservation").WinButton("Button").Check CheckPoint("Button_2") @@ hightlight id_;_2492314_;_script infofile_;_ZIP::ssf12.xml_;_
msgbox("testing1 completed")
Window("Flight Reservation_2").Dialog("About Flight Reservation").Close
msgbox("testing2 completed")
Window("Flight Reservation_2").Close
