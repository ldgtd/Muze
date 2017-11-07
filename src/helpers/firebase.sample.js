import Firebase from 'firebase'

let config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

let app = Firebase.initializeApp(config)
let db = app.database()

const FirebaseRefs = {
  firebase: Firebase,
  db: db,
  users: db.ref('users'),
  events: db.ref('events')
}

export default FirebaseRefs
