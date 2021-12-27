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
	</div>
</template>

<script>
import AddPerson from "./components/AddPerson.vue";
import PersonProfile from "./components/PersonProfile.vue";
export default {
	name: "App",
	components: {
		AddPerson,
		PersonProfile,
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
			this.people = this.people.filter(person => person.id !== id);
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
