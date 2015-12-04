'public Class TVProgram
'
'		Public ProgramTitle
'		Public StartTime
'		Public ProgramDate
'
'End Class
'
'Set movieShow = new TVProgram
'movieShow.StartTime = CDate("17:30")
'movieShow.ProgramDate = DateSerial(1999,9,17)
'movieShow.ProgramTitle = "The Jerry Springer Show"
'msgbox movieShow.ProgramTitle & " is on at  " & movieShow.StartTime & " on " & movieShow.ProgramDate 
'
'set childShow = new TVProgram
'childShow.StartTime = CDate("18:30")
'childShow.ProgramDate = DateSerial(2015,9,15)
'childShow.ProgramTitle = "Child Show"
'msgbox childShow.ProgramTitle & " is on at  " & childShow.StartTime & " on " & childShow.ProgramDate 

set objExcel = CreateObject("Excel.Application")
objExcel.Application.DisplayAlerts = False
set objWorkbook=objExcel.workbooks.add()
objExcel.cells(1,1).value = "Vanitha"
objExcel.cells(1,2).value = "Murali"
objExcel.cells(1,3).value = "Tarini"
objExcel.cells(1,4).value = "Vishal"


objWorkbook.Saveas "G:\VanithaTrainings\qtp.xls"
objWorkbook.Close
objExcel.workbooks.close
objExcel.quit
set objExcel = nothing 












