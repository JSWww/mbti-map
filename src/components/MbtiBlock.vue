<template>
	<div class="mbti-block">
		<h2 :style="{ color: textColor }">
			{{ title }}
		</h2>
		<div class="columns">
			<MbtiColumn
				v-for="(mbtiType, idx) in mbtiTypes"
				:key="idx"
				:barColor="barColor"
				:textColor="textColor"
				v-bind="mbtiType"
				:mbtiList="mbtiList(mbtiType.type)"
				v-on="$listeners"
			/>
		</div>
	</div>
</template>

<script>
import MbtiColumn from "./MbtiColumn";
import { DUMMY_DATA } from "../assets/constants";

export default {
	name: "MbtiBlock",
	components: {
		MbtiColumn,
	},
	props: {
		title: { type: String, default: "" },
		barColor: { type: String, default: "" },
		textColor: { type: String, default: "" },
		mbtiTypes: { type: Array, default: () => [] },
		people: { type: Array, default: () => [] },
	},
	created() {
		this.DUMMY_DATA = DUMMY_DATA;
	},
	methods: {
		mbtiList(type) {
			return this.people.filter(data => data.mbti === type);
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
