
# Star Wars Characters Platform | Ravn

Welcome to my code challenge about Star Wars! \
I hope you're a real fan and *May the 4th be with you*!

![Demo](https://media2.giphy.com/media/zfN5r6xl3hT4wvjchF/giphy.gif)

# Usage

You only need to run the follow command in the projects root.

    ng serve

And that's it! enjoy it.

# Application Structure
- Tecnologies: **Angular v12**.
- Relevant packages: **Apollo Angular**.
- Folder structure:

```
- modules/
    - home/
        - interfaces/
        - services/
        - components/
    - characters/
        - interfaces/
        - components/
        - directives/
    - shared/
        - components/
- styles/
    - mixins/
    - values/
- app.component.ts
- app.component.html
- ...
```

# Data

For this example I'm using the GraphQL platform about this topic. Follow the next link to see more information.

    https://swapi-graphql.netlify.app


Currently I'm consuming the data with the following structure. \
(I'll use some static data for example purposes).

```
{
  allPeople(first: 1, after: "YXJyYXljb25uZWN0aW9uOjk=") {
    people {
      name
      homeworld {
        name
      }
      species {
        name
      }
      eyeColor
      skinColor
      hairColor
      birthYear
      vehicleConnection {
        vehicles {
          name
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
    }
  }
}
```

And here their respective result.

```
{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Anakin Skywalker",
          "homeworld": {
            "name": "Tatooine"
          },
          "species": null,
          "eyeColor": "blue",
          "skinColor": "fair",
          "hairColor": "blond",
          "birthYear": "41.9BBY",
          "vehicleConnection": {
            "vehicles": [
              {
                "name": "Zephyr-G swoop bike"
              },
              {
                "name": "XJ-6 airspeeder"
              }
            ]
          }
        }
      ],
      "pageInfo": {
        "hasNextPage": true,
        "hasPreviousPage": false,
        "endCursor": "YXJyYXljb25uZWN0aW9uOjEw"
      }
    }
  }
}
```
