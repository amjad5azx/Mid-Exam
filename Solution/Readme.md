How to run APIs?
----------------
    for running apis you need to run app.js. Before running check you have installed express js and mongoose.

GetRequest:
-----------
    For getting all tasks you need to run this link on postman using get request. Link http://localhost:3000/tasks. If found it will return data with status code 200. If not found, it will send you message that data is not found with status code 404 which means not found. If there is error in server it simply tell you that there is server error with status code 500

GetByID Request:
----------------
    For getting all tasks you need to run this link on postman using get request. Link http://localhost:3000/tasks/(here you need to enter id of task). If found it will return data with status code 200. If not found, it will send you message that data is not found with status code 404 which means not found. If there is error in server it simply tell you that there is server error with status code 500

addTask rquest:
--------------
    For Adding tasks you need to run this link on postman using post request. Link http://localhost:3000/tasks. If data is added successfully it will send you message of Data Added successfully with status code 200. If there is error in server it simply tell you that there is server error with status code 500

updateTask Request:
-------------------
    For Updating tasks you need to run this link on postman using put request. Link http://localhost:3000/tasks/(here you need to enter id of task). If data is updated successfully it will send you message of Data UPdated successfully with status code 200.If data not found, it will send you message that data is not found with status code 404 which means not found. If there is error in server it simply tell you that there is server error with status code 500

deleteTask Request:
--------------------
    For Updating tasks you need to run this link on postman using deleted request. Link http://localhost:3000/tasks/(here you need to enter id of task). If data is updated successfully it will send you message of Data deleted successfully with status code 200.If data not found, it will send you message that data is not found with status code 404 which means not found. If there is error in server it simply tell you that there is server error with status code 500
