import tornado.ioloop
import tornado.web
import pymysql.cursors
import sqlite3
from handlers import add,index,edit,flags,flag


def make_app():
    return tornado.web.Application([
        (r"/", index.Index),
        (r"/flags", flags.Flags),
        (r"/flag", flag.Flag),
        (r"/edit", edit.Edit),
        (r"/add", add.Add),

        (r'/js/(.*)', tornado.web.StaticFileHandler, {'path': 'js/'}),
        (r'/css/(.*)', tornado.web.StaticFileHandler, {'path': 'css/'}),
        (r'/img/(.*)', tornado.web.StaticFileHandler, {'path': 'img/'}),
    ],
    template_path = "templates"
    )

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
