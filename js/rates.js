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
var id_list=["BMCD0999","BMVI1999","BMMA0199","FAMA0199","KGTS0999","WTMF0999","KMDT0999","PTTS0999","BMSS1299","HIRO0999","HIRT0999"];
for(let i =1 ; i<=11;i++){
    get(child(firebaseref , "Items/"+i)).then((snapshot)=>{
        if(snapshot.exists()){
            document.getElementById(id_list[i-1]).innerHTML = snapshot.val().price;
        }
        else{
            alert("no data found");
        }
        
    });
}



