import tornado.web

class Edit(tornado.web.RequestHandler):
    def get(self):
        self.render("edit.html")
