# import Flask class/library
from flask import Flask, jsonify
from flask_cors import CORS

# create flask app object
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the Contacts API!"})


@app.route("/contacts", methods=["GET"])
def get_contacts():

    contacts = [
        {
            "name": "John Smith",
            "phone": "123-456-7890",
            "address": "San Francisco",
            "email": "john@example.com",
            "occupation": "Engineer"
        },
        {
            "name": "Sam Pontip",
            "phone": "123-456-7987",
            "address": "Texas",
            "email": "sam@example.com",
            "occupation": "Business Owner"
        },
        {
            "name": "Jane Doe",
            "phone": "123-456-7891",
            "address": "New York",
            "email": "jane@example.com",
            "occupation": "Designer"    
        }
    ]
    return jsonify(contacts)

if __name__ == "__main__":
    app.run(debug=True)


