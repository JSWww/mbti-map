<template>
	<div id="app">
		<MbtiMap />
	</div>
</template>

<script>
import MbtiMap from "./components/MbtiMap";

export default {
	name: "App",
	components: {
		MbtiMap,
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
