// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import {
	getDatabase,
    get,
	ref,
	set,
	child,
	update,
	remove,
    onValue
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA9VPg4vkS4ashRqan-h-weKfEIp3gdM_E',
	authDomain: 'sarthakkmusicapp.firebaseapp.com',
	databaseURL: 'https://sarthakkmusicapp-default-rtdb.firebaseio.com',
	projectId: 'sarthakkmusicapp',
	storageBucket: 'sarthakkmusicapp.appspot.com',
	messagingSenderId: '393747667213',
	appId: '1:393747667213:web:2ad0f2c63306a52046f844'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase();
const firebaseref = ref(db);
get(child(firebaseref , "Items/1")).then((snapshot)=>{
    if(snapshot.exists()){
        var price_id = snapshot.val().id;
        var price1 = snapshot.val().price;
        console.log(price_id,price1);
        document.getElementById("BMVI1999").innerHTML = price1;
    }
    else{
        alert("no data found");
    }
    
});
get(child(firebaseref , "Items/2")).then((snapshot)=>{
    if(snapshot.exists()){
        var price_id2 = snapshot.val().id;
        var price2 = snapshot.val().price;
        console.log(price_id2,price2);
        document.getElementById("BMCD0999").innerHTML = price2;
    }
    else{
        alert("no data found");
    }
    
});



