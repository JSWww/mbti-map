<template>
	<div class="mbti-column">
		<div class="bar" :style="{ background: barColor }">
			<div v-for="item in mbtiList" :key="item.id">
				<PersonProfile :personInfo="item" v-on="$listeners" />
			</div>
		</div>
		<div class="explanation">
			<div>{{ type }}</div>
			<div :style="{ color: textColor }">{{ description }}</div>
			<div :style="{ color: textColor }">{{ keyword }}</div>
		</div>
	</div>
</template>

<script>
import PersonProfile from "@/components/PersonProfile.vue";

export default {
	props: {
		barColor: { type: String, default: "" },
		textColor: { type: String, default: "" },
		type: { type: String, default: "" },
		description: { type: String, default: "" },
		keyword: { type: String, default: "" },
		mbtiList: { type: Array, default: () => [] },
	},
	components: {
		PersonProfile,
	},
};
</script>

<style scoped>
.mbti-column {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.bar {
	display: flex;
	flex-direction: column-reverse;
	margin: 20px 1px;
	width: 100px;
	height: 500px;
}

.explanation {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100px;
	height: 120px;
	word-break: keep-all;
	font-size: 14px;
	font-weight: bold;
}

.explanation > div {
	flex: 1;
}
</style>
