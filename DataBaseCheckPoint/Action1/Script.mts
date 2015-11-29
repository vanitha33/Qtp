
Dialog("Login").Activate @@ hightlight id_;_657196_;_script infofile_;_ZIP::ssf11.xml_;_
Dialog("Login").WinEdit("Agent Name:").Set "abcd" @@ hightlight id_;_918994_;_script infofile_;_ZIP::ssf12.xml_;_
Dialog("Login").WinEdit("Password:").SetSecure "565b01a7cb1ad82288feb870f84f32ac4d0d4b4a" @@ hightlight id_;_1049018_;_script infofile_;_ZIP::ssf13.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_853388_;_script infofile_;_ZIP::ssf14.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_1772676_;_script infofile_;_ZIP::ssf15.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set "5" @@ hightlight id_;_1050448_;_script infofile_;_ZIP::ssf16.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_1378986_;_script infofile_;_ZIP::ssf17.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "can" @@ hightlight id_;_1114554_;_script infofile_;_ZIP::ssf18.xml_;_
Window("Flight Reservation").WinButton("Update Order").Click @@ hightlight id_;_1050952_;_script infofile_;_ZIP::ssf19.xml_;_
DbTable("DbTable_2").Check CheckPoint("DbTable_2")
 @@ hightlight id_;_722732_;_script infofile_;_ZIP::ssf20.xml_;_
Window("Flight Reservation").Close