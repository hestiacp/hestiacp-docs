import Theme from "vitepress/theme";
import "./styles/base.css";
import "./styles/vars.css";
import Feature from "./components/Feature.vue";

export default {
	...Theme,
	enhanceApp({ app }) {
		app.component("Feature", Feature);
	},
};
