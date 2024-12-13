from flask import Flask, request
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():

    # Returning an api for showing in  reactjs
    return {
        'Name':"geek",
        "Age":"22",
        "Date":x,
        "programming":"python"
        }

@app.route('/add', methods=['POST'])
def handel_add():
    n1=eval(request.form['n1'])
    n2=eval(request.form['n2'])
    n3=n1+n2
    return {'r':n3}

# Running app
if __name__ == '__main__':
    app.run(debug=True)