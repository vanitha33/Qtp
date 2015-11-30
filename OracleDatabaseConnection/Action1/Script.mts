Set con=createobject ("Adodb.Connection")
Set rec=createobject ("Adodb.recordset")

con.open "Provider=OraOLEDB.oracle;Data Source=localhost:1521:xe;User Id=system;Password=system;"
rec.open "select * from employee",con

While rec.EOF<>true
msgbox rec(0)
msgbox rec(1)
rec.movenext
wend

Set con=nothing
Set rec=nothing

