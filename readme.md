# CSE3112: Software Engineering Lab and CSE3162: Software Development Lab II --> The Museum API


# Overview

This is a API of the Museums of University of Rajshahi.This API can be accessed at localhost:3000/api/museums

# Software Requirement Specification

1. The API users can GET,UPDATE,DELETE,POST the list of museums(name,address of Rajshahi University.
2. The API users can GET,UPDATE,DELETE,POST would find the history(name,estabished date,established by, architect,area,notable collections and about)  of every museum .
3. The API users can GET,UPDATE,DELETE,POST list of  collections(product name,product no,product type,product origin,donators adress and mobile numbers,product background,donate date) of every museum .
4. The API users can GET,UPDATE,DELETE,POST Shedules(start time,end time,lunch break,visting days,upcoming events,workshop and ticket price)  of Events.
5..The API users can GET,UPDATE,DELETE,POST the list of officers(name,position,office adress,email,phone(office),phone(res),salary,NID number and date of join).


# API Documentation


**Show List of Museums**
----
  Returns json data about the list of museums.

* **URL**

  localhost:3000/api/museums/list

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
      
    {
  
    {

    "_id": "5b655735af65a50b98c79a18",
    "name":"Varentra Research Museum",
    "address":Serushar Para, College Road, Boalia,Rajshahi"
    
    }

    }

	
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "User doesn't exist"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**POST list of Museums**
----
  Posts json data about the list of the museums.

* **URL**

  localhost:3000/api/museums/list

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `
    { 
       {
    	 
    {

    "_id": "5b655735af65a50b98c79a18",
    "name":"Varentra Research Museum",
    "address":Serushar Para, College Road, Boalia,Rajshahi"
    
    }

	

    
    }`

  * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Object Not Created"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**PUT/UPDATE list of Museums**
----
 Updates json data about the list of museums.

* **URL**

  localhost:3000/api/museums/list/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 202 <br />
    **Content:** `
    { 
     
    {

    "_id": "5b655735af65a50b98c79a18",
    "name":"Varentra Research Museum",
    "address":Serushar Para, College Road, Boalia,Rajshahi"
    
    }

	

    
    }`

    * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Cannot Find The id"
    }`




* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list/:id",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete list of ID of Museums**
----
  Deletes json data about the specefic id of the museum.

* **URL**

  localhost:3000/api/museums/list/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** 
    []


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list/:id",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show Schedules of Museums**
----
  Returns json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/schedules

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    Content: ` { { "_id": "5b655735af65a50b98c79a18", "address": "Jadugor Mor,Rajshahi", "open_time": "10.00am", "closed_time": "5.00pm", "visiting_days": "Sunday,Monday,Wednesday,Tuesday,Thursday", "upcoming_events": "Edul Azha", "upcoming_events_date": "23 August", "upcoming_workshop": "Know history,Create history", "upcoming_workshop_date": "10-09-2018", "ticket_price": "10 TK", "__v": 0 }


 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       {
        "_id": "5b655735af65a50b98c79a18",
        "address": "Jadugor Mor,Rajshahi",
        "open_time": "10.00am",
        "closed_time": "5.00pm",
        "visiting_days": "Sunday,Monday,Wednesday,Tuesday,Thursday",
        "upcoming_events": "Edul Azha",
        "upcoming_events_date": "23 August",
        "upcoming_workshop": "Know history,Create history",
        "upcoming_workshop_date": "10-09-2018",
        "ticket_price": "10 TK",
        "__v": 0
       }
    
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/schedules",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show Schedules of Museums**
----
  Returns json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/schedules

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `
    { 
       {
        "_id": "5b655735af65a50b98c79a18",
        "address": "Jadugor Mor,Rajshahi",
        "open_time": "10.00am",
        "closed_time": "5.00pm",
        "visiting_days": "Sunday,Monday,Wednesday,Tuesday,Thursday",
        "upcoming_events": "Edul Azha",
        "upcoming_events_date": "23 August",
        "upcoming_workshop": "Know history,Create history",
        "upcoming_workshop_date": "10-09-2018",
        "ticket_price": "10 TK",
        "__v": 0
       }
    
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/schedules",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Show Schedules of Museums**
----
  Returns json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/schedules

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `
    { 
       {
        "_id": "5b655735af65a50b98c79a18",
        "address": "Jadugor Mor,Rajshahi",
        "open_time": "10.00am",
        "closed_time": "5.00pm",
        "visiting_days": "Sunday,Monday,Wednesday,Tuesday,Thursday",
        "upcoming_events": "Edul Azha",
        "upcoming_events_date": "23 August",
        "upcoming_workshop": "Know history,Create history",
        "upcoming_workshop_date": "10-09-2018",
        "ticket_price": "10 TK",
        "__v": 0
       }
    
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/schedules",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show Schedules of Museums**
----
  Returns json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/schedules

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/schedules",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```






**Show History of Museums**
----
  Returns json data about the history of museums.

* **URL**

  localhost:3000/api/museums/history

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
      
        
   	 {
   	 "_id": "5b657fc9e8698e714bcab508",
   	 "official_name": "Varendra Research Museum ",
    	"established": "1910",
    	"established_by": "Kumar Sarat",
    	"architect": "L.S. Charmaichel",
    	"area": "20 acr",
    	"notable_collections": "Puthis of Ancient time",
    	"about": "largest museum of Bangladesh",
    	"__v": 0
	}
	
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "History doesn't exist"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/history",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**POST history of Museums**
----
  POSTs json data about the history of the museums.

* **URL**

  localhost:3000/api/museums/history

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `
    { 
        {
   	 "_id": "5b657fc9e8698e714bcab508",
   	 "official_name": "Varendra Research Museum ",
    	"established": "1910",
    	"established_by": "Kumar Sarat",
    	"architect": "L.S. Charmaichel",
    	"area": "20 acr",
    	"notable_collections": "Puthis of Ancient time",
    	"about": "largest museum of Bangladesh",
    	"__v": 0
	}
    
    }`

  * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Object Not Created"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/history",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**PUT/UPDATE history of Museums**
----
 Updates json data about the history of museums.

* **URL**

  localhost:3000/api/museums/history/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 202 <br />
    **Content:** `
    { 
        {
   	 "_id": "5b657fc9e8698e714bcab508",
   	 "official_name": "Varendra Research Museum ",
    	"established": "1910",
    	"established_by": "Kumar Sarat",
    	"architect": "L.S. Charmaichel",
    	"area": "20 acr",
    	"notable_collections": "Puthis of Ancient time",
    	"about": "largest museum of Bangladesh",
    	"__v": 0
	}
    
    }`

    * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Cannot Find The id"
    }`




* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/history/:id",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete history of ID of Museums**
----
  Deletes json data about the specefic id of history of the museum.

* **URL**

  localhost:3000/api/museums/history/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** 
    []


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/history/:id",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show Officers Lists of Museums**
----
  Returns json data about the list officers of museums.

* **URL**

  localhost:3000/api/museums/list_officers

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
      
        
   	 "_id": "5b656f7a9ca4da5e34567cf8",
   	 "name": "Ruhul Ameen",
    	"position": "Director",
   	 "Office": "2nd Floor,VRM",
   	 "email": "ameensunny242@gmail.com",
   	 "phone_office": "0721-776666",
   	 "phone_res": "90980988",
   	 "mobile": "01521300804",
   	 "Salary": "80K",
   	 "NID": "883738383892902",
    	"dateOfJoin": "11 Nov, 2000",
    	"__v": 0
	
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "User doesn't exist"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list_officers",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**POST officers list of Museums**
----
  Posts json data about the list of officers of the museums.

* **URL**

  localhost:3000/api/museums/list_officers

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `
    { 
       {
    	 "_id": "5b6575289ca4da5e34567cf9",
    	"name": "Kakon Mehedi",
    	"position": "Executive Officer",
    	"Office": "1st Floor,VRM",
    	"email": "mehedidhkakon@gmail.com",
    	"phone_office": "0721-779911",
    	"phone_res": "909988988",
    	"mobile": "01716482871",
    	"Salary": "50K",
    	"NID": "77765646437383",
    	"dateOfJoin": "05 Dec, 2005",
    	"__v": 0
       }
    
    }`

  * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Object Not Created"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list_officers",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**PUT/UPDATE oficers list of Museums**
----
 Updates json data about the schedules of museums.

* **URL**

  localhost:3000/api/museums/list_officers/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 202 <br />
    **Content:** `
    { 
       {
    	 "_id": "5b6575289ca4da5e34567cf9",
    	"name": "Kakon Mehedi",
    	"position": "Executive Officer",
    	"Office": "1st Floor,VRM",
    	"email": "mehedidhkakon@gmail.com",
    	"phone_office": "0721-779911",
    	"phone_res": "909988988",
    	"mobile": "01716482871",
    	"Salary": "50K",
    	"NID": "77765646437383",
    	"dateOfJoin": "05 Dec, 2005",
    	"__v": 0
       }
    
    }`

    * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Cannot Find The id"
    }`




* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list_officers/:id",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete officers list of ID of Museums**
----
  Deletes json data about the specefic id of list officers of the museum.

* **URL**

  localhost:3000/api/museums/list_officers/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** 
    []


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/list_officers/:id",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show Collection of Museums**
----
  Returns json data about the collection of museums.

* **URL**

  localhost:3000/api/museums/collection

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    {  
      
    {

    "_id": "5b655735af65a50b98c79a18",
    
    "product_name":"palmurti",
    "product_no":"01",
    "product_type":"murti",
    "product_origin":"md araf",
    "origin_address":"natore",
    "origin_mobile_no":"01725647764",
    "product_background":"natore_museum",
    "submission_date":"07.10.17"


    
    }

    }

	
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "User doesn't exist"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/collection",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**POST collection of Museums**
----
  Posts json data about the collection of the museums.

* **URL**

  localhost:3000/api/museums/collection

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `
    {
    	 
    {

    "_id": "5b655735af65a50b98c79a18",
    
    "product_name":"palmurti",
    "product_no":"01",
    "product_type":"murti",
    "product_origin":"md araf",
    "origin_address":"natore",
    "origin_mobile_no":"01725647764",
    "product_background":"natore_museum",
    "submission_date":"07.10.17"



    }

	
    }`

  * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Object Not Created"
    }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/collection",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**PUT/UPDATE collection of Museums**
----
 Updates json data about the collection of museums.

* **URL**

  localhost:3000/api/museums/collection/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 202 <br />
    **Content:** `
    { 
     
    {

    

    "_id": "5b655735af65a50b98c79a18",
    
    "product_name":"palmurti",
    "product_no":"01",
    "product_type":"murti",
    "product_origin":"md araf",
    "origin_address":"natore",
    "origin_mobile_no":"01725647764",
    "product_background":"natore_museum",
    "submission_date":"07.10.17"


    
    }

	

    
    }`

    * **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `
    { 
       error : "Cannot Find The id"
    }`




* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/collection/:id",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete collection of ID of Museums**
----
  Deletes json data about the specefic id of collection of the museum.

* **URL**

  localhost:3000/api/museums/collection/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** 
    []


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "localhost:3000/api/museums/collection/:id",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```

# Contributer:
This API is developed by  4 students of department Computer Science and Engineering,University of Rajshahi.
(Group 2)
1. Ayesha Sultana : 14225406
2. Ayesha Siddika Mou : 1612376149
3. Mohd. Ruhul Ameen : 1610676102
4. MD. Atiqur Rahaman : 1610876133



