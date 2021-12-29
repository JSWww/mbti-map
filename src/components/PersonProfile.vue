<template>
	<section class="personProfile">
		<img
			@click="
				showModal(
					personInfo.name,
					personInfo.img,
					personInfo.mbti,
					personInfo.id,
				)
			"
			class="photo"
			v-bind:src="personInfo.img"
		/>
		<br />
		<label>{{ personInfo.name }} {{ personInfo.mbti }}</label>
		<ModalWindow
			v-if="modalOn"
			@close="closeModal"
			@doUpdate="doUpdate"
			@doRemove="doRemove"
			:getId="personInfo.id"
			:getName="personInfo.name"
			:getMbti="personInfo.mbti"
			:getImg="personInfo.img"
			:isUpdate="isUpdate"
			v-on="$listeners"
		>
		</ModalWindow>
	</section>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";

export default {
	props: {
		personInfo: { type: Object, default: () => {} },
	},
	components: {
		ModalWindow,
	},
	data() {
		return {
			modalOn: false,
			id: "",
			name: "",
			mbti: "",
			img: "",
			isUpdate: true,
		};
	},
	methods: {
		showModal: function (name, img, mbti, id) {
			this.name = name;
			this.img = img;
			this.mbti = mbti;
			this.id = id;
			this.modalOn = true;
		},
		doUpdate: function (name, mbti, img, id) {
			this.$emit("updatePersonProfile", name, mbti, img, id);
			this.modalOn = false;
			this.name = "";
			this.mbti = "";
			this.img = "";
		},
		doRemove: function (id) {
			let remove = confirm("Delete?");
			if (remove) {
				this.$emit("removePersonProfile", id);
			}
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
.photo {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
</style>
