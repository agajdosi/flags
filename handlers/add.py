import tornado.web
import sqlite3

class Add(tornado.web.RequestHandler):
    def get(self):
        self.render("add.html")

    def post(self):
        name = self.get_argument("name")
        description = self.get_argument("description")
        username = self.get_argument("username")
        password = self.get_argument("password")
        email = self.get_argument("email")        
        image = self.get_argument("image")

        err = verifyUser(username, password, email)
        if err != None:
            self.render("error.html", error=err)
            return



        conn = sqlite3.connect('main.db')
        conn.execute("INSERT INTO flags (name, description, image) VALUES ('{0}', '{1}', '{2}')".format(name,description,image))
 
        conn.commit()
        conn.close()

        self.redirect("/flags")

def verifyUser(username, password, email):
    if not userExists(email):
        addUser(username, password, email)

    conn = sqlite3.connect('main.db')
    cursor = conn.execute("SELECT * from USERS WHERE email = '{0}'".format(email))

    user = cursor.fetchone()

    db_ID = user[0]
    db_username = user[1]
    db_password = user[2]
    db_email = user[3]

    conn.close()

    if password != db_password:
        return "Heslo se nehoduje s heslem v databazi!"
    if username != db_username:
        return "Vase jmeno se neshoduje se jmenem vedenym k emailu: " + db_username

    return None

def userExists(email):
    conn = sqlite3.connect('main.db')
    cursor = conn.execute("SELECT * from USERS WHERE email = '{0}'".format(email))
    user = cursor.fetchone()
    if user == None:
        return False
    else:
        return True


def addUser(username, password, email):
    conn = sqlite3.connect('main.db')
    conn.execute("INSERT INTO users (username, password, email) VALUES ('{0}', '{1}', '{2}')".format(username,password,email))
    conn.commit()
    conn.close()