from flask import Flask, render_template
import time



app = Flask(__name__)

@app.route('/')
def react():
  return render_template('index_flask.html')

@app.route('/api', methods=['GET'])
def api():
	time.sleep(5)
	return "api call working!!!!!!", 200


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response



if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', port=5000)

