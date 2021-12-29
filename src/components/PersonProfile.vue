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
		<ModalWindow
			v-if="modalOn"
			@close="closeModal"
			@doUpdate="doUpdate"
			@doRemove="doRemove"
			:getId="id"
			:getName="name"
			:getMbti="mbti"
			:getImg="img"
			:isUpdate="isUpdate"
		>
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
