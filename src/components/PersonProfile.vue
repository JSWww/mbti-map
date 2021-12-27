<template>
	<section class="main">
		<ul class="people-list">
			<li
				class="person"
				v-for="({ id, name, mbti, img }, idx) in people"
				:key="idx"
			>
				<label>{{ id }} {{ name }} {{ mbti }}</label>
				<img class="preview" v-bind:src="img" />
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	props: {
		people: { type: Array, default: () => [] },
	},
};
</script>

<style>
.preview {
	width: 50px;
	height: 50px;
}
</style>
