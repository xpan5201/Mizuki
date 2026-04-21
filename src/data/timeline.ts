import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "one-ok",
		title: "第一次建站成功",
		description:
			"我的第一个个人博客，不过是套用了别人的模版，由于刚开始学习web知识，正在努力啦，非常感谢松坂有希的开源项目。本次部署就当练练手了，这个博客我应该会用很长的一段时间，优化有什么有趣的事情都会在这里发表，致每一个路过的陌生人，再次感谢松坂有希大大的开源项目。",
		type: "随笔",
		startDate: "2026-04-20",
		location: "广西",
		organization: "mintyuki",
		skills: ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL"],
		achievements: [
			"抄作业（调皮~）",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
];
