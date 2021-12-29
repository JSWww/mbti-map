<template>
	<div id="app">
		<h1>Adriel's MBTI Map</h1>
		<AddPerson @addPersonProfile="addPersonProfile" />
		<div class="mbti-map">
			<MbtiBlock
				v-for="(MBTI_BLOCK_DATA, idx) in MBTI_BLOCK_LIST"
				:key="idx"
				v-bind="MBTI_BLOCK_DATA"
				:people="people"
				@removePersonProfile="removePersonProfile"
				@updatePersonProfile="updatePersonProfile"
				v-on="$listeners"
			/>
		</div>
	</div>
</template>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuefire@1.3.0/dist/vuefire.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.0.1/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.0.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.0.1/firebase-database.js"></script>
<script>
import { MBTI_BLOCK_LIST } from "./assets/constants";
import AddPerson from "./components/AddPerson.vue";
import MbtiBlock from "./components/MbtiBlock";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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

export default {
	name: "App",
	components: {
		AddPerson,
		MbtiBlock,
	},
	created() {
		this.MBTI_BLOCK_LIST = MBTI_BLOCK_LIST;
	},
	data() {
		return {
			people: [],
		};
	},
	methods: {
		addPersonProfile(name, mbti, img) {
			db.collection("mbtiMap")
				.add({
					name: name,
					mbti: mbti,
					img: img,
				})
				.then(() => {
					console.log("Success");
				})
				.catch(error => {
					console.error("Error writing:", error);
				});
			//TODO-REFACTORING UPDATE
			this.people = [];
			this.getPeople();
		},
		updatePersonProfile(name, mbti, img, id) {
			db.collection("mbtiMap").doc(id).update({
				mbti: mbti,
				name: name,
				img: img,
			});

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
	margin-top: 30px;
}

.mbti-map {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
</style>
