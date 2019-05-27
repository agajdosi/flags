import tornado.ioloop
import tornado.web
import sqlite3
from handlers import add,index,flags,flag

import argparse


def make_app():
    return tornado.web.Application([
        (r"/", index.Index),
        (r"/add", add.Add),
        (r"/flags", flags.Flags),
        (r"/flag", flag.Flag),  

        (r'/js/(.*)', tornado.web.StaticFileHandler, {'path': 'js/'}),
        (r'/css/(.*)', tornado.web.StaticFileHandler, {'path': 'css/'}),
        (r'/img/(.*)', tornado.web.StaticFileHandler, {'path': 'img/'}),
    ],
    template_path = "templates",
    debug = True
    )

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", "-p", help="defines which port will be used by webserver", type=int, default=8888)
    args = parser.parse_args()

    app = make_app()
    app.listen(args.port)
    print("server has started: http://localhost:" + str(args.port))
    tornado.ioloop.IOLoop.current().start()
