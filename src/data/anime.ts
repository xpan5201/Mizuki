// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "想要成为影之实力者！",
		status: "completed",	//"watching"在看 | "completed"看过 | "planned"想看
		rating: 7.1,
		cover: "/assets/anime/shadow-garden.webp",
		description: "少年席德憧憬着以路人身分隐藏自身力量，不为人知地介入故事，展现实力的「影之强者」。",
		episodes: "20 episodes",
		year: "2022",
		genre: ["轻小说", "中二", "异世界", "搞笑"],
		studio: "Nexus",
		link: "https://shadow-garden.jp/",
		progress: 20,
		totalEpisodes: 20,
		startDate: "2025-07",
		endDate: "2025-09",
	},
	{
		title: "欢迎来到实力至上主义教室 第四季",
		status: "watching",
		rating: 6.2,
		cover: "/assets/anime/you-zitsu.webp",
		description: "跨越学年的新关系，将招来狂风暴雨还是风平浪静？第二年的学校生活现在拉开序幕。",
		episodes: "16 episodes",
		year: "2026",
		genre: ["校园" , "TV" , "日本" , "小说改"],
		studio: "ラルケ",
		link: "https://you-zitsu.com/",
		progress: 6,
		totalEpisodes: 16,
		startDate: "2026-04",
		endDate: "2026-07",
	},
	{
		title: "败犬女主太多了！",
		status: "completed",
		rating: 8.0,
		cover: "/assets/anime/makeine-anime.webp",
		description: "败女们环绕，新感觉、乱糟糟的败走系青春故事就此揭幕。因失败而更加闪耀吧，败女们！",
		episodes: "12 episodes",
		year: "2024",
		genre: ["校园" , "TV" , "恋爱" ,"日本" , "小说改"],
		studio: "A-1Pictures",
		link: "https://makeine-anime.com/",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2024-10",
		endDate: "2024-12",
	},
];

export default localAnimeList;
