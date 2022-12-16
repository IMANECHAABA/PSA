// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLp1auT5AjR8KRcYFspLO1Rvl_fShGr44',
  authDomain: 'psa-imane.firebaseapp.com',
  projectId: 'psa-imane',
  storageBucket: 'psa-imane.appspot.com',
  messagingSenderId: '1058692048462',
  appId: '1:1058692048462:web:3d998f91178e6e7eabc51f',
  measurementId: 'G-6E826ZPSLX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const footer = document.querySelector('.footer');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  footer.scrollIntoView({ behavior: 'smooth' });
});
