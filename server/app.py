from flask import Flask, jsonify, request
from employee_api import add_employee

app = Flask(__name__)

# User database (dummy data for demonstration purposes)
users = {
    "john": "password123",
    "emma": "secret456",
    "alice": "pass789"
}

# Endpoint for user login
@app.route('/login', methods=['POST'])
def login():
    print(request.json)
    print('login request')
    username = request.json.get('username')
    password = request.json.get('password')

    if username in users and users[username] == password:
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid username or password'})

# Endpoint for user logout
@app.route('/logout', methods=['GET'])
def logout():
    # Perform logout logic here
    print('logout')
    return jsonify({'message': 'Logged out successfully'})

if __name__ == '__main__':
    app.run(debug=True)
