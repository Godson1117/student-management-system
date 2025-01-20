# Student Management System API

This API allows administrators to manage students and tasks, and allows students to view and update the status of their tasks. The API follows a RESTful design and uses JSON format for both requests and responses. Authentication is performed using JWT tokens, and MongoDB Atlas is used for data storage.

---

## Base URL

`http://localhost:5000/api`

---

## Authentication Endpoints

### 1. Admin Login

**POST** `/api/auth/admin-login`

**Description**: Allows the admin to log in and get a JWT token to authenticate further requests.

**Request**:
- **Body**:
  ```json
  {
    "email": "admin@admin.com",
    "password": "admin"
  }

### 2. Student Login

**POST** `/api/auth/student-login`

**Description**: Allows students to log in and get a JWT token for further requests.

#### Request

- **URL**: `/api/auth/student-login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type`: `application/json`
  
- **Body** (JSON format):
  ```json
  {
    "email": "student@example.com",
    "password": "student_password"
  }

Admin Panel Endpoints
---------------------

### 3\. Add Student

**POST** `/api/students/add`

**Description**: Allows the admin to add a new student by providing their details.

**Request**:

-   **Headers**:
    -   `Authorization`: Bearer `jwt_token_here`
-   **Body**:
    ```json
    {
      "name": "John Doe",
      "email": "student@example.com",
      "department": "Computer Science",
      "password": "student_password"
    }
**Response**:

-   **Success**:

    ```json
    {
      "message": "Student added successfully"
    }
-   **Failure**:
    ```json
    {
      "message": "Student already exists"
    }
    Student Interface Endpoints

### 4\. View Tasks

**GET** `/api/tasks/:studentId`

**Description**: Allows students to view all the tasks assigned to them, along with their status.

**Request**:

-   **Headers**:
    -   `Authorization`: Bearer `jwt_token_here`
-   **Parameters**:
    -   `studentId`: The ID of the student whose tasks you want to view.

**Response**:

-   **Success**:

    ```json
    [
      {
        "_id": "task_id_1",
        "description": "Complete project report",
        "dueTime": "2025-01-30T10:00:00Z",
        "status": "pending"
      },
      {
        "_id": "task_id_2",
        "description": "Submit assignment",
        "dueTime": "2025-01-25T15:00:00Z",
        "status": "overdue"
      }
    ]
### 5\. Update Task Status

**PUT** `/api/tasks/:taskId/status`

**Description**: Allows students to update the status of a task (e.g., change it to "completed").

**Request**:

-   **Headers**:
    -   `Authorization`: Bearer `jwt_token_here`
-   **Parameters**:
    -   `taskId`: The ID of the task to be updated.
-   **Body**:

    ```json
    {
      "status": "completed"
    }

**Response** :

-   **Success**:

    ```json
    {
      "message": "Task status updated"
    }

-   **Failure**:

    ```json
    {
      "message": "Invalid status"
    }
    Task Management Endpoints (Admin)
---------------------------------

### 6\. Assign Task

**POST** `/api/tasks/assign`

**Description**: Allows the admin to assign a task to a student with a description and due time.

**Request**:

-   **Headers**:
    -   `Authorization`: Bearer `jwt_token_here`
-   **Body**:

    ```json
    {
      "studentId": "student_id_here",
      "description": "Complete the security audit",
      "dueTime": "2025-02-01T18:00:00Z"
    }

**Response**:

-   **Success**:

    ```json
    {
      "message": "Task assigned"
    }

-   **Failure**:

    ```json
    {
      "message": "Student not found"
    }


## Example Request/Response Samples

### Admin Login

-   **Request**:

    ```json    
    {
      "email": "admin@admin.com",
      "password": "admin"
    }

-   **Response**:
    ```json
    {
      "message": "Admin logged in",
      "token": "jwt_token_here"
    }

### Student Login

-   **Request**:

    ```json
    {
      "email": "student@example.com",
      "password": "student_password"
    }

-   **Response**:

    ```json
    {
      "message": "Student logged in",
      "token": "jwt_token_here"
    }

### Add Student (Admin)

-   **Request**:

    ```json
    {
      "name": "John Doe",
      "email": "student@example.com",
      "department": "Computer Science",
      "password": "student_password"
    }

-   **Response**:

    ```json
    {
      "message": "Student added successfully"
    }