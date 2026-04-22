// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Tech: [
		{
			name: "IQOO neo 10 pro",
			image: "/images/device/iqooneo10pro.webp",
			specs: "天玑 9400 / 12G - 256G",
			description:
				"白色，杂鱼专用，120W",
			link: "https://www.vivo.com.cn/vivo/iqooneo10",
		},
		{
			name: "联想拯救者Y7000P 2025",
			image: "/images/device/Y7000P2025.webp",
			specs: "i9-14900HX/32G/2T/RTX™5070",
			description:
				"白色，杂鱼专用,好久没清灰了",
			link: "https://activity.lenovo.com.cn/xiaofei/zjz/hdy.html",
		},
	],
};
