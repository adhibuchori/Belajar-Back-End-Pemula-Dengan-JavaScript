# Bookshelf API  

## 📝 Project Brief

Bookshelf API is a simple API to manage a collection of books. It allows you to add, retrieve, update, and delete books from your bookshelf.   

## 💡 How to Run  

To get the project up and running on your local machine, follow these steps:  

1. Install the necessary dependencies 
    ```bash  
    npm install  
    ```  

2. Start the application
    ```bash  
    npm run start  
    ```  

## 🌱 Testing  

You can download the API collection and environment [here](https://github.com/dicodingacademy/a261-backend-pemula-labs/raw/099-shared-files/BookshelfAPITestCollectionAndEnvironment.zip).  

## ✨ Bookshelf API Submission Rating  
![Submission Rating of Belajar Back-End Pemula dengan JavaScript!](/assets/FinalProject-BBEPJ-Rating.png "Final Project Rating")

## ✅ Bookshelf API Submission Checklist  

- [x] The API can save books.  
- [x] The API can display all books.  
- [x] The API can show details of a book.  
- [x] The API can update book data.  
- [x] The API can delete books.  
- [x] The project runs on port 9000.  
- [x] The project has a runner script named `start`.  

## ✅ Optional Checklist  

- [x] Add query parameters to the `GET /books` route (to retrieve all books):  
    - [x] `?name`: Display all books containing the name based on the provided query value. For example, `/books?name="dicoding"` will return a list of books that contain the name "dicoding" in a case-insensitive manner.  
    - [x] `?reading`: Accepts 0 or 1. If 0, display books that are currently not being read (`reading: false`). If 1, display books that are being read (`reading: true`). Additionally, display books regardless of their reading status.  
    - [x] `?finished`: Accepts 0 or 1. If 0, display books that are not finished reading (`finished: false`). If 1, display books that are finished reading (`finished: true`). Additionally, display books regardless of their finished status.  
