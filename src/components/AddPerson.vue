<template>
	<div>
		<button @click="showModal">Add</button>
		<ModalWindow v-if="modalOn" @close="closeModal" @doAdd="doAdd">
		</ModalWindow>
	</div>
</template>

<script>
import ModalWindow from "@/components/ModalWindow.vue";

export default {
	components: {
		ModalWindow,
	},
	data() {
		return {
			modalOn: false,
		};
	},
	methods: {
		showModal() {
			this.modalOn = true;
		},
		doAdd(name, mbti, file) {
			this.$emit("addPersonProfile", name, mbti, file);
			this.modalOn = false;
		},
		closeModal() {
			this.modalOn = false;
		},
	},
};
</script>

<style>
button:not(.close) {
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
	margin-top: 1em;
}
button:not(.close):hover {
	background-color: rgba(25, 43, 77);
	color: #fff;
}
</style>
