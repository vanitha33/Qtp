DataTable.AddSheet "Qtp_One_1"
DataTable.AddSheet "Qtp_One_2"
DataTable.AddSheet "Qtp_One_3"
DataTable.AddSheet "Qtp_Two_1"
DataTable.AddSheet "Qtp_Two_2"
DataTable.AddSheet "Qtp_Two_3"

DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Test\1.xls","One_1","Qtp_One_1"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Test\1.xls","One_2","Qtp_One_2"


DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Test\1.xls","One_3","Qtp_One_3"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Test\2.xls","Two_1","Qtp_Two_1"

DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Test\2.xls","Two_2","Qtp_Two_2"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Test\2.xls","Two_3","Qtp_Two_3"


i=DataTable.GetSheet("Qtp_One_1").GetRowCount
For j=1 to i
val1=DataTable(1,"Qtp_One_1") & ":" & DataTable(2,"Qtp_One_1")
msgbox val1
DataTable.GetSheet("Qtp_One_1").SetNextRow
Next


s=DataTable.GetSheet("Qtp_One_2").GetRowCount
For j=1 to s
val1=DataTable(1,"Qtp_One_2") & ":" & DataTable(2,"Qtp_One_2")
msgbox val1
DataTable.GetSheet("Qtp_One_2").SetNextRow
Next


s=DataTable.GetSheet("Qtp_One_3").GetRowCount
For j=1 to s
val1=DataTable(1,"Qtp_One_3") & ":" & DataTable(2,"Qtp_One_3")
msgbox val1
DataTable.GetSheet("Qtp_One_3").SetNextRow
Next



k=DataTable.GetSheet("Qtp_Two_1").GetRowCount
For j=1 to k
val1=DataTable(1,"Qtp_Two_1") & ":" & DataTable(2,"Qtp_Two_1")
msgbox val1
DataTable.GetSheet("Qtp_Two_1").SetNextRow
Next


m=DataTable.GetSheet("Qtp_Two_2").GetRowCount
For j=1 to m
val1=DataTable(1,"Qtp_Two_2") & ":" & DataTable(2,"Qtp_Two_2") & ":" & DataTable(3,"Qtp_Two_2")
msgbox val1
DataTable.GetSheet("Qtp_Two_2").SetNextRow
Next


h=DataTable.GetSheet("Qtp_Two_3").GetRowCount
For j=1 to h
val1=DataTable(1,"Qtp_Two_3") & ":" & DataTable(2,"Qtp_Two_3") & ":" & DataTable(3,"Qtp_Two_3")
msgbox val1
DataTable.GetSheet("Qtp_Two_3").SetNextRow
Next


h=DataTable.GetSheet("Global").GetRowCount
For j=1 to h
val1=DataTable(1,"Global") & ":" & DataTable(2,"Global")
msgbox val1
DataTable.GetSheet("Global").SetNextRow
Next



n=DataTable.GetSheet("Action1").GetRowCount
For j=1 to n
val1=DataTable(1,"Action1") & ":" & DataTable(2,"Action1")
msgbox val1
DataTable.GetSheet("Action1").SetNextRow
Next
