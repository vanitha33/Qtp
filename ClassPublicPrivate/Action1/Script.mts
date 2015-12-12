Class School
 Private Classroom
Private  Noofteachers
Private Noofstudents
Private Salaryperteacher

Public Property Let peroom(x)
Classroom=x
End Property

Public Property Get peroom
 peroom=Classroom
End Property

Public Property Let teachers(y)
 Noofteachers=y
End Property


Public Property get Allteachers
  Allteachers=noofteachers
End Property

Public Property let students(z)
 Noofstudents=z
End Property


Public Property Get students
students=Noofstudents
End Property

Public Property let salary(b)
   Salaryperteacher=b
End Property

Public Property get Salary
 Salary= Salaryperteacher
End Property

Function getAllSlaries()
  getAllSlaries = Salaryperteacher * Noofteachers
End Function

Sub modifySalary(x)
  Salaryperteacher=x
End Sub

End class

Dim westernhouse
Set westernhouse=new  School
westernhouse.salary=3000
westernhouse.students="good students"
westernhouse.teachers=20
westernhouse.peroom="the Best School"

msgbox "1>" & westernhouse.peroom & ":" & westernhouse.Allteachers  & ":" &   westernhouse.students  & ":" & westernhouse.Salary & ":" &  westernhouse.getAllSlaries()
westernhouse.modifySalary(4000)
msgbox "2>" & westernhouse.peroom & ":" & westernhouse.Allteachers  & ":" &   westernhouse.students  & ":" & westernhouse.Salary & ":" &  westernhouse.getAllSlaries()
	
	































