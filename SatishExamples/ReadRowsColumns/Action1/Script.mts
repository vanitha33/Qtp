
DataTable.AddSheet "Qtp_One_1"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Test\1.xls","One_1","Qtp_One_1"


i=DataTable.GetSheet("Qtp_One_1").GetRowCount
msgbox i
For j=1 to i
	k=DataTable.GetSheet("Qtp_One_1").GetParameterCount
	val2=""
	For m=1 to k
      val2 =   DataTable(m,"Qtp_One_1") & ":" & val2
	Next
msgbox val2
DataTable.GetSheet("Qtp_One_1").SetNextRow
Next


