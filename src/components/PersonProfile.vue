<template>
	<section class="personProfile">
		<img
			v-if="personInfo.img"
			@click="showModal"
			class="photo"
			v-bind:src="personInfo.img"
		/>
		<img
			v-else
			@click="showModal"
			class="photo"
			v-bind:src="require('@/assets/adriel.jpeg')"
		/>
		<br />
		<label>{{ personInfo.name }}</label>
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
import ModalWindow from "@/components/ModalWindow.vue";

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
			isUpdate: true,
		};
	},
	methods: {
		showModal() {
			this.modalOn = true;
		},
		doUpdate(name, mbti, file, id) {
			this.$emit("updatePersonProfile", name, mbti, file, id);
			this.modalOn = false;
		},
		doRemove(id) {
			let remove = confirm("Delete?");
			if (remove) {
				this.$emit("removePersonProfile", id);
			}
		},
		closeModal() {
			this.modalOn = false;
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
