import tornado.ioloop
import tornado.web

class Index(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

class Flags(tornado.web.RequestHandler):
    def get(self):
        self.render("flags.html")

class Edit(tornado.web.RequestHandler):
    def get(self):
        self.render("edit.html")

class Add(tornado.web.RequestHandler):
    def get(self):
        self.render("edit.html")

def make_app():
    return tornado.web.Application([
        (r"/", Index),
        (r"/flags", Flags),
        (r"/edit", Edit),
        (r"/add", Add),

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
