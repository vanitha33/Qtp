k=DataTable.GetSheet(2).GetRowCount
'For i=1 to k step 0
'
'Window("Flight Reservation").Activate @@ hightlight id_;_1116554_;_script infofile_;_ZIP::ssf1.xml_;_
'Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
'Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_3409408_;_script infofile_;_ZIP::ssf2.xml_;_
'Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set  DataTable(3,2) @@ hightlight id_;_919502_;_script infofile_;_ZIP::ssf3.xml_;_
'Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_2688978_;_script infofile_;_ZIP::ssf4.xml_;_
'
'DataTable.SetNextRow
'Next

'i=1
'While i<=k
'Window("Flight Reservation").Activate @@ hightlight id_;_1116554_;_script infofile_;_ZIP::ssf1.xml_;_
'Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
'Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_3409408_;_script infofile_;_ZIP::ssf2.xml_;_
'Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set  DataTable(3,2) @@ hightlight id_;_919502_;_script infofile_;_ZIP::ssf3.xml_;_
'Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_2688978_;_script infofile_;_ZIP::ssf4.xml_;_
'i=i+1
'DataTable.SetNextRow
'
'Wend

i=1
Do
Window("Flight Reservation").Activate @@ hightlight id_;_1116554_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_3409408_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set  DataTable(3,2) @@ hightlight id_;_919502_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_2688978_;_script infofile_;_ZIP::ssf4.xml_;_
DataTable.SetNextRow
i=i+1
Loop While i<=k

















