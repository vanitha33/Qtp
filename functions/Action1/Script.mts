Function power(x,y)
 i=x^y & ":" & x*y & ":" & x+y & ":" & x-y
 power=i
End Function

Function areaperi(r)
   area=(22/7)*r*r & ":" & 2*(22/7)*r
   areaperi=area
End Function

Dim k, i, j, area,r
i=CInt(inputbox("Enter number one"))
j=Cint(inputbox("Enter number two"))
k=power(i,j)

r=CInt(inputbox("Enter radius"))
area=areaperi(5)
msgbox area



