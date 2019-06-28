#!/usr/bin/python
import mysql.connector
import cgi

cgitb.enable()

db = mysql.connector.connect(
  host="162.241.24.152",
  user="wnwyyumy_main",
  passwd="Pizzapants98"
)

cursor = db.cursor()

form = cgi.FieldStorage()
user = form.getvalue('username')
password = form.getvalue('password')
confirmpassword = form.getvalue('confirmpassword')

if (password == confirmpassword):
  sql = "INSERT INTO accounts (name, password) VALUES (%s, %s)"
  val = (user, password)
  cursor.execute(sql, val)
else:
  pass
