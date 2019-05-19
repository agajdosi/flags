import tornado.web

class Add(tornado.web.RequestHandler):
    def get(self):
        self.render("edit.html")
