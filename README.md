# E-Commerce Web API

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/guijoazeiro/eshop">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/guijoazeiro/eshop">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/guijoazeiro/eshop">
</p>

# Introduction
In this repository I created a REST API for a complete e-commerce using Express, MongoDB and JWT Authentication 


# Run

### Install

```
npm install
```

### Start API

```
npm start
```

# Routes

### Products

```
GET      /api/v1/products
GET      /api/v1/products/:id
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id
PUT gallery-images : /api/v1/products/gallery-images/:id
GET featured products: /api/v1/products/get/featured/:count
GET products count: /api/v1/products/get/count
```

### Orders

```
GET      /api/v1/orders
GET      /api/v1/orders/:id
POST     /api/v1/orders
PUT      /api/v1/orders/:id
DELETE   /api/v1/orders/:id
GET orders count: /api/v1/orders/get/count
```

### Users

```
GET      /api/v1/users
GET      /api/v1/users/:id
POST     /api/v1/users
PUT      /api/v1/users/:id
DELETE   /api/v1/users/:id
GET users count: /api/v1/users/get/count
```

#### Register new user

```
POST     /api/v1/users/register
```

#### Login user

To login the user and get the auth token you can use:

```
POST     /api/v1/users/login
```

