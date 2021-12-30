<template>
	<transition name="modal" appear>
		<div class="modal modal-overlay" @click.self="$emit('close')">
			<div class="modal-window">
				<div class="modal-content">
					<button @click="$emit('close')" class="close">X</button>

					<h2 v-if="this.isUpdate">Edit Profile</h2>
					<h2 v-else>Register New Profile</h2>
					<form v-on:submit.prevent="giveInfo">
						<h5>NAME</h5>
						<input type="text" class="info" v-model="name" />
						<h5>MBTI</h5>
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
						<h5>Photo</h5>
						<input
							type="file"
							class="info"
							accept="image/*"
							v-on:change="uploadPhoto"
						/>
						<div v-if="img"><img class="preview" v-bind:src="img" /></div>
						<br />
						<div class="footer">
							<button v-if="this.isUpdate" type="submit" class="info">
								Update
							</button>
							<button v-if="this.isUpdate" @click="$emit('doRemove', id)">
								Delete
							</button>
							<button v-else type="submit" class="info">Add</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		getId: { type: Number, default: 0 },
		getName: { type: String, default: "" },
		getMbti: { type: String, default: "" },
		getImg: { type: String, default: "" },
		isUpdate: { type: Boolean, default: false },
	},
	data() {
		return {
			id: this.getId,
			name: this.getName,
			mbti: this.getMbti,
			img: this.getImg,
			file: null,
		};
	},
	methods: {
		uploadPhoto: function (event) {
			this.file = event.target.files[0];
			if (this.file && this.file.type.match(/^image\/(png|jpeg)$/)) {
				this.img = window.URL.createObjectURL(this.file);
			} else {
				this.img = "";
			}
		},

		giveInfo: function () {
			if (this.isUpdate) {
				this.$emit("doUpdate", this.name, this.mbti, this.file, this.id);
			} else {
				this.$emit("doAdd", this.name, this.mbti, this.file);
			}
		},
	},
};
</script>

<style scoped>
.modal.modal-overlay {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
}

.modal-window {
	background: #fff;
	border-radius: 10px;
	width: 350px;
}

.modal-content {
	padding: 10px 20px;
	text-align: left;
}

.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.4s;
}
.modal-enter-active .modal-window,
.modal-leave-active .modal-window {
	transition: opacity 0.4s, transform 0.4s;
}

.modal-leave-active {
	transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
	opacity: 0;
}

.modal-enter .modal-window,
.modal-leave-to .modal-window {
	opacity: 0;
	transform: translateY(-20px);
}

.photo {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.preview {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.close {
	float: right;
	border: 0em;
	font-size: 1.5em;
	background: rgba(0, 0, 0, 0);
	color: black;
}
.info {
	margin-bottom: 2em;
}

h5 {
	margin-bottom: 0;
	margin-top: 1em;
}

button {
	box-sizing: border-box;
	background: royalblue;
	border-radius: 0.5em;
	border: 2px solid royalblue;
	color: white;
	font-size: 1em;
	font-weight: 600;
	margin-right: 5%;
}
</style>
