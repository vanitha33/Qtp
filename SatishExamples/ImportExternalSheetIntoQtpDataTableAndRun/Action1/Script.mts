
DataTable.AddSheet "QtpSheet1"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\GDriveExcelFile1.xls","GDriveSheet","QtpSheet1"

k=DataTable.GetSheet("QtpSheet1").GetRowCount

For i= 1 to k
Window("Flight Reservation").Activate @@ hightlight id_;_1509814_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_985050_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set DataTable(1,"QtpSheet1") @@ hightlight id_;_1640806_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_854494_;_script infofile_;_ZIP::ssf4.xml_;_
DataTable.SetNextRow

Next






