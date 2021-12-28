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
