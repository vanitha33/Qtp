Dim fso,strFolder,strDest

strFolder=inputbox ("Enter full path of file to be copied ")

strDest=inputbox("enter the destiny path")
Set fso=CreateObject("Scripting.FileSystemObject")

fso.CopyFolder  strFolder ,strDest

Set fso=Nothing