import tornado.web
import sqlite3

from . import login

class Flag(tornado.web.RequestHandler):
    def get(self):
        try:
            ID = self.get_argument("id")
        except:
            self.redirect("/flags")

        conn = sqlite3.connect('main.db')
        cursor = conn.execute("SELECT id, name, description, owner, image FROM flags WHERE id = {0}".format(ID))
        row = cursor.fetchone()
        
        ownerID = row[3]
        cursor = conn.execute("SELECT username FROM users WHERE id = {0}".format(ownerID))
        ownerName = cursor.fetchone()[0]

        flag = {
            "id": row[0],
            "name": row[1],
            "description": row[2],
            "owner": ownerName,
            "image" : row[4]}

        cursor = conn.execute("SELECT username FROM users WHERE supports = {0}".format(ID))
        users = []
        for row in cursor:
            users.append(row[0])

        conn.close()
        self.render("flag.html", subtitle=flag["name"], flag=flag, users=users)

    def post(self):
        username = self.get_argument("username")
        password = self.get_argument("password")
        email = self.get_argument("email")        
        flagID = self.get_argument("id")

        err, userID = login.verifyUser(username, password, email)
        if err != None:
            self.render("error.html", error=err)
            return

        conn = sqlite3.connect('main.db')
        conn.execute("UPDATE users SET supports = {0} WHERE ID = {1}".format(flagID, userID))
 
        conn.commit()
        conn.close()

        self.redirect("/flags")