''Qtp
'i=4
'If  i=2  Then
'	print  "HAI"
'ELSEIF i=3 THEN
'		print  "XXX"
' ELSE
'	 print  "NO" 
'End If
'
'
''vb Script
'Dim a  
'a = -5
'
'If a > 0 Then
'   MSGBOX  "a is a POSITIVE Number"
'ElseIf a < 0 Then
'   MSGBOX  "a is a NEGATIVE Number"
'Else
'  MSGBOX  "a is EQUAL than ZERO"
'End If
'
'
'
Dim myName
myName = "Bob"
Select Case myName
Case "Bob"
	msgbox("Been busy Bob?")
Case "Sara"
	msgbox("Seen any slick sunglasses Sara?")
Case "Charles"
	msgbox("Did you chuck your chowder Charles?")
End Select
'
'For j = 0 To 3 Step 1
'     msgbox "QTP:" & j
'Next
'
'For i = 0 to 3
'    msgbox "VBScrpt:" & i
'Next
'
'
'
'for v=5 to 8
'	msgbox "vanitha:" & v
'    Next
'
'
'dim count
'count = 2
'
'If count = 0 Then
'    MsgBox "There are no items."
'ElseIf count = 1 Then
'    MsgBox "There is 1 item."
'Else
'    MsgBox "There are " & count & " items."
'End If
'
'j=0
'For  i=1 to 5
'j=j+i
'Next
'msgbox j

'k=1
'For j=2 to 6
'		k=k*j
'	next
'	msgbox k

odd=0
even=0
For h=1 to 6
m=h MOD 2
If m=0 Then '       EVEN
  even = even +h
else  ' odd
 odd = odd   + h
End If
Next

msgbox even













