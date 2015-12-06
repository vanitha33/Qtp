' Dim intnumber
'k=inputbox("enter an integer:")
'intnumber=Cint(k)
'msgbox intnumber
'
'  if(intnumber mod 2)=0 then
'   msgbox   intnumber & "is an even number"
' else
'   msgbox   intnumber & "is an odd number"
' End if


Dim intrangeStart,intRangeEnd,i

intRangeStart=Cint(inputBox("enter the start Range:"))
intRangeEnd=Cint(inputbox("enter the End Range:"))

If intRangeEnd< intRangeStart Then
	msgbox "please enter appropriate range"
	ExitTest
End If

For i=intRangeStart to intRangeEnd
	k = i mod 2
	if k=0 then
		msgbox i
	end if


Next






