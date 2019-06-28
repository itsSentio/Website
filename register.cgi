#!/usr/bin/python
import mysql.connector

db = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="wilddog1015"
)

#sql = "INSERT INTO accounts (name, password) VALUES (%s, %s)"

cursor = db.cursor()
