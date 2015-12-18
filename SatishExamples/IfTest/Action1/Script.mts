Window("Flight Reservation").Activate @@ hightlight id_;_263552_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_1116032_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set DataTable(1,1) @@ hightlight id_;_657286_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_7669476_;_script infofile_;_ZIP::ssf4.xml_;_
 @@ hightlight id_;_263552_;_script infofile_;_ZIP::ssf5.xml_;_
If  Window("Flight Reservation").Dialog("Open Order").Dialog("Flight Reservations").Exist(2) Then

Window("Flight Reservation").Dialog("Open Order").Dialog("Flight Reservations").WinButton("OK").Click @@ hightlight id_;_264356_;_script infofile_;_ZIP::ssf15.xml_;_
Window("Flight Reservation").Dialog("Open Order").Activate @@ hightlight id_;_395374_;_script infofile_;_ZIP::ssf16.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("Cancel").Click @@ hightlight id_;_657570_;_script infofile_;_ZIP::ssf17.xml_;_
DataTable(2,1)="Invalid"
Else
DataTable(2,1)="Valid"
End If





 @@ hightlight id_;_263552_;_script infofile_;_ZIP::ssf6.xml_;_

 @@ hightlight id_;_263552_;_script infofile_;_ZIP::ssf7.xml_;_









