<template>
	<div>
		<button @click="showModal">Add</button>
		<ModalWindow v-if="modalOn" @close="closeModal" @doAdd="doAdd">
		</ModalWindow>
	</div>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";
export default {
	components: {
		ModalWindow,
	},
	data() {
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
		doAdd: function (name, mbti, img) {
			this.$emit("addPersonProfile", name, mbti, img);
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
	},
};
</script>

<style>
button {
	padding: 1.3em 3em;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
	color: rgba(25, 43, 77);
	background-color: #fff;
	border: none;
	border-radius: 45px;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
}

button:hover {
	background-color: rgba(25, 43, 77);
	color: #fff;
}
</style>
