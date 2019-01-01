# CURD-REST-API
For development Examples CREATE , UPDATE,READ,DELETE

GET REQUEST:
http://localhost:3000/record/GetRec?emailid=zeos@gmail.com


POST REQUEST:
http://localhost:3000/record/regis

Json Input

{
	
	"emailid" : "zeos@gmail.com",
	"name" : "bala",
	"password" : "test123",
	"age" : 22,
	"gender":"male",
	"mobile":995327
}

PUT REQUEST
http://localhost:3000/record/updatePass

JSON INPUT
{
	"emailid" : "zeos@gmail.com",
	"password" : "test200",
	"mobile" : 34224
}

DELETE REQUEST
http://localhost:3000/record/deleRec

JSON INPUT
{
	"emailid" : "zeos@gmail.com"
}

