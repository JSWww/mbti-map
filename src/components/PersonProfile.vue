<template>
	<section class="personProfile">
		<ul class="people-list">
			<li
				class="person"
				v-for="({ id, name, img, mbti }, idx) in people"
				:key="idx"
			>
				<img
					@click="showModal(name, img, mbti, id)"
					class="photo"
					v-bind:src="img"
				/>
				<br />
				<label>{{ name }} {{ mbti }}</label>
			</li>
		</ul>
		<ModalWindow v-if="modalOn" @close="closeModal">
			<button @click="closeModal" class="close">X</button>
			<br />
			<form v-on:submit.prevent="doUpdate(name, mbti, img, id)">
				Name <input type="text" class="info" v-model="name" />
				<br />
				MBTI
				<select class="info" v-model="mbti">
					<option>ESTJ</option>
					<option>ESTP</option>
					<option>ESFJ</option>
					<option>ESFP</option>
					<option>ENTJ</option>
					<option>ENTP</option>
					<option>ENFJ</option>
					<option>ENFP</option>
					<option>ISTJ</option>
					<option>ISTP</option>
					<option>ISFJ</option>
					<option>ISFP</option>
					<option>INTJ</option>
					<option>INTP</option>
					<option>INFJ</option>
					<option>INFP</option>
				</select>
				<br />
				Photo <input type="file" class="info" v-on:change="uploadPhoto" />
				<div v-if="img"><img class="preview" v-bind:src="img" /></div>
				<br />
				<button type="submit" class="info">Update</button>
				<button @click="doRemove(id)">Delete</button>
			</form>
		</ModalWindow>
	</section>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";
export default {
	props: {
		people: { type: Array, default: () => [] },
	},
	components: {
		ModalWindow,
	},
	name: "#personProfile",
	data: () => {
		return {
			modalOn: false,
			name: "",
			mbti: "",
			img: "",
			id: 0,
		};
	},
	methods: {
		showModal: function (name, img, mbti, id) {
			this.modalOn = true;
			this.name = name;
			this.img = img;
			this.mbti = mbti;
			this.id = id;
		},
		doUpdate: function (name, mbti, img, id) {
			this.$emit("updatePersonProfile", name, mbti, img, id);
			this.modalOn = false;
			this.name = "";
			this.mbti = "";
			this.img = "";
		},
		doRemove: function (id) {
			this.$emit("removePersonProfile", id);
		},
		closeModal: function () {
			this.modalOn = false;
			this.name = "";
			this.mbti = "";
			this.img = "";
		},
		uploadPhoto: function (event) {
			const file = event.target.files[0];
			if (file && file.type.match(/^image\/(png|jpeg)$/)) {
				this.img = window.URL.createObjectURL(file);
			}
		},
	},
};
</script>

<style>
.photo {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.preview {
	width: 50px;
	height: 50px;
}
.close {
	float: right;
	border: 0em;
	background: rgba(0, 0, 0, 0);
}
.info {
	margin-bottom: 2em;
}
</style>
