k=DataTable.GetSheet(2).GetRowCount
j=DataTable.GetSheet(1).GetRowCount
'msgbox k & ">"  & j @@ hightlight id_;_395222_;_script infofile_;_ZIP::ssf1.xml_;_

'DataTable.SetNextRow @@ hightlight id_;_395222_;_script infofile_;_ZIP::ssf5.xml_;_
'For i = 1 To k  Step 1
'msgbox "Row Details:" & DataTable.GetSheet(2).GetCurrentRow
'Next
For i = 1 To k  Step 1
h="For:" & DataTable.GetSheet(2).GetParameter("Id").ValueByRow(i) &  ":" & DataTable.GetSheet(2).GetParameter("Name").ValueByRow(i) & ":"  & DataTable.GetSheet(2).GetParameter("Age").ValueByRow(i)
msgbox h
Next

i=1
While i<= k
h="While:" &DataTable.GetSheet(2).GetParameter("Id").ValueByRow(i) &  ":" & DataTable.GetSheet(2).GetParameter("Name").ValueByRow(i) & ":"  & DataTable.GetSheet(2).GetParameter("Age").ValueByRow(i)
msgbox h
i = i + 1
Wend

i=1
Do
h="DoWhile:" &DataTable.GetSheet(2).GetParameter("Id").ValueByRow(i) &  ":" & DataTable.GetSheet(2).GetParameter("Name").ValueByRow(i) & ":"  & DataTable.GetSheet(2).GetParameter("Age").ValueByRow(i)
msgbox h
i=i+1
Loop While i<=k


i=1
Do
h="Do Until:" &DataTable.GetSheet(2).GetParameter("Id").ValueByRow(i) &  ":" & DataTable.GetSheet(2).GetParameter("Name").ValueByRow(i) & ":"  & DataTable.GetSheet(2).GetParameter("Age").ValueByRow(i)
msgbox h
i=i+1
Loop Until i>k




















