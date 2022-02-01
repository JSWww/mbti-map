<template>
	<div class="mbti-column">
		<div class="bars">
			<div
				v-for="barIdx in barCount"
				:key="barIdx"
				class="bar"
				:style="{ background: MBTI_COLUMN.barColor }"
			>
				<div v-for="item in profileList(barIdx)" :key="item.id">
					<PersonProfile :personInfo="item" v-on="$listeners" />
				</div>
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
	computed: {
		barCount() {
			let result = parseInt((this.filteredPeople.length + 5) / 6);

			if (result === 0) {
				result += 1;
			}

			return result;
		},
	},
	created() {
		this.MBTI_COLUMN = MBTI_COLUMN_DATA.filter(
			item => item.mbtiType === this.MBTI_TYPE,
		)[0];
	},
	methods: {
		profileList(barIdx) {
			const start = (barIdx - 1) * 6;
			return this.filteredPeople.slice(start, start + 6);
		},
	},
};
</script>

<style scoped>
.mbti-column {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.bars {
	display: flex;
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
