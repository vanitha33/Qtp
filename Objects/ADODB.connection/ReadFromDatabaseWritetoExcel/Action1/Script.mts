'Save to G:\VanithaTrainings\VanithaQtp\Db.xls

Environment.LoadFromFile"G:\VanithaTrainings\VanithaQtp\Environment.xml"
Dim objConnection , objRecordSet, DBQuery, ConnectionString
DBQuery = "Select *  from dbo.EMP "
ConnectionString=Environment("sqlserverprovider")

'Set Adodb Connection Object
Set objConnection = CreateObject("ADODB.Connection")     

'Create RecordSet Object
Set objRecordSet = CreateObject("ADODB.Recordset")     
 
'Connecting using SQL OLEDB Driver
objConnection.Open ConnectionString
 
'Execute the Query
objRecordSet.Open DBQuery,objConnection


Do While Not objRecordSet.EOF
	MsgBox objRecordSet("eno")  & ":" & objRecordSet("ename")
   objRecordSet.MoveNext
Loop

 
' Release the Resources
objRecordSet.Close        
objConnection.Close		
 
Set objConnection = Nothing
Set objRecordSet = Nothing

