Set con=createobject ("Adodb.Connection")
Set rec=createobject ("Adodb.recordset")

con.provider="microsoft.jet.oledb.4.0"
con.open "C:\Program Files (x86)\HP\QuickTest Professional\samples\flight\app\flight32.mdb"
rec.open "select * from flights",con

While rec.EOF<>true
msgbox rec(0)
msgbox rec(1)
rec.movenext
wend

Set con=nothing
Set rec=nothing










