# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

- SELECT ProductName, CategoryName from [Products] INNER JOIN [Categories] ON Products.CategoryID = Categories.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

- SELECT OrderID, ShipperName, OrderDate from Orders as o INNER JOIN Shippers as s ON o.ShipperID = s.ShipperID ORDER BY OrderDate = '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

- SELECT ProductName, Quantity from Products as p INNER JOIN OrderDetails as od ON p.ProductID = od.ProductID INNER JOIN Orders as o ON od.OrderID = o.OrderID WHERE o.OrderID = 10251 ORDER BY ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

- SELECT OrderID, CustomerName, LastName as EmployeeLastName from Orders as o INNER JOIN Customers as c ON o.CustomerID = c.CustomerID INNER JOIN Employees as e ON o.EmployeeID = e.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 