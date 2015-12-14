Set oExcel = CreateObject("Excel.Application")

Set oWorkBook = oExcel.Workbooks.Open ( "G:\VanithaTrainings\VanithaQtp\Data\Login.xls",,True)
Set oWorkSheet = oWorkBook.WorkSheets("LoginSheet")

Dialog("Login").Activate @@ hightlight id_;_330436_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinEdit("Agent Name:").Set oWorkSheet.cells(2,1) @@ hightlight id_;_789068_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinEdit("Password:").Set oWorkSheet.cells(3,1) @@ hightlight id_;_788702_;_script infofile_;_ZIP::ssf3.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_460474_;_script infofile_;_ZIP::ssf4.xml_;_


 Set  oWorkSheet =Nothing
Set oWorkBook=Nothing
Set oExcel=Nothing



