Set oExcel = CreateObject("Excel.Application")

Set oWorkBook = oExcel.Workbooks.Open ( "G:\VanithaTrainings\VanithaQtp\Data\GDriveExcelFile1.xls",,True)
Set oWorkSheet = oWorkBook.WorkSheets("GDriveSheet")

k=oWorkSheet.UsedRange.Rows.Count

For i= 2  to k
msgbox oWorkSheet.cells(i,1)

Window("Flight Reservation").Activate @@ hightlight id_;_263862_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_394630_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").set  oWorkSheet.cells(i,1) @@ hightlight id_;_4653948_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_394598_;_script infofile_;_ZIP::ssf4.xml_;_
 @@ hightlight id_;_263862_;_script infofile_;_ZIP::ssf5.xml_;_

Next


oExcel.Quit
Set  oWorkSheet =Nothing
Set oWorkBook=Nothing
Set oExcel=Nothing




