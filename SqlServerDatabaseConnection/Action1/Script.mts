﻿Dim objConnection 
'Set Adodb Connection Object
Set objConnection = CreateObject("ADODB.Connection")     
Dim objRecordSet 
 
'Create RecordSet Object
Set objRecordSet = CreateObject("ADODB.Recordset")     
 
Dim DBQuery 'Query to be Executed
DBQuery = "Select ename  from dbo.EMP where eno = 1"
 
'Connecting using SQL OLEDB Driver
objConnection.Open "Provider=sqloledb.1;Server=.\SQLEXPRESS;User Id=sa;Password=system;Database=VanithaTrainings"
 
'Execute the Query
objRecordSet.Open DBQuery,objConnection
 
'Return the Result Set
Value = objRecordSet.fields.item(0)				
msgbox Value
 
' Release the Resources
objRecordSet.Close        
objConnection.Close		
 
Set objConnection = Nothing
Set objRecordSet = Nothing






