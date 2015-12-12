Dim fso,strFile,strDest
'strFile="G:\VanithaTrainings\tests\xyz\1.txt"
strFile=inputbox ("Enter full path of file to be copied ")

'strDest="G:\VanithaTrainings\tests\xyz\1\2\3\4\5\6\7\8\9\10\"
strDest=inputbox("enter the destiny path")
Set fso=CreateObject("Scripting.FileSystemObject")

fso.CopyFile strFile ,strDest

Set fso=Nothing



