<template>
	<div class="mbti-block">
		<h2 :style="{ color: MBTI_BLOCK.textColor }">
			{{ MBTI_BLOCK.title }}
		</h2>
		<div class="columns">
			<MbtiColumn
				v-for="(MBTI_TYPE, idx) in MBTI_BLOCK.mbtiTypes"
				:key="idx"
				:MBTI_TYPE="MBTI_TYPE"
				:filteredPeople="getPeopleByMbtiType(MBTI_TYPE)"
				v-on="$listeners"
			/>
		</div>
	</div>
</template>

<script>
import MbtiColumn from "@/components/MbtiColumn.vue";

export default {
	name: "MbtiBlock",
	components: {
		MbtiColumn,
	},
	props: {
		MBTI_BLOCK: { type: Object, default: () => {} },
		people: { type: Array, default: () => [] },
	},
	methods: {
		getPeopleByMbtiType(mbtiType) {
			return this.people.filter(item => item.mbti === mbtiType);
		},
	},
};
</script>

<style scoped>
.mbti-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px 3px;
}

.columns {
	display: flex;
}
</style>
