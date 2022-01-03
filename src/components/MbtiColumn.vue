<template>
	<div class="mbti-column">
		<div class="bar" :style="{ background: MBTI_COLUMN.barColor }">
			<div v-for="item in filteredPeople" :key="item.id">
				<PersonProfile :personInfo="item" v-on="$listeners" />
			</div>
		</div>
		<div class="explanation">
			<div>{{ MBTI_COLUMN.mbtiType }}</div>
			<div :style="{ color: MBTI_COLUMN.textColor }">
				{{ MBTI_COLUMN.description }}
			</div>
			<div :style="{ color: MBTI_COLUMN.textColor }">
				{{ MBTI_COLUMN.keyword }}
			</div>
		</div>
	</div>
</template>

<script>
import { MBTI_COLUMN_DATA } from "@/assets/constants.js";
import PersonProfile from "@/components/PersonProfile.vue";

export default {
	name: "MbtiColumn",
	components: {
		PersonProfile,
	},
	props: {
		MBTI_TYPE: { type: String, default: "" },
		filteredPeople: { type: Array, default: () => [] },
	},
	created() {
		this.MBTI_COLUMN = MBTI_COLUMN_DATA.filter(
			item => item.mbtiType === this.MBTI_TYPE,
		)[0];
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
