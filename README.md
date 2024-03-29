# ajargh-restaurant
# ajargh-restaurant

reference:
Sign up user

```http
  POST localhost:3001/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`   | `string` | **Required**. Email        |
| `password`| `string` | **Required**. Password     |

**Example** :
```example
    {
      "email":"dhruvrai01@hotmail.com",
      "password":"dhruvrai01@foodistan"
    }
```
**Output**:
```example
  {
    "success": true,
    "msg": "Signup successfully",
    "data": {
        "user": {
            "email": "123@hotmail.com",
            "password": "$2b$10$gBfnnKw4FETma7Aps6WzT.BENAyt03ZyLdkbgkltAn6eI.3Joj.i2",
            "_id": "63c0f5579b912946ada52a7d",
            "createdAt": "2023-01-13T06:08:23.060Z",
            "updatedAt": "2023-01-13T06:08:23.060Z",
            "__v": 0
        }
    }
  }
```


 Login user

```http
  Post localhost:3001/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email|
| `password` | `string` | **Required**. Password|


**Example** :
```example
    {
      "email":"123@hotmail.com",
      "password":"1223@foodistan"
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

Note :After Login a Token will be generate which will be used for authenticate the user 


 Access Token for all api

| Query Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `secret_token` | `string` | **Required**. token|


Add restaurant

```http
  POST localhost:3001/api/v1/restaurant
```

| Body(x-www-form-urlencoded) | Type     | Description  |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**. Name of the food item |

 Example
```
    localhost:3001/api/v1/restaurant?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzU5NDgwNn0.u6XifNi20m7P8P9bIZ08vedgZk3TPdovZKVnibUJ5Nk
```



 Add Food Items to database

```http
  POST localhost:3001/api/v1/food
```

| Body(x-www-form-urlencoded) | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**. Name of the food item |
| `price` | `integer` | **Required**.  price of that item|
| `restaurant` | `ObjectId` | **Required**.  Name of the restaurant|

 Example
```
  localhost:3001/api/v1/food?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzU5NDgwNn0.u6XifNi20m7P8P9bIZ08vedgZk3TPdovZKVnibUJ5Nk
```


 Delete Food

```http
  DELETE localhost:3001/api/v1/food/:id
```

| Path Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`    | `ObjectId` | **Required**. Id of the food |

 Example

```
  localhost:3001/api/v1/food/63c1132e8f76cb23ebd01019/63c1119c8f76cb23ebd0100c?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzYyNzA1M30.FmAymtWpzL-eiFuI1D9KPidU5t8PJgCq_lws69HRdG0
```

 Show List of all food items of a restaurant

```http
  GET localhost:3001/api/v1/restaurant/:id
```

| Path Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`    | `ObjectId` | **Required**. Restaurant id |

 Example URL

```
  localhost:3001/api/v1/restaurant/63c1119c8f76cb23ebd0100c?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzYyNzA1M30.FmAymtWpzL-eiFuI1D9KPidU5t8PJgCq_lws69HRdG0
```


 Delete restaurant from database

```http
  DELETE localhost:3001/api/v1/restaurant/:id
```

| Path Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`    | `ObjectId` | **Required**. Restaurant id |

 Example URL

```
  localhost:3001/api/v1/restaurant/63c111e18f76cb23ebd0100e?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzYyNzA1M30.FmAymtWpzL-eiFuI1D9KPidU5t8PJgCq_lws69HRdG0
```
 Order Food

```http
  PUT localhost:3001/api/v1/order
```

| Body(x-www-form-urlencoded) | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `restaurant`    | `ObjectId` | **Required**. Restaurant id |
| `food`    | `ObjectId` | **Required**. Food id |


 Example URL

```example
  localhost:3001/api/v1/order?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzU5NDgwNn0.u6XifNi20m7P8P9bIZ08vedgZk3TPdovZKVnibUJ5Nk
```


 Get Order By Id

```http
  GET localhost:3001/api/v1/order/:id
```

| Path Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Order Id`    | `ObjectId` | **Required**. Order id |

```example
  localhost:3001/api/v1/order/63c197e7c63ce3740cc8c3fc?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzU5NDgwNn0.u6XifNi20m7P8P9bIZ08vedgZk3TPdovZKVnibUJ5Nk
```

 Put Items to cart and order
```http
  POST localhost:3001/api/v1/order
```

| Body(x-www-form-urlencoded) | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `restaurant`    | `ObjectId` | **Required**. Restaurant id |
| `food`    | `ObjectId` | **Required**. Food id |
| `order`    | `ObjectId` | **Required**. Order id |

```example
  localhost:3001/api/v1/order?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzU5NDgwNn0.u6XifNi20m7P8P9bIZ08vedgZk3TPdovZKVnibUJ5Nk
```
 Get Total price of order

```http
  GET localhost:3001/api/v1/order/:id
```
| Body(x-www-form-urlencoded) | Type     | Description|
| :-------- | :------- | :------------------------- |
| `id`    | `ObjectId` | **Required**. Order id |

```example
    localhost:3001/api/v1/order/63c197e7c63ce3740cc8c3fc/total?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzU5NDgwNn0.u6XifNi20m7P8P9bIZ08vedgZk3TPdovZKVnibUJ5Nk
```

 Update Order

```http
  PATCH localhost:3001/api/v1/order/:id
```
| Body(x-www-form-urlencoded) | Type     | Description|
| :-------- | :------- | :------------------------- |
| `status`    | `string` | **Required**. status of order |

| Path Params | Type     | Description|
| :-------- | :------- | :------------------------- |
| `id`    |  `ObjectId` | **Required**. Order Id |

Example:
```example
    localhost:3001/api/v1/order/63c197e7c63ce3740cc8c3fc?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzU5NDgwNn0.u6XifNi20m7P8P9bIZ08vedgZk3TPdovZKVnibUJ5Nk
```

Update Order

```http
  PATCH localhost:3001/api/v1/order
```
| Body(x-www-form-urlencoded) | Type     | Description|
| :-------- | :------- | :------------------------- |
| `id`    | `ObjectId` | **Required**. Order Id |
| `food`    | `ObjectId` | **Required**. Food Id |

```example
  localhost:3001/api/v1/order?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzBmNTU3OWI5MTI5NDZhZGE1MmE3ZCIsImVtYWlsIjoibGl0dW5uYXlhazA5QGhvdG1haWwuY29tIn0sImlhdCI6MTY3MzU5NDgwNn0.u6XifNi20m7P8P9bIZ08vedgZk3TPdovZKVnibUJ5Nk
```