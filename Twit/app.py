from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route('/')
@app.route('/home', methods=['GET', 'POST'])
def home():
    name = request.form.get('name')
    return render_template('home.html', name=name)

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/logout')
def logout():
    request.method = 'GET'
    return redirect('/home')
