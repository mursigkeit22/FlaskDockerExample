from flask import Flask, request
import logging
logging.basicConfig(format='%(asctime)s : %(levelname)s : %(funcName)s : %(message)s', level=logging.INFO)


flask_app = Flask(__name__)


@flask_app.route('/rocket/events', methods=["POST", "GET"])
def hello_world():
    print("received something")
    content = request.get_json()
    request_data = request.data
    print("got data")
    #print(request_data)
    logging.info(request)
    print(content)
    #print(content['channel_name'])
    return "Hello, World!"


if __name__ == '__main__':
    flask_app.run(debug=True, host='0.0.0.0', port=3002)
