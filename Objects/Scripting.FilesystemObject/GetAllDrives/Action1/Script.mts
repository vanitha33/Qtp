Dim fso,oDC
Set fso=CreateObject("Scripting.FilesystemObject")
Set oDC=fso.Drives
For Each d in oDC
	Msgbox d.DriveLetter

Next

Set oDC=Nothing
Set fso=Nothing