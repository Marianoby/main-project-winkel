var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var mongoDB = 'mongodb://127.0.0.1/winkelDB';
SALT_WORK_FACTOR = 10;

function generateUserID() {
    var userId = ""
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
      userId += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return userId;
  }

var fnReset = async () => {
    //connecting to database
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;

    //get the default connection
    var db = mongoose.connection;

    db.once("open", function () {
        console.log("*** MongoDB got connected ***");
        mongoose.connection.db.dropDatabase(async () => {
            console.log(`database dropped.`)

            //creating admin user
            var userSchema = new mongoose.Schema({
                id:String,
                name: String,
                email: String,
                username: String,
                password: String,
                updated_at: { type: Date, default: Date.now },
            });

            var admin = mongoose.model('admin_credential', userSchema);
            let salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
            let passwordhash = await bcrypt.hash("admin", salt);
            let userID = await generateUserID();

            var person = new admin({
                id:userID,
                name: "admin",
                email: "admin@winkel.com",
                username: "admin",
                password: passwordhash,
            })
            person.save((err, data) => {
                if (err) {
                    console.log("Failed")
                    process.exit();
                }
                else {
                    console.log("Done")
                    process.exit();
                }
            });
        });
    });
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error'));
}

fnReset();