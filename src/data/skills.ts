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
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 10 },
		color: "#3776AB",
	},
	{
		id: "csharp",
		name: "C#",
		description:
			"A modern object-oriented programming language developed by Microsoft, suitable for the .NET ecosystem.",
		icon: "devicon:csharp",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["desktop-application", "web-api"],
		color: "#239120",
	},
	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"The world's most popular open-source relational database management system, widely used in web applications.",
		icon: "logos:mysql-icon",
		category: "database",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},
	{
		id: "redis",
		name: "Redis",
		description:
			"A high-performance in-memory data structure store, used as a database, cache, and message broker.",
		icon: "logos:redis",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["e-commerce-platform", "real-time-chat"],
		color: "#DC382D",
	},
	{
		id: "sqlite",
		name: "SQLite",
		description:
			"A lightweight embedded relational database, suitable for mobile applications and small projects.",
		icon: "simple-icons:sqlite",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["mobile-app", "desktop-tool"],
		color: "#003B57",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 6 },
		color: "#007ACC",
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description:
			"A professional Python IDE by JetBrains providing intelligent code analysis and debugging features.",
		icon: "logos:pycharm",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 4 },
		projects: ["python-web-app", "data-analysis"],
		color: "#21D789",
	},
	{
		id: "docker",
		name: "Docker",
		description:
			"A containerization platform that simplifies application deployment and environment management.",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#2496ED",
	},
	{
		id: "nginx",
		name: "Nginx",
		description: "A high-performance web server and reverse proxy server.",
		icon: "logos:nginx",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["web-server-config", "load-balancer"],
		color: "#009639",
	},
	{
		id: "openresty",
		name: "OpenResty",
		description:
			"A high-performance web platform based on Nginx and LuaJIT, supporting dynamic web application development.",
		icon: "simple-icons:nginx",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["api-gateway", "dynamic-routing"],
		color: "#00A693",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["server-management", "shell-scripting"],
		color: "#FCC624",
	},
	{
		id: "photoshop",
		name: "Photoshop",
		description: "Professional image editing and design software.",
		icon: "logos:adobe-photoshop",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 6 },
		projects: ["ui-design", "image-processing"],
		color: "#31A8FF",
	},
];
