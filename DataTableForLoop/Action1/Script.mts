For Iterator = 1 To 3 Step 1
Window("Flight Reservation").Activate @@ hightlight id_;_983446_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_2689042_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set DataTable(1,1) @@ hightlight id_;_1180482_;_script infofile_;_ZIP::ssf13.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_1836838_;_script infofile_;_ZIP::ssf14.xml_;_
Window("Flight Reservation").Activate @@ hightlight id_;_983446_;_script infofile_;_ZIP::ssf15.xml_;_
Next










