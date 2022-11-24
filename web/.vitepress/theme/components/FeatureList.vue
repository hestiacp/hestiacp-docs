<script>
export default { props: ["items"] };
</script>

<template>
	<ul class="FeatureList">
		<li v-for="item in items">
			<span v-html="item.text"></span>
			<ul v-if="item.items">
				<li v-for="nested in item.items">
					<span v-html="nested.text"></span>
				</li>
			</ul>
		</li>
	</ul>
</template>

<style scoped>
.FeatureList {
	margin: 0.55em 0;
	padding-left: 1em;
	list-style: disc;
	line-height: 2;
}

.FeatureList ul {
	padding-left: 1em;
	list-style: disc;
}

@media (min-width: 640px) {
	.FeatureList {
		font-size: 1.15rem;
	}
}
</style>
