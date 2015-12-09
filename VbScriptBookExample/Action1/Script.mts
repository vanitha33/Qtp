

'Sub printevennumbers(intRangeStart, intRangeEnd)
'  If intRangeEnd< intRangeStart Then
'	msgbox "please enter appropriate range i.e startRange must be less than endrange"
'	ExitTest
'End If
'For i=intRangeStart to intRangeEnd
'	m= i mod 2
'	if m=0 then
'		msgbox i
'	end if
'Next
'End Sub

'Sub printoddandevennumbers(abc)
'  if(abc mod 2)=0 then
'   msgbox abc  & "is an even number"
' else
'   msgbox  abc  & "is an odd number"
' End if 
'End Sub

'Sub printsumnumbers(x)
'j=0
'For i = 1 To  x  Step 1
' j=j+i
'Next
'msgbox j
'End Sub

'Function  printsumnumbersF(x)
'   Dim j, i
'	j=0
'	For i = 1 To  x  Step 1
'		j=j+i
'	Next
'	printsumnumbersF=j
'End Function


Function  printmulnumbersF(x)
   Dim j, i
	j=1
	For i = 1 To  x  Step 1
		j=j*i
	Next
	printmulnumbersF=j
End Function

Sub printmulnumbersP(x)
j=1
For i = 1 To  x  Step 1
 j=j*i
Next
msgbox j
End Sub

j=inputbox("enter number(to calculate sum)")
MSGBOX j
printmulnumbersP(j)

'Dim result
'result= printmulnumbersF(5)
'msgbox result

'Dim result, intnumber, startr, endr, j, l, k,result
'Dim j, l, result
'j=inputbox("enter number(to calculate sum)")
'l=cint(j)
'result =  printsumnumbersF(l)
'MSGBOX result


'k=inputbox("enter an integer(to determine even or odd):")
'intnumber=Cint(k)
'Call printsumnumbers(intnumber)
'
'k=inputbox("enter an integer:")
'intnumber=Cint(k)
'Call printoddandevennumbers(intnumber)
'
'
'k=inputBox("enter the start Range to print even and odd:")
'startr=Cint(k)
'u=inputbox("enter the End Range to print even and odd:")
'endr=CInt(u)
'Call printevennumbers( startr,endr)


















