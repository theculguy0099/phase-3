from flask import Flask, render_template, request, jsonify
import mysql.connector

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

# MySQL configuration
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="new_password",
    database="playlist"
)

# Create a cursor
mycursor = mydb.cursor()

# Create songs table if it doesn't exist
mycursor.execute("CREATE TABLE IF NOT EXISTS songs (id INT AUTO_INCREMENT PRIMARY KEY, songname VARCHAR(255))")
# Route for adding a new song to the songs table
@app.route('/add_song', methods=['POST'])
def add_song():
    # Get data from form
    songname = request.form['songname']
    
    # Check if song already exists in database
    sql = "SELECT * FROM songs WHERE songname = %s"
    val = (songname,)
    mycursor.execute(sql, val)
    result = mycursor.fetchone()
    if result:
        return jsonify({'status': 'duplicate'})
    else:
        # Insert data into songs table
        sql = "INSERT INTO songs (songname) VALUES (%s)"
        val = (songname,)
        mycursor.execute(sql, val)
        mydb.commit()
        return jsonify({'status': 'success'})

# Route for adding a new song to the songs table using song ID
@app.route('/add-to-playlist', methods=['POST'])
def add_to_playlist():
    song_id = request.json['song_id']
    song_name = request.json['song_name']
    # Check if song already exists in database
    sql = "SELECT songname FROM songs WHERE id = %s"
    val = (song_id,)
    mycursor.execute(sql, val)
    result = mycursor.fetchone()
    if result:
        songname = result[0]
    else:
        songname = song_name
    # Insert new song into songs table
    if result:
        # Song already in playlist
        return jsonify({'status': 'duplicate'})
    else:
        sql = "INSERT INTO songs (id, songname) VALUES (%s, %s)"
        val = (song_id, songname)
        mycursor.execute(sql, val)
        mydb.commit()
        return jsonify({'status': 'success'})
    


@app.route("/")
def welcome():
    return render_template("welcome.html")
@app.route("/about")
def about():
    return render_template("about.html")
@app.route("/home")
def home():
    return render_template("home.html")
 

 
@app.route("/artists")
def artists():
    return render_template("artists.html")
 
@app.route("/albums1")
def albums1():
    return render_template("albums1.html")
 
@app.route("/albums2")
def albums2():
    return render_template("albums2.html")
 
@app.route("/albums3")
def albums3():
    return render_template("albums3.html")

@app.route("/albums4")
def albums4():
    return render_template("albums4.html")

@app.route("/albums5")
def albums5():
    return render_template("albums5.html")

@app.route("/=")
def equalto():
    return render_template("=.html")

@app.route("/1989_deluxe")
def kevin():
    return render_template("1989_deluxe.html")

@app.route("/be")
def be():
    return render_template("be.html")

@app.route("/believe")
def believe():
    return render_template("believe.html")

@app.route("/cfn")
def cfn():
    return render_template("cfn.html")

@app.route("/divide_deluxe")
def divide_deluxe():
    return render_template("divide_deluxe.html")

@app.route("/dua_complete")
def dua_complete():
    return render_template("dua_complete.html")

@app.route("/dua_deluxe")
def dua_deluxe():
    return render_template("dua_deluxe.html")

@app.route("/folklore_deluxe")
def folklore_deluxe():
    return render_template("folklore_deluxe.html")

@app.route("/future_nostalgia")
def future_nostalgia():
    return render_template("future_nostalgia.html")

@app.route("/justice")
def justice():
    return render_template("justice.html")

@app.route("/love_yourself")
def love_yourself():
    return render_template("love_yourself.html")

@app.route("/lover")
def lover():
    return render_template("lover.html")

@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/moonlight")
def moonlight():
    return render_template("moonlight.html")

@app.route("/my_world")
def my_world():
    return render_template("my_world.html")
 
@app.route("/my")
def my():
    return render_template("my.html")

@app.route("/no6")
def no6():
    return render_template("no6.html")

@app.route("/proof")
def proof():
    return render_template("proof.html")

@app.route("/purpose")
def purpose():
    return render_template("purpose.html")

@app.route("/red")
def red():
    return render_template("red.html")

@app.route("/reputation")
def reputation():
    return render_template("reputation.html")

@app.route("/under")
def under():
    return render_template("under.html")

@app.route("/wings")
def wings():
    return render_template("wings.html")

@app.route("/X-deluxe")
def X_deluxe():
    return render_template("X_deluxe.html")


    
@app.route('/playlist')
def playlist():
    return render_template('playlist.html')

@app.route('/api/playlist')
def get_playlist():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="new_password",
        database="playlist"
    )
    c = conn.cursor()
    c.execute('SELECT id, songname FROM songs')
    data = [{'id': row[0], 'songname': row[1]} for row in c.fetchall()]
    conn.close()
    return jsonify(data)

@app.route('/api/delete_song', methods=['POST'])
def delete_song():
    song_id = request.form.get('id')
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="new_password",
        database="playlist"
    )
    c = conn.cursor()
    c.execute('DELETE FROM songs WHERE id = %s', (song_id,))
    conn.commit()
    conn.close()
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)