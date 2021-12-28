<template>
	<div class="mbti-map">
		<MbtiBlock
			v-for="mbtiData in MBTI_LIST"
			:key="mbtiData.id"
			:mbtiData="mbtiData"
		/>
	</div>
</template>

<script>
import { MBTI_LIST } from "../assets/constants";
import MbtiBlock from "./MbtiBlock";

export default {
	name: "MbtiMap",
	components: {
		MbtiBlock,
	},
	created() {
		this.MBTI_LIST = MBTI_LIST;
	},
};
</script>

<style scoped>
.mbti-map {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
</style>
