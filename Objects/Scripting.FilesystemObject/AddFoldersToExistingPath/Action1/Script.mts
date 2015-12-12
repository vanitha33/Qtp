dim filesys, newfolder, newfolderpath 

'G:\VanithaTrainings\tests\xyz
newfolderpath =inputbox("Enter directory to be created:") 
set filesys=CreateObject("Scripting.FileSystemObject") 

If Not filesys.FolderExists(newfolderpath) Then 
  Set newfolder = filesys.CreateFolder(newfolderpath) 
  msgbox  "A new folder has been created at: "   & newfolderpath
else
    msgbox  "A new folder cannot be created as it already exists "   & newfolderpath
End If 







