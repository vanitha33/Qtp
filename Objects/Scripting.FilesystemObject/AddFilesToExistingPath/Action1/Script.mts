dim newfilepath

'G:\VanithaTrainings\tests\xyz
newfilepath =inputbox("Enter file to be created:") 
Set fs = CreateObject("Scripting.FileSystemObject")
Set a = fs.CreateTextFile(newfilepath, True)
a.WriteLine("My name is vanitha")

a.Close


