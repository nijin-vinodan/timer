import firebase from 'firebase';

class Firebase {
    db;
    config = {
        apiKey: "AIzaSyDMDhDp4TnINdX55wfeMXnEnWqbC30pQRs",
        authDomain: "timer-9a5b0.firebaseapp.com",
        databaseURL: "https://timer-9a5b0.firebaseio.com",
        projectId: "timer-9a5b0",
        storageBucket: "timer-9a5b0.appspot.com",
        messagingSenderId: "31963639918",
        appId: "1:31963639918:web:e8d26165a623a1cf68f67f"
    };

    static init() {
        firebase.initializeApp(this.config);
        this.db = firebase.database();
    }

    static getTimeLeft() {
        try {
            this.db.ref("timeLeft").on("value", snapshot => {
                console.log("timeLeft", snapshot);
            });
        } catch (error) {

        }
    }
}
export default Firebase;