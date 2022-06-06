/// <reference types="cypress" />
//JSON - Java script object notation

describe('JSON objects', () => {

    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = { "key": "value",  "key2": "value2" }

        const simpleArrayOfValues = ["one", "two", "three"]

        const arrayOfObjects = [{"key": "value"},  {"key2": "value2"}, {"key3": "value3"} ]

        const typesOfData = { "string": "this is a string", "number": 10 }

        const mix = {
            "FirstName": "Anna",
            "LastName": "Liul",
            "Age": 26,
            "Students": [
                {
                    "firstName": "Sarah",
                    "lastName": "Conor"
                },
                {
                    "firstName": "Alex",
                    "lastName": "Kov"
                }
            ]

        }

        // how to get value (data) from different objects
        console.log(simpleObject.key2)
        console.log(simpleObject["key2"])

        console.log(simpleArrayOfValues[1])
        console.log(arrayOfObjects[2].key3)

        console.log(mix.Students[0].firstName)


    })


})