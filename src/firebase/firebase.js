import * as firebase from "firebase";
import { DB_CONFIG } from "./Config";

firebase.initializeApp(DB_CONFIG);
const database = firebase.database();

setTimeout(() => {
  database
    .ref()
    .set({
      credentials: {
        sito1: {
          url: "https://www.pippo.com/",
          user: "pippo",
          pass: "baudo",
          type: "ciccobfgfdello"
        },
        sito2: {
          url: "https://www.pippo.com/",
          user: "pippo",
          pass: "baudo",
          type: "wordpressoogdfbfo"
        }
      }
    })
    .then(() => {
      console.log("data is saved");
    })
    .catch(err => console.log(err));
}, 5000);

// database
//   .ref("credentials/sito1/pass")
//   .remove()
//   .then(() => console.log("data was removed"))
//   .catch(err => console.log(err));

// database
//   .ref("credentials/sito1")
//   .update({
//     user: "marco",
//     type: "cpanel",
//     pass: "frsgsfd"
//   })
//   .then(() => console.log("succees"))
//   .catch(err => console.log(err));

// database
//   .ref("credentials/sito1")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => console.log(err));

database.ref("credentials/sito1").on("value", snapshot => {
  console.log(snapshot.val());
});
