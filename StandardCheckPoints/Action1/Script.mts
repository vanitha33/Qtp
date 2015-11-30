Environment.LoadFromFile"G:\VanithaTrainings\VanithaQtp\Environment.xml"
Dialog("Login").Activate @@ hightlight id_;_1377752_;_script infofile_;_ZIP::ssf7.xml_;_

Dialog("Login").WinEdit("Agent Name:").Check CheckPoint("Agent Name:") @@ hightlight id_;_198140_;_script infofile_;_ZIP::ssf35.xml_;_
Dialog("Login").WinEdit("Password:").Check CheckPoint("Password:_2") @@ hightlight id_;_394262_;_script infofile_;_ZIP::ssf42.xml_;_
Dialog("Login").WinButton("OK").Check CheckPoint("OK_2") @@ hightlight id_;_656136_;_script infofile_;_ZIP::ssf78.xml_;_
Dialog("Login").WinButton("Cancel").Check CheckPoint("Cancel_2") @@ hightlight id_;_2295814_;_script infofile_;_ZIP::ssf76.xml_;_
Dialog("Login").WinButton("Help").Check CheckPoint("Help_2") @@ hightlight id_;_985086_;_script infofile_;_ZIP::ssf77.xml_;_
Dialog("Login").WinEdit("Agent Name:").Set  Environment ("agentname")
 Dialog("Login").WinEdit("Password:").Set Environment("password")
 @@ hightlight id_;_198140_;_script infofile_;_ZIP::ssf39.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_1770696_;_script infofile_;_ZIP::ssf52.xml_;_

Window("Flight Reservation").Activate @@ hightlight id_;_1443288_;_script infofile_;_ZIP::ssf11.xml_;_

Window("Flight Reservation_4").Static("Date of Flight:").Check CheckPoint("Date of Flight:") @@ hightlight id_;_395376_;_script infofile_;_ZIP::ssf67.xml_;_

Window("Flight Reservation").WinComboBox("Fly From:").Check CheckPoint("Fly From:_2") @@ hightlight id_;_1377934_;_script infofile_;_ZIP::ssf81.xml_;_
 @@ hightlight id_;_1245968_;_script infofile_;_ZIP::ssf80.xml_;_
Window("Flight Reservation").Static("Fly To:").Check CheckPoint("Fly To:_2") @@ hightlight id_;_3539046_;_script infofile_;_ZIP::ssf82.xml_;_
 @@ hightlight id_;_395508_;_script infofile_;_ZIP::ssf68.xml_;_
Window("Flight Reservation_4").WinButton("Button").Check CheckPoint("Button_2") @@ hightlight id_;_395684_;_script infofile_;_ZIP::ssf70.xml_;_
Window("Flight Reservation_4").WinButton("Button_2").Check CheckPoint("Button_3") @@ hightlight id_;_395686_;_script infofile_;_ZIP::ssf71.xml_;_
Window("Flight Reservation_4").WinButton("Button_3").Check CheckPoint("Button_4") @@ hightlight id_;_526762_;_script infofile_;_ZIP::ssf72.xml_;_
Window("Flight Reservation_4").WinButton("Button_4").Check CheckPoint("Button_5") @@ hightlight id_;_461168_;_script infofile_;_ZIP::ssf73.xml_;_
Window("Flight Reservation_4").WinButton("Button_5").Check CheckPoint("Button_6") @@ hightlight id_;_264480_;_script infofile_;_ZIP::ssf74.xml_;_
Window("Flight Reservation_4").WinButton("Button_6").Check CheckPoint("Button_7") @@ hightlight id_;_395680_;_script infofile_;_ZIP::ssf75.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Check CheckPoint("FLIGHT") @@ hightlight id_;_722088_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Flight Reservation").WinButton("Update Order").Check CheckPoint("Update Order") @@ hightlight id_;_2819530_;_script infofile_;_ZIP::ssf14.xml_;_
Window("Flight Reservation").WinButton("Delete Order").Check CheckPoint("Delete Order") @@ hightlight id_;_2098430_;_script infofile_;_ZIP::ssf16.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Check CheckPoint("Insert Order") @@ hightlight id_;_3212746_;_script infofile_;_ZIP::ssf18.xml_;_
Window("Flight Reservation").WinButton("Button").Check CheckPoint("Button") @@ hightlight id_;_2754284_;_script infofile_;_ZIP::ssf20.xml_;_
Window("Flight Reservation").WinEdit("Flight No:").Check CheckPoint("Flight No:") @@ hightlight id_;_2164074_;_script infofile_;_ZIP::ssf22.xml_;_
Window("Flight Reservation").WinEdit("Departure Time:").Check CheckPoint("Departure Time:") @@ hightlight id_;_2621938_;_script infofile_;_ZIP::ssf25.xml_;_
Window("Flight Reservation").WinEdit("Arrival Time:").Check CheckPoint("Arrival Time:") @@ hightlight id_;_3213208_;_script infofile_;_ZIP::ssf26.xml_;_
Window("Flight Reservation").WinEdit("Airline:").Check CheckPoint("Airline:") @@ hightlight id_;_3475180_;_script infofile_;_ZIP::ssf27.xml_;_
Window("Flight Reservation").WinEdit("Tickets:").Check CheckPoint("Tickets:") @@ hightlight id_;_3344174_;_script infofile_;_ZIP::ssf28.xml_;_
Window("Flight Reservation").WinEdit("Price:").Check CheckPoint("Price:") @@ hightlight id_;_3082020_;_script infofile_;_ZIP::ssf29.xml_;_
Window("Flight Reservation").WinEdit("Total:").Check CheckPoint("Total:") @@ hightlight id_;_2753784_;_script infofile_;_ZIP::ssf30.xml_;_
Window("Flight Reservation").WinRadioButton("First").Check CheckPoint("First") @@ hightlight id_;_3606358_;_script infofile_;_ZIP::ssf31.xml_;_
Window("Flight Reservation").WinEdit("Order No:").Check CheckPoint("Order No:") @@ hightlight id_;_2688818_;_script infofile_;_ZIP::ssf32.xml_;_
msgbox("testing completed")
Window("Flight Reservation").Move 662,149 @@ hightlight id_;_2295220_;_script infofile_;_ZIP::ssf21.xml_;_
Window("Flight Reservation").Close







