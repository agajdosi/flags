import tornado.web

class Flags(tornado.web.RequestHandler):
    def get(self):
        self.render("flags.html")