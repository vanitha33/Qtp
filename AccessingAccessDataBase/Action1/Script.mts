Environment.LoadFromFile"G:\VanithaTrainings\VanithaQtp\Environment.xml"
Set con=createobject ("Adodb.Connection")
Set rec=createobject ("Adodb.recordset")

con.provider=Environment ("Accessprovider")
con.open Environment ("Accessdatabasepath")
rec.open "select * from flights",con

While rec.EOF<>true
msgbox rec(0)
msgbox rec(1)
rec.movenext
wend

Set con=nothing
Set rec=nothing












