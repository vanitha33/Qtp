L=DataTable.GetSheet(2).GetRowCount
j=DataTable.GetSheet(1).GetRowCount


'DataTable.SetNextRow @@ hightlight id_;_395222_;_script infofile_;_ZIP::ssf5.xml_;_
'For i = 1 To L  Step 1
'msgbox "Row Details:" & DataTable.GetSheet(2).GetCurrentRow
'Next
For i = 1 To L  Step 1
h = "For:" & DataTable.GetSheet(2).GetParameter("Id").ValueByRow(i) &  ":" & DataTable.GetSheet(2).GetParameter("Name").ValueByRow(i) & ":"  & DataTable.GetSheet(2).GetParameter("Age").ValueByRow(i)

	If   DataTable.GetSheet(2).GetParameter("Age").ValueByRow(i) > 20 Then
		msgbox " h>20" & h
	ELSE
	  msgbox " h<20" & h
	End If



Next

j=1
While j<= L
h="While:" &DataTable.GetSheet(2).GetParameter("Id").ValueByRow(j) &  ":" & DataTable.GetSheet(2).GetParameter("Name").ValueByRow(j) & ":"  & DataTable.GetSheet(2).GetParameter("Age").ValueByRow(j)

If   DataTable.GetSheet(2).GetParameter("Age").ValueByRow(j) > 20 Then
		msgbox " h>20" & h
	ELSE
	  msgbox " h<20" & h
	End If

j = j + 1
Wend

p=1
Do
h="DoWhile:" &DataTable.GetSheet(2).GetParameter("Id").ValueByRow(p) &  ":" & DataTable.GetSheet(2).GetParameter("Name").ValueByRow(p) & ":"  & DataTable.GetSheet(2).GetParameter("Age").ValueByRow(p)
If   DataTable.GetSheet(2).GetParameter("Age").ValueByRow(p) > 20 Then
		msgbox " h>20" & h
	ELSE
	  msgbox " h<20" & h
	End If

p=p+1
Loop While p<=L


s=1
Do
h="Do Until:" &DataTable.GetSheet(2).GetParameter("Id").ValueByRow(s) &  ":" & DataTable.GetSheet(2).GetParameter("Name").ValueByRow(s) & ":"  & DataTable.GetSheet(2).GetParameter("Age").ValueByRow(s)
If   DataTable.GetSheet(2).GetParameter("Age").ValueByRow(s) > 20 Then
		msgbox " h>20" & h
	ELSE
	  msgbox " h<20" & h
	End If

s=s+1
Loop Until s>L






































