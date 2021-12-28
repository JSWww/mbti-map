<template>
	<div class="mbti-block">
		<h2 :style="{ color: mbtiData.textColor }">{{ mbtiData.title }}</h2>
		<div class="columns">
			<MbtiColumn
				v-for="mbtiType in mbtiData.types"
				:key="mbtiType.type"
				:mbtiType="mbtiType"
				:bgColor="mbtiData.bgColor"
				:textColor="mbtiData.textColor"
				:mbtiList="mbtiList(mbtiType.type)"
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
		mbtiData: { type: Object, default: () => {} },
	},
	created() {
		this.DUMMY_DATA = DUMMY_DATA;
	},
	methods: {
		mbtiList(type) {
			return this.DUMMY_DATA.filter(data => data.mbti === type);
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
