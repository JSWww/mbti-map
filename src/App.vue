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

<script>
import { MBTI_BLOCK_LIST } from "@/assets/constants.js";
import { firebaseDB, firebaseStorage } from "@/firebase.js";
import AddPerson from "@/components/AddPerson.vue";
import MbtiBlock from "@/components/MbtiBlock.vue";

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
		addPersonProfile(name, mbti, file) {
			if (file) {
				firebaseStorage
					.ref()
					.child(++this.id + ".jpg")
					.put(file)
					.then(response => {
						response.ref.getDownloadURL().then(downloadURL => {
							this.people.push({
								id: this.id,
								name,
								mbti,
								img: downloadURL,
							});

							firebaseDB.collection("mbtiMap").doc("people").update({
								list: this.people,
							});
						});
					});
			} else {
				this.people.push({
					id: ++this.id,
					name,
					mbti,
					img: null,
				});

				firebaseDB.collection("mbtiMap").doc("people").update({
					list: this.people,
				});
			}
		},
		updatePersonProfile(name, mbti, file, id) {
			const person = this.people.find(person => person.id === id);
			const personIdx = this.people.findIndex(person => person.id === id);

			this.people.splice(personIdx, 1);

			if (person.img && file) {
				firebaseStorage
					.ref()
					.child(id + ".jpg")
					.delete();
			}

			if (file) {
				firebaseStorage
					.ref()
					.child(id + ".jpg")
					.put(file)
					.then(response => {
						response.ref.getDownloadURL().then(downloadURL => {
							this.people.push({
								id,
								name,
								mbti,
								img: downloadURL,
							});

							firebaseDB.collection("mbtiMap").doc("people").update({
								list: this.people,
							});
						});
					});
			} else {
				this.people.push({
					id,
					name,
					mbti,
					img: person.img,
				});

				firebaseDB.collection("mbtiMap").doc("people").update({
					list: this.people,
				});
			}
		},

		removePersonProfile(id) {
			let userIdx = this.people.findIndex(user => user.id === id);

			if (this.people[userIdx].img) {
				firebaseStorage
					.ref()
					.child(id + ".jpg")
					.delete();
			}

			this.people.splice(userIdx, 1);
			firebaseDB.collection("mbtiMap").doc("people").update({
				list: this.people,
			});
		},
	},
	created() {
		this.MBTI_BLOCK_LIST = MBTI_BLOCK_LIST;
		this.firebaseDB = firebaseDB;
		this.firebaseStorage = firebaseStorage;

		firebaseDB
			.collection("mbtiMap")
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
