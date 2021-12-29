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
import { MBTI_BLOCK_LIST } from "./assets/constants";
import AddPerson from "./components/AddPerson.vue";
import MbtiBlock from "./components/MbtiBlock";

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
			people: [
				{
					id: 0,
					name: "Luna",
					mbti: "ENFJ",
					img: "",
				},
				{
					id: 1,
					name: "SW",
					mbti: "ISFJ",
					img: "",
				},
			],
		};
	},
	methods: {
		addPersonProfile(name, mbti, img) {
			this.people = [
				...this.people,
				{
					id: this.people.length,
					name,
					mbti,
					img,
				},
			];
		},
		updatePersonProfile(name, mbti, img, id) {
			console.log("updateprofile");
			const people = [...this.people];
			const person = people.find(person => person.id === id);

			if (person) {
				person.name = name;
				person.mbti = mbti;
				person.img = img;
				this.people = people;
			}
		},

		removePersonProfile(id) {
			console.log("remove");
			this.people = this.people.filter(person => person.id !== id);
		},
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
