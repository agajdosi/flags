import tornado.ioloop
import tornado.web
import pymysql.cursors
import sqlite3
from handlers import add,index,flags,flag


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
    app = make_app()
    app.listen(8888)
    print("server has started")
    tornado.ioloop.IOLoop.current().start()
