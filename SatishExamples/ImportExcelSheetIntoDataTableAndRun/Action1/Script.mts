
DataTable.AddSheet "QtpSheet"
DataTable.ImportSheet "G:\VanithaTrainings\VanithaQtp\Data\Login1.xls","LoginSheet","QtpSheet"

Dialog("Login").Activate @@ hightlight id_;_526012_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinEdit("Agent Name:").Set  DataTable(1,"QtpSheet") @@ hightlight id_;_525550_;_script infofile_;_ZIP::ssf2.xml_;_
DataTable.SetNextRow
Dialog("Login").WinEdit("Password:").Set  DataTable(1,"QtpSheet") @@ hightlight id_;_329562_;_script infofile_;_ZIP::ssf3.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_656764_;_script infofile_;_ZIP::ssf4.xml_;_









