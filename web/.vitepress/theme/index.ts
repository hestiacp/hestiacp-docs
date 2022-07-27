// @ts-ignore
import TeamPage from "./components/TeamPage.vue";
import DefaultTheme from "vitepress/theme";
import "./vars.css";

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component("TeamPage", TeamPage);
	},
};
