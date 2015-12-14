

oWorkBook.Close
Dim rowCount, colCount
Set oExcel = CreateObject("Excel.Application")

Set oWorkBook = oExcel.Workbooks.Open ( "G:\VanithaTrainings\VanithaQtp\testing\a.xls",,True)
Set oWorkSheet = oWorkBook.WorkSheets("Murali")

rowCount=oWorkSheet.UsedRange.Rows.Count
colCount=oWorkSheet.UsedRange.Columns.Count

msgbox rowCount & ">" & colCount
For r=1 to rowCount
  For c=1 to colCount
	print  oWorkSheet.cells(r,c)
  Next

Next

oExcel.Quit
Set  oWorkSheet =Nothing
Set oWorkBook=Nothing
Set oExcel=Nothing












