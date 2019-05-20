import tornado.web
import sqlite3

class Flag(tornado.web.RequestHandler):
    def get(self):
        try:
            id = self.get_argument("id")
        except:
            self.redirect("/flags")

        conn = sqlite3.connect('main.db')
        cursor = conn.execute("SELECT * from FLAGS WHERE id = {0}".format(id))
        row = cursor.fetchone()

        flag = {
            "id": row[0],
            "name": row[1],
            "description": row[2],
            "owner" : row[3],
            "open" : row[4],
            "image" : row[5]}
    
        conn.close()
        self.render("flag.html", flag=flag)
