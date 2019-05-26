import tornado.web
import sqlite3

from . import login

class Add(tornado.web.RequestHandler):
    def get(self):
        self.render("add.html", subtitle="Pridat vlajku")

    def post(self):
        name = self.get_argument("name")
        description = self.get_argument("description")
        username = self.get_argument("username")
        password = self.get_argument("password")
        email = self.get_argument("email")        
        image = self.get_argument("image")

        err, userID = login.verifyUser(username, password, email)
        if err != None:
            self.render("error.html", error=err)
            return

        # insert flag info
        conn = sqlite3.connect('main.db')
        conn.execute("INSERT INTO flags (name, description, image, owner) VALUES ('{0}', '{1}', '{2}', '{3}')".format(name,description,image,userID))

        # update user to support created flag
        conn.execute("UPDATE users SET supports = LAST_INSERT_ROWID() WHERE ID = {0}".format(userID))
 
        conn.commit()
        conn.close()

        self.redirect("/flags")


