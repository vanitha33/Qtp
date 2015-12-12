
Set oExcel = CreateObject("Excel.Application")

oExcel.DisplayAlerts= False
oExcel.Visible=True

Set oWorkBook=oExcel.Workbooks.Add()

Set oWorkSheet1= oWorkBook.WorkSheets("Sheet1")

oWorkSheet1.Cells(1,1).Value="Vanitha 1,1"
oWorkSheet1.Cells(1,2).Value="Vanitha 1,2"
oWorkSheet1.Cells(1,3).Value="Vanitha 1,3"
oWorkSheet1.Cells(2,1).Value="Vanitha 2,1"
oWorkSheet1.Cells(2,2).Value="Vanitha 2.2"
oWorkSheet1.Cells(2,3).Value="Vanitha 2.3"

Set oWorkSheet2= oWorkBook.WorkSheets("Sheet2")
oWorkSheet2.Cells(1,1).Value="Murali 1,1"
oWorkSheet2.Cells(1,2).Value="Murali 1,2"
oWorkSheet2.Cells(1,3).Value="Murali 1,3"
oWorkSheet2.Cells(2,1).Value="Murali 2,1"
oWorkSheet2.Cells(2,2).Value="Murali 2.2"
oWorkSheet2.Cells(2,3).Value="Murali 2.3"

'ReadP- Read Password
'WriteP- To edit file password
oWorkBook.SaveAs "G:\VanithaTrainings\VanithaQtp\Vanitha.xls",, "ReadP","WriteP"

oWorkBook.Close

oExcel.Quit
Set  oWorkSheet =Nothing
Set oWorkBook=Nothing
Set oExcel=Nothing









