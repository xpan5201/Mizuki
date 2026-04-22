// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "python",
		name: "Python",
		description:
			"启蒙的编程语言，广泛应用于数据分析、人工智能、Web开发等领域，拥有丰富的库和框架支持。目前正在开发一个AI伴侣项目。",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		color: "#3776AB",
	},
	{
		id: "csharp",
		name: "C#",
		description:
			"有个游戏开发的梦想，学习了C#，并使用Unity引擎开发了几个小型游戏项目。",
		icon: "devicon:csharp",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		color: "#239120",
	},
	{
		id: "unity",
		name: "Unity",
		description:
			"跟python配套一起学习的，是一个流行的游戏开发引擎，支持多平台开发，适合制作2D和3D游戏。不过官方喜欢作死，未来一片黑暗。",
		icon: "devicon:unity",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 5 },
		color: "#239120",
	},
	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"跟python配套一起学习的，是一个流行的关系型数据库管理系统，广泛应用于各种规模的应用程序中。",
		icon: "logos:mysql-icon",
		category: "database",
		level: "advanced",
		experience: { years: 0, months: 9 },
		color: "#4479A1",
	},
	{
		id: "redis",
		name: "Redis",
		description:
			"项目会用到。一个开源的内存数据结构存储系统，常用于缓存、消息队列和实时数据处理。 ",
		icon: "logos:redis",
		category: "database",
		level: "intermediate",
		experience: { years: 0, months: 7 },
		color: "#DC382D",
	},
	{
		id: "sqlite",
		name: "SQLite",
		description:
			"一个轻量级的嵌入式关系型数据库，适用于移动应用程序和小型项目。",
		icon: "simple-icons:sqlite",
		category: "database",
		level: "intermediate",
		experience: { years: 0, months: 11 },
		color: "#003B57",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"拉就对了。一个分布式版本控制系统，是代码管理和团队协作的 essential 工具。",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 1, months: 3 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"两个字，方便。一个轻量但功能强大的代码编辑器，拥有丰富的插件生态系统。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 1, months: 0 },
		color: "#007ACC",
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description:
			"不过我更喜欢vscode，pycharm太重了。一个由JetBrains开发的专业Python IDE，提供智能代码分析和调试功能。",
		icon: "logos:pycharm",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		color: "#21D789",
	},
	{
		id: "docker",
		name: "Docker",
		description:
			"经常拉取失败，然后就自建了一个代理。一个开源的容器化平台，允许开发者打包应用程序及其依赖项到一个可移植的容器中，简化了部署和环境管理。",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#2496ED",
	},
	{
		id: "nginx",
		name: "Nginx",
		description: "一个高性能的Web服务器和反向代理服务器，广泛用于负载均衡、HTTP缓存和作为API网关。",
		icon: "logos:nginx",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 9 },
		color: "#009639",
	},
	{
		id: "openresty",
		name: "OpenResty",
		description:
			"因为爱用1panel,所以只能用它了。一个基于Nginx和LuaJIT的高性能web平台，支持动态web应用开发。",
		icon: "simple-icons:nginx",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 8 },
		color: "#00A693",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"喜欢捣鼓各种项目。一个开源的操作系统，是服务器部署和开发环境的首选。",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 4 },
		color: "#FCC624",
	},
	{
		id: "photoshop",
		name: "Photoshop",
		description: "偶尔需要用来处理一些图片素材。一个由Adobe开发的图像编辑软件，广泛用于照片修饰、图形设计和数字艺术创作。",
		icon: "logos:adobe-photoshop",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 6 },
		color: "#31A8FF",
	},
];
