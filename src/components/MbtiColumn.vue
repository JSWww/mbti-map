<template>
	<div class="mbti-column">
		<div class="bar" :style="{ background: bgColor }">
			<div v-for="item in mbtiList" :key="item.id">
				<div>{{ item.name }}</div>
			</div>
		</div>
		<div class="explanation">
			<div>{{ mbtiType.type }}</div>
			<div :style="{ color: textColor }">{{ mbtiType.description }}</div>
			<div :style="{ color: textColor }">{{ mbtiType.keyword }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		mbtiType: { type: Object, default: () => {} },
		bgColor: { type: String, default: () => "" },
		textColor: { type: String, default: () => "" },
		mbtiList: { type: Array, default: () => [] },
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
