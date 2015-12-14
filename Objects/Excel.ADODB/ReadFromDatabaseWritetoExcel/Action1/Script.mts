'Save to G:\VanithaTrainings\VanithaQtp\Db.xls

Environment.LoadFromFile"G:\VanithaTrainings\VanithaQtp\Environment.xml"
Dim objConnection , objRecordSet, DBQuery, ConnectionString, rowx, columnx
DBQuery = "Select *  from dbo.EMP "
ConnectionString=Environment("sqlserverprovider")

Set oExcel = CreateObject("Excel.Application")

oExcel.DisplayAlerts= False
oExcel.Visible=True
Set oWorkBook=oExcel.Workbooks.Add()
Set oWorkSheet1= oWorkBook.WorkSheets("Sheet1")

'Set Adodb Connection Object
Set objConnection = CreateObject("ADODB.Connection")     

'Create RecordSet Object
Set objRecordSet = CreateObject("ADODB.Recordset")     
 
'Connecting using SQL OLEDB Driver
objConnection.Open ConnectionString
 
'Execute the Query
objRecordSet.Open DBQuery,objConnection

rowx=1
Do While Not objRecordSet.EOF
	MsgBox objRecordSet("eno")  & ":" & objRecordSet("ename")
    oWorkSheet1.Cells(rowx, 1).Value = objRecordSet("eno")
	oWorkSheet1.Cells(rowx, 2).Value = objRecordSet("ename")
	rowx = rowx+1
   objRecordSet.MoveNext
Loop

 oWorkBook.SaveAs "G:\VanithaTrainings\VanithaQtp\Db.xls"

' Release the Resources of database
objRecordSet.Close        
objConnection.Close		
Set objConnection = Nothing
Set objRecordSet = Nothing

'' Release the Resources of  excel
oWorkBook.Close
oExcel.Quit
Set  oWorkSheet =Nothing
Set oWorkBook=Nothing
Set oExcel=Nothing