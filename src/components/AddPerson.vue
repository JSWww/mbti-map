<template>
	<div>
		<button @click="showModal">Add</button>
		<ModalWindow v-if="modalOn" @close="closeModal">
			<button @click="closeModal" class="close">X</button>
			<br />
			<form v-on:submit.prevent="doAdd">
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
				<button type="submit" class="info">Add</button>
			</form>
		</ModalWindow>
	</div>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";
export default {
	components: {
		ModalWindow,
	},
	name: "#addPerson",
	data: () => {
		return {
			modalOn: false,
			name: "",
			mbti: "",
			img: "",
		};
	},
	methods: {
		showModal: function () {
			this.modalOn = true;
		},
		doAdd: function () {
			this.$emit("addPersonProfile", this.name, this.mbti, this.img);
			this.modalOn = false;
			this.name = "";
			this.mbti = "";
			this.img = "";
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

<style scoped>
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
