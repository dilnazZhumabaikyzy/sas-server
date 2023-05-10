const axios = require('axios');

describe('Search student endpoint', () => {
    it('should return a correct user from database with given name', async () => {
        const expectedUser = {
            "studentId": 200107119,
            "authorizedId": null,
            "user": {
                "firstName": "Bakdaulet",
                "lastName": "Mukashov"
            }
        }

        const url = 'https://sasserver.software/api/searchStudents';
        const data = {
            key: 'Bakdaulet'
        };

        const response = await axios.post(url, data);
        expect(response.status).toBe(200);
        expect(response.data[0]).toStrictEqual(expectedUser)
    });

    it('should return a correct user from database with given id', async () => {
        const expectedUser = {
            "studentId": 200107114,
            "authorizedId": null,
            "user": {
                "firstName": "Dilnaz",
                "lastName": "Zhumabaikyzy"
            }
        }

        const url = 'https://sasserver.software/api/searchStudents';
        const data = {
            key: '200107114'
        };

        const response = await axios.post(url, data);
        expect(response.status).toBe(200);
        expect(response.data[0]).toStrictEqual(expectedUser)
    });

    it('should return a list of users from database with given key', async () => {
        const expectedResponse = [
            {
                "studentId": 200107113,
                "authorizedId": 200107114,
                "user": {
                    "firstName": "Akniyet",
                    "lastName": "Talgatkyzy"
                }
            },
            {
                "studentId": 200107115,
                "authorizedId": 200107114,
                "user": {
                    "firstName": "Azat",
                    "lastName": "Kulakhmet"
                }
            },
            {
                "studentId": 200107116,
                "authorizedId": 200107114,
                "user": {
                    "firstName": "Damir",
                    "lastName": "Aliyev"
                }
            },
            {
                "studentId": 200107117,
                "authorizedId": null,
                "user": {
                    "firstName": "Akbope",
                    "lastName": "Zhengiskhan"
                }
            },
            {
                "studentId": 200107073,
                "authorizedId": null,
                "user": {
                    "firstName": "Aslan",
                    "lastName": "Abenov"
                }
            },
            {
                "studentId": 200107080,
                "authorizedId": null,
                "user": {
                    "firstName": "Arnibek",
                    "lastName": "Nussupekov"
                }
            }
        ]

        const url = 'https://sasserver.software/api/searchStudents';
        const data = {
            key: 'A'
        };

        const response = await axios.post(url, data);
        expect(response.status).toBe(200);
        expect(response.data).toStrictEqual(expectedResponse)
    });

    it('should return a correct user from database with given name', async () => {
        const expectedResponse = []

        const url = 'https://sasserver.software/api/searchStudents';
        const data = {
            key: 'Samat'
        };

        const response = await axios.post(url, data);
        expect(response.status).toBe(200);
        expect(response.data).toStrictEqual(expectedResponse)
    });
});