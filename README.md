# Restaurants: Code Jam

> Build a restaurants application using AngularJS and the infamous Restaurants API.


  
### Restaurants API

Access the Restaurants API at the following baseUrl: https://helio-restaurants.mod.bz (Notice the https)

| Verb      | URL                       | Description                                                                                                                                                                    |
|:----------|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET       | /v1/restaurants           | Returns a list of restaurants.  The endpoint can optionally take two query string parameters: pageSize and index.  The pageSize has been defaulted to 100, and the index to 0. |
| POST      | /v1/restaurants           | Returns a 201 with the newly inserted restaurant                                                                                                                               |
| GET       | /v1/restaurants/:id       | Returns a restaurant                                                                                                                                                           |
| PUT/PATCH | /v1/restaurants/:id       | Updates a valid restaurant.  Returns the full restaurant if the update was successful.                                                                                         |
| DELETE    | /v1/restaurants/:id       | Deletes a restaurant b it's ID.  Will return a 204 no content if the delete was successful.                                                                                    |
| GET       | /v1/restaurants/favorites | Returns an array of favorite restaurants                                                                                                                                       |
| GET       | /v1/restaurants/top-rated | Returns an array of top-rated restaruants                                                                                                                                      |



