import unittest
import json
from flask import Flask

class APITestCase(unittest.TestCase):
    def setUp(self):
        self.app = Flask(__name__)
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()

    def test_login_success(self):
        data = {
            'username': 'john',
            'password': 'password123'
        }
        response = self.client.post('/login', data=json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['message'], 'Login successful')

    def test_login_invalid_credentials(self):
        data = {
            'username': 'john',
            'password': 'wrongpassword'
        }
        response = self.client.post('/login', data=json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['message'], 'Invalid username or password')

    def test_logout(self):
        response = self.client.get('/logout')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['message'], 'Logged out successfully')

if __name__ == '__main__':
    unittest.main()
