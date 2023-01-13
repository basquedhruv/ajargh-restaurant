
# Food Order API

Implemented the functions of an Food delivary Website that performs various functions like sign up, log out, add to
cart, and much more, developed using Nodejs, express.js, JavaScript, and mongoDB.




## API Reference





#### Sign up user

```http
  POST localhost:5000/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`   | `string` | **Required**. Email        |
| `password`| `string` | **Required**. Password     |

**Example** :
```example
    {
      "email":"litunnayak@hotmail.com",
      "password":"litunnayak@foodistan"
    }
```
**Output**:
```example
  {
    "success": true,
    "msg": "Signup successfully",
    "data": {
        "user": {
            "email": "litunnayak@hotmail.com",
            "password": "$2b$10$gBfnnKw4FETma7Aps6WzT.BENAyt03ZyLdkbgkltAn6eI.3Joj.i2",
            "_id": "63c0f5579b912946ada52a7d",
            "createdAt": "2023-01-13T06:08:23.060Z",
            "updatedAt": "2023-01-13T06:08:23.060Z",
            "__v": 0
        }
    }
  }
```


#### Login user

```http
  Post localhost:5000/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email|
| `password` | `string` | **Required**. Password|


**Example** :
```example
    {
      "email":"litunnayak@hotmail.com",
      "password":"litunnayak@foodistan"
    }
```

**Output**:
```example
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzU5MDEzOH0.Lzk06HCfsAR_zepSJDglhYcNegYGy_58bA84GdDYdhA",
    "success": true,
    "msg": "Successfully signed in"
  }
```

**Note** :After Login a Token will be generate which will be used for authenticate the user


####Access Token for all api

| Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `secret_token` | `string` | **Required**. token|






#### Add Food Items to database

```http
  POST localhost:5000/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**. Name of the food item |
| `price` | `integer` | **Required**.  price of that item|


#### Delete Food

```http
  DELETE localhost:5000/api/v1/food/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`    | `string` | **Required**. Id of the food |






#### Create restaurant

```http
  POST localhost:5000/api/v1/restaurant
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**. Name of the restaurant |
| `address` | `string` | **Required**. Address of the restaurant |
| `Foods` | `string` | **Required**. Foods  |


#### Show List of all food item

```http
  GET localhost:5000/api/v1/restaurant/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`    | `string` | **Required**. Restaurant id |

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dibyakanta-nayak-77bab11b9)


## Authors

- [@Litun098](https://github.com/Litun098)

