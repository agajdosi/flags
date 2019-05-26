import sqlite3

def verifyUser(username, password, email):
    if not userExists(email):
        addUser(username, password, email)

    conn = sqlite3.connect('main.db')
    cursor = conn.execute("SELECT id, username, password, email from USERS WHERE email = '{0}'".format(email))

    user = cursor.fetchone()

    db_ID = user[0]
    db_username = user[1]
    db_password = user[2]
    db_email = user[3]

    conn.close()

    err = None
    if password != db_password:
        err = "Heslo se nehoduje s heslem v databazi!"
    if username != db_username:
        err = "Vase jmeno se neshoduje se jmenem vedenym k emailu: " + db_username

    return err, db_ID

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