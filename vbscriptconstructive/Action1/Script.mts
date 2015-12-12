Class Product
		Private productname
		Private productno
		Private productcode
		Private taxcode
		Private price

  Public Default Function Init(param1, param2, param3,param4,param5)
        	productname = param1
			productno =  param2 
			productcode = param3 
			taxcode=param4
			price=param5

			'Me means Current instance of class
			Set Init = Me
End Function

Public property get Productname1
    Productname1=productname
 End Property


 Public property get Productno1
		Productno1=productno
   End Property


Public property get Productcode1
		Productcode1=productcode
  End Property


Public property get taxcode1
taxcode1=taxcode
End Property

Public property get price1
price1=price
End Property

End class


Function  CreateObject1(one, two, three, four, five)
	 Set CreateObject1=(New Product)(one, two, three, four, five)
End Function

Dim k
Set k  = CreateObject1("Rice",10, "002","003",100)
msgbox k.Productname1  & ":" & k.Productno1 &  ":" &  k.Productcode1 & ";" & k.taxcode1 & ":" & k.price1



















