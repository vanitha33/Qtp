Dim fso,strFile

strFile=inputbox ("Enter file to be deleted  ")

Set fso=CreateObject("Scripting.FileSystemObject")

fso.DeleteFile  strFile

Set fso=Nothing
