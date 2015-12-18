DataTable.AddSheet "QtpOrders"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\if\Orders.xls","OrderDetails","QtpOrders"

SystemUtil.Run("C:\Program Files (x86)\HP\QuickTest Professional\samples\flight\app\flight4a.exe")

Dialog("Login").Activate @@ hightlight id_;_329090_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinEdit("Agent Name:").Set "abcd" @@ hightlight id_;_394638_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinEdit("Agent Name:").Type  micTab @@ hightlight id_;_394638_;_script infofile_;_ZIP::ssf3.xml_;_
Dialog("Login").WinEdit("Password:").SetSecure "5673ed8181cd9eea7722c2060a17338219d3e095" @@ hightlight id_;_329554_;_script infofile_;_ZIP::ssf4.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_329492_;_script infofile_;_ZIP::ssf5.xml_;_

i=DataTable.GetSheet( "QtpOrders").GetRowCount
For j=1 to i
Window("Flight Reservation").Activate @@ hightlight id_;_1640642_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_919600_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set DataTable(1,3) @@ hightlight id_;_461214_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_1050860_;_script infofile_;_ZIP::ssf9.xml_;_

If  Window("Flight Reservation").Dialog("Open Order").Dialog("Flight Reservations").Exist(2) Then
Window("Flight Reservation").Dialog("Open Order").Dialog("Flight Reservations").WinButton("OK").Click
Window("Flight Reservation").Dialog("Open Order").Activate
Window("Flight Reservation").Dialog("Open Order").WinButton("Cancel").Click
DataTable(2,3)="Invalid"
Else
DataTable(2,3)="Valid"
End If
DataTable.GetSheet( "QtpOrders").SetNextRow
NEXT


