DataTable.AddSheet "QtpOrder"
DataTable.AddSheet "QtpLogin"
DataTable.AddSheet "QtpInsert"

DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\FlightReservations.xls","Insert","QtpOrder"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Login.xls","LoginSheet","QtpLogin"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Orders.xls ","OrderDetails","QtpInsert" 	


j=Datatable.GetSheet("QtpLogin").GetRowCount
For I=1 to j
	agentname= DataTable(1,"QtpLogin")
	password=DataTable(2,"QtpLogin")
  
	Dialog("Login").WinEdit("Agent Name:").Set agentname @@ hightlight id_;_2689294_;_script infofile_;_ZIP::ssf4.xml_;_
	Dialog("Login").WinEdit("Password:").Set password @@ hightlight id_;_2491734_;_script infofile_;_ZIP::ssf5.xml_;_
	Dialog("Login").WinButton("OK").Click @@ hightlight id_;_2558164_;_script infofile_;_ZIP::ssf6.xml_;_
	DataTable.GetSheet("QtpLogin").SetNextRow
Next

s=Datatable.GetSheet("QtpOrder").GetRowCount
msgbox s
For y=1 to s
    val1=DataTable(1, "QtpOrder") & ":" &  DataTable(2, "QtpOrder") & ":" & DataTable(3, "QtpOrder") & ":" &  DataTable(4, "QtpOrder")& ":" &  DataTable(5, "QtpOrder")
	msgbox  val1
DataTable.GetSheet("QtpOrder").SetNextRow
Next


k=Datatable.GetSheet("QtpInsert").GetRowCount
For i=1 to k
	val3=DataTable(1,"QtpInsert")
	msgbox  val3
	DataTable.GetSheet("QtpInsert").SetNextRow
Next


























