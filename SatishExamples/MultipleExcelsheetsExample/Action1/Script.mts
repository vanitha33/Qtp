DataTable.AddSheet "QtpOrder"
DataTable.AddSheet "QtpLogin"
DataTable.AddSheet "QtpInsert"
DataTable.AddSheet "QtpUpdate"
DataTable.AddSheet "QtpDelete"

DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\FlightReservations.xls","Insert","QtpOrder"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\FlightReservations.xls","Update","QtpUpdate"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\FlightReservations.xls","Delete","QtpDelete"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Login.xls","LoginSheet","QtpLogin"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Orders.xls ","OrderDetails","QtpInsert" 	


SystemUtil.Run("C:\Program Files (x86)\HP\QuickTest Professional\samples\flight\app\flight4a.exe")
j=Datatable.GetSheet("QtpLogin").GetRowCount
For I=1 to j step 1

	agentname= DataTable(1,"QtpLogin")
	password=DataTable(2,"QtpLogin")
 
	Dialog("Login").WinEdit("Agent Name:").Set agentname @@ hightlight id_;_2689294_;_script infofile_;_ZIP::ssf4.xml_;_
	Dialog("Login").WinEdit("Password:").Set password @@ hightlight id_;_2491734_;_script infofile_;_ZIP::ssf5.xml_;_
	Dialog("Login").WinButton("OK").Click @@ hightlight id_;_2558164_;_script infofile_;_ZIP::ssf6.xml_;_
	DataTable.GetSheet("QtpLogin").SetNextRow
Next

s=Datatable.GetSheet("QtpOrder").GetRowCount
For y=1 to s
    val1=DataTable(1, "QtpOrder") & ":" &  DataTable(2, "QtpOrder") & ":" & DataTable(3, "QtpOrder") & ":" &  DataTable(4, "QtpOrder")& ":" &  DataTable(5, "QtpOrder")
Window("Flight Reservation").Activate @@ hightlight id_;_657654_;_script infofile_;_ZIP::ssf18.xml_;_
Window("Flight Reservation").ActiveX("MaskEdBox").Type DataTable (1,"QtpOrder")  @@ hightlight id_;_1443808_;_script infofile_;_ZIP::ssf19.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select DataTable(2, "QtpOrder") @@ hightlight id_;_1312680_;_script infofile_;_ZIP::ssf20.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select DataTable(3, "QtpOrder") @@ hightlight id_;_657604_;_script infofile_;_ZIP::ssf21.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_788724_;_script infofile_;_ZIP::ssf22.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_1181584_;_script infofile_;_ZIP::ssf23.xml_;_
Window("Flight Reservation").Activate @@ hightlight id_;_657654_;_script infofile_;_ZIP::ssf24.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set DataTable(4, "QtpOrder") @@ hightlight id_;_657614_;_script infofile_;_ZIP::ssf25.xml_;_
Window("Flight Reservation").WinEdit("Tickets:").Set DataTable(5, "QtpOrder") @@ hightlight id_;_395542_;_script infofile_;_ZIP::ssf26.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_723118_;_script infofile_;_ZIP::ssf27.xml_;_
DataTable.GetSheet("QtpOrder").SetNextRow
Next

k=Datatable.GetSheet("QtpInsert").GetRowCount
For i=1 to k
	val3=DataTable(1,"QtpInsert")
   Window("Flight Reservation").Activate
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_723170_;_script infofile_;_ZIP::ssf37.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set Datatable(1,"QtpInsert") @@ hightlight id_;_919798_;_script infofile_;_ZIP::ssf38.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_854282_;_script infofile_;_ZIP::ssf39.xml_;_
DataTable.GetSheet("QtpInsert").SetNextRow
Next


u=Datatable.GetSheet("QtpUpdate").GetRowCount
For i=1 to u
	val4=DataTable(1,"QtpUpdate") & ":" &  DataTable(2,"QtpUpdate") & ":" &  DataTable(3,"QtpUpdate")
 @@ hightlight id_;_1771748_;_script infofile_;_ZIP::ssf41.xml_;_
Window("Flight Reservation").Activate
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..." @@ hightlight id_;_1378678_;_script infofile_;_ZIP::ssf42.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_1902844_;_script infofile_;_ZIP::ssf43.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set DataTable(1,"QtpUpdate") @@ hightlight id_;_2689144_;_script infofile_;_ZIP::ssf44.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_1771748_;_script infofile_;_ZIP::ssf45.xml_;_
Window("Flight Reservation").Activate @@ hightlight id_;_1573992_;_script infofile_;_ZIP::ssf46.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set  DataTable(2,"QtpUpdate") @@ hightlight id_;_1508462_;_script infofile_;_ZIP::ssf47.xml_;_
Window("Flight Reservation").WinEdit("Tickets:").Set  DataTable(3,"QtpUpdate") @@ hightlight id_;_2164930_;_script infofile_;_ZIP::ssf48.xml_;_
Window("Flight Reservation").WinButton("Update Order").Click
DataTable.GetSheet("QtpUpdate").SetNextRow
Next

m=Datatable.GetSheet("QtpDelete").GetRowCount
For i=1 to m
val5=DataTable(1,"QtpDelete") @@ hightlight id_;_4065728_;_script infofile_;_ZIP::ssf51.xml_;_
Window("Flight Reservation").Activate
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..." @@ hightlight id_;_1313068_;_script infofile_;_ZIP::ssf52.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_1181900_;_script infofile_;_ZIP::ssf53.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set DataTable(1,"QtpDelete") @@ hightlight id_;_2033782_;_script infofile_;_ZIP::ssf54.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_4065728_;_script infofile_;_ZIP::ssf55.xml_;_
Window("Flight Reservation").Activate @@ hightlight id_;_2820488_;_script infofile_;_ZIP::ssf56.xml_;_
Window("Flight Reservation").WinButton("Delete Order").Click @@ hightlight id_;_3737676_;_script infofile_;_ZIP::ssf57.xml_;_
Window("Flight Reservation").Dialog("Flight Reservations").WinButton("OK").Click @@ hightlight id_;_4065728_;_script infofile_;_ZIP::ssf58.xml_;_
Window("Flight Reservation").Activate

DataTable.GetSheet("QtpDelete").SetNextRow
Next































