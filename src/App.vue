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
		MbtiBlock,
	},
	data() {
		return {
			people: [],
			id: -1,
		};
	},
	methods: {
		async addPersonProfile(name, mbti, file) {
			let users = this.people;

			storage
				.ref()
				.child(name + mbti + ".jpg")
				.put(file)
				.then(response => {
					response.ref
						.getDownloadURL()
						.then(downloadURL => {
							users.push({
								id: ++this.id,
								name,
								mbti,
								img: file ? downloadURL : null,
							});

							db.collection("mbtiMap")
								.doc("people")
								.update({
									list: users,
								})
								.then(() => (this.people = users));
						})
						.catch(err => console.log(err));
				});
		},
		updatePersonProfile(name, mbti, file, id) {
			let users = this.people;
			const user = users.find(user => user.id === id);
			const userIdx = users.findIndex(user => user.id === id);

			users.splice(userIdx, 1);

			if (user.img) {
				storage
					.ref()
					.child(user.name + user.mbti + ".jpg")
					.delete();
			}

			if (file) {
				storage
					.ref()
					.child(name + mbti + ".jpg")
					.put(file)
					.then(response => {
						response.ref
							.getDownloadURL()
							.then(downloadURL => {
								users.push({
									id,
									name,
									mbti,
									img: downloadURL,
								});

								db.collection("mbtiMap")
									.doc("people")
									.update({
										list: users,
									})
									.then(() => (this.people = users));
							})
							.catch(err => console.log(err));
					});
			} else {
				users.push({
					id,
					name,
					mbti,
					img: user.img,
				});

				db.collection("mbtiMap")
					.doc("people")
					.update({
						list: users,
					})
					.then(() => (this.people = users));
			}
		},

		removePersonProfile(id) {
			let users = this.people;
			let userIdx = users.findIndex(user => user.id === id);

			users.splice(userIdx, 1);

			db.collection("mbtiMap")
				.doc("people")
				.update({
					list: users,
				})
				.then(() => (this.people = users));
		},
	},
	created() {
		db.collection("mbtiMap")
			.doc("people")
			.get()
			.then(res => {
				this.people = res.data().list;

				if (this.people.length) {
					this.id = Math.max.apply(
						null,
						this.people.map(({ id }) => id),
					);
				}
			});

		this.MBTI_BLOCK_LIST = MBTI_BLOCK_LIST;
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
