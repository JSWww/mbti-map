<template>
	<div id="app">
		<section class="people">
			<PersonProfile
				:people="people"
				@removePersonProfile="removePersonProfile"
				@updatePersonProfile="updatePersonProfile"
			/>
		</section>
		<AddPerson @addPersonProfile="addPersonProfile" />
		<MbtiMap />
	</div>
</template>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuefire@1.3.0/dist/vuefire.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.0.1/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.0.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.0.1/firebase-database.js"></script>
<script>
import AddPerson from "./components/AddPerson.vue";
import PersonProfile from "./components/PersonProfile.vue";
import MbtiMap from "./components/MbtiMap";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
	apiKey: "AIzaSyA2VETiMU4LsgdWu0XdtEvQJ8MMT28FU5M",
	authDomain: "mbtimap-dad6b.firebaseapp.com",
	projectId: "mbtimap-dad6b",
	storageBucket: "mbtimap-dad6b.appspot.com",
	messagingSenderId: "457163912484",
	appId: "1:457163912484:web:61fed987eff1c57d3defb1",
};

firebase.initializeApp(config);
const db = firebase.firestore();
const storage = firebase.storage();
//const storageRef = storage.ref();
export default {
	name: "App",
	components: {
		AddPerson,
		PersonProfile,
		MbtiMap,
	},
	data() {
		return {
			people: [],
		};
	},
	methods: {
		addPersonProfile(name, mbti, img) {
			db.collection("mbtiMap").add({
				name: name,
				mbti: mbti,
				img: img,
			});
			storage
				.ref(name + mbti)
				.put(img)
				.then(response => {
					response.ref
						.getDownloadURL()
						.then(downloadURL => {
							this.updatePersonProfile(name, mbti, downloadURL, id);
						})
						.catch(err => console.log(err));
				});
		},
		updatePersonProfile(name, mbti, img, id) {
			if (storage.ref(name + mbti) === null) {
				storage
					.ref(name + mbti)
					.put(img)
					.then(response => {
						response.ref.getDownloadURL().then(downloadURL => {
							db.collection("mbtiMap").doc(id).update({
								mbti: mbti,
								name: name,
								img: downloadURL,
							});
						});
					});
			} else {
				db.collection("mbtiMap").doc(id).update({
					mbti: mbti,
					name: name,
					img: img,
				});
			}

			//TODO-REFACTORING UPDATE
			this.people = [];
			this.getPeople();
		},

		removePersonProfile(id) {
			db.collection("mbtiMap").doc(id).delete();
		},

		getPeople() {
			db.collection("mbtiMap")
				.get()
				.then(querySnapshot => {
					querySnapshot.forEach(doc => {
						this.people.push({
							id: `${doc.id}`,
							name: `${doc.data().name}`,
							mbti: `${doc.data().mbti}`,
							img: `${doc.data().img}`,
						});
					});
				});
		},
	},
	created() {
		this.getPeople();
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
