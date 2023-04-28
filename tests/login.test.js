const axios = require('axios');

describe('Login endpoint', () => {
    it('should return a success status code with valid credentials', async () => {
        const url = 'https://sasserver.software/api/login';
        const data = {
            userId: '200107119',
            password: 'mystrong1'
        };

        const response = await axios.post(url, data);

        expect(response.status).toBe(200);
    });

    it('should return a bad request status code with \'Wrong password\' message', async () => {
        const url = 'https://sasserver.software/api/login';
        const data = {
            userId: '200107119',
            password: 'mystrong'
        };

        try {
            await axios.post(url, data);
        } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data.message).toBe('Wrong password!');
        }
    });

    it('should return a bad request status code with \'User with id 200107202 not found!\' message', async () => {
        const url = 'https://sasserver.software/api/login';
        const userId = '200107202';
        const password = 'mystrong1';
        const data = {
            userId: userId,
            password: password
        };

        try {
            await axios.post(url, data);
        } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data.message).toBe('User with id ' + userId + ' not found!');
        }
    });
});







