Dim objFSO
Set objFSO = CreateObject("Scripting.FileSystemObject")

Dim objTextStream

const strFileName = "G:\VanithaTrainings\VanithaQtp\TestProperties.txt"
const fsoForReading = 1

If objFSO.FileExists("G:\VanithaTrainings\VanithaQtp\TestProperties.txt") then
	'The file exists, so open it and output its contents
	Set objTextStream = objFSO.OpenTextFile(strFileName, fsoForReading)
   'msgbox objTextStream.ReadAll

 While objTextStream.AtEndOfLine <> True
	   		s = objTextStream.ReadLine
			person=Split(s, "#")

			msgbox  person(0) & ">>>>>>>>>>>" & person(1)
Wend
 
	objTextStream.Close
	Set objTextStream = Nothing
Else
	'The file did not exist
	msgbox  strFileName & " was not found."
End If

'Clean up
Set objFSO = Nothing





