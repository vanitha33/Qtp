Dim fso,strFolder

strFolder=inputbox ("Enter folder to be created  ")

Set fso=CreateObject("Scripting.FileSystemObject")

fso.CreateFolder  strFolder

Set fso=Nothing

