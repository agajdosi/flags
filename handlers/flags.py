import tornado.web
import sqlite3

class Flags(tornado.web.RequestHandler):
    def get(self):

        conn = sqlite3.connect('main.db')
        cursor = conn.execute("SELECT * from FLAGS")
        rows = []
        for row in cursor:
            dic = {
                "id": row[0],
                "name": row[1],
                "description": row[2],
                "owner" : row[3],
                "open" : row[4],
                "image" : row[5]}
            rows.append(dic)

        conn.close()
        self.render("flags.html", flags=rows, subtitle="seznam vlajek")