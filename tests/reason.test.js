const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

const url = 'https://sasserver.software/api/recordSpecialReason'

describe('PDF file upload', () => {
    const pdfBuffer = fs.readFileSync(path.resolve(__dirname, 'test.pdf'));

    test('uploads a valid PDF file', async () => {
        const response = await axios.post(url, {
            "studentId": 200107119,
            "firstName": "Bakdaulet",
            "lastName": "Mukashov",
            "fromDate": new Date(),
            "toDate": new Date(),
            "type": "Illness",
            "file": pdfBuffer,
            "comment": "No comment",
            "fileName": 'test.pdf'
        });

        expect(response.status).toBe(200);
    });

    test('returns an error for an invalid file type', async () => {
        try {
            const response = await axios.post(url, {
                "studentId": 200107119,
                "firstName": "Bakdaulet",
                "lastName": "Mukashov",
                "fromDate": new Date(),
                "toDate": new Date(),
                "type": "Illness",
                "comment": "No comment",
                "fileName": 'test.pdf'
            });
        } catch (error) {
            expect(error.response.status).toBe(500);
        }
    });
});