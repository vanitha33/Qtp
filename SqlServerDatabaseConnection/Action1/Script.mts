Environment.LoadFromFile"G:\VanithaTrainings\VanithaQtp\Environment.xml"
Dim objConnection 
'Set Adodb Connection Object
Set objConnection = CreateObject("ADODB.Connection")     
Dim objRecordSet 
 
'Create RecordSet Object
Set objRecordSet = CreateObject("ADODB.Recordset")     
 
Dim DBQuery 'Query to be Executed
DBQuery = "Select ename  from dbo.EMP where eno = 1"

Dim ConnectionString
ConnectionString=Environment("sqlserverprovider")

msgbox  ConnectionString

'Connecting using SQL OLEDB Driver
objConnection.Open ConnectionString
 
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










