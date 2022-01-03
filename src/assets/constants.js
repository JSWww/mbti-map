// prettier-ignore

const MBTI_LIST = [
	{ mbtiType: "INTJ", description: "용의주도한 전략가", keyword: "Architect" },
	{ mbtiType: "INTP", description: "논리적인 사색가", keyword: "Logician" },
	{ mbtiType: "ENTJ", description: "대담한 통솔자", keyword: "Commander" },
	{ mbtiType: "ENTP", description: "뜨거운 논쟁을 즐기는 변론가", keyword: "Debater" },
	{ mbtiType: "INFJ", description: "선의의 옹호자", keyword: "Advocate" },
	{ mbtiType: "INFP", description: "열정적인 중재자", keyword: "Mediator" },
	{ mbtiType: "ENFJ", description: "정의로운 사회운동가", keyword: "Protagonist" },
	{ mbtiType: "ENFP", description: "재기발랄한 운동가", keyword: "Campaigner" },
	{ mbtiType: "ISTJ", description: "청렴결백한 논리주의자", keyword: "Logistician" },
	{ mbtiType: "ISFJ", description: "용감한 수호자", keyword: "Defender" },
	{ mbtiType: "ESTJ", description: "엄격한 관리자", keyword: "Executive" },
	{ mbtiType: "ESFJ", description: "사교적인 외교관", keyword: "Consul" },
	{ mbtiType: "ISTP", description: "만능 재주꾼", keyword: "Virtuoso" },
	{ mbtiType: "ISFP", description: "호기심 많은 예술가", keyword: "Adventurer" },
	{ mbtiType: "ESTP", description: "모험을 즐기는 사업가", keyword: "Entrepreneur" },
	{ mbtiType: "ESFP", description: "자유로운 영혼의 연예인", keyword: "Entertainer" },
];

const MBTI_BLOCK_DATA = [
	{
		title: "Analysts 분석가형",
		barColor: "rgba(244, 240, 247, 0.8)",
		textColor: "rgba(144, 101, 176, 1)",
		mbtiTypes: ["INTJ", "INTP", "ENTJ", "ENTP"],
	},
	{
		title: "Diplomats 외교관형",
		barColor: "rgba(237, 243, 236, 1)",
		textColor: "rgba(68, 131, 97, 1)",
		mbtiTypes: ["INFJ", "INFP", "ENFJ", "ENFP"],
	},
	{
		title: "Sentinels 관리자형",
		barColor: "rgba(231, 243, 248, 1)",
		textColor: "rgba(51, 126, 169, 1)",
		mbtiTypes: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
	},
	{
		title: "Explorers 탐험가형",
		barColor: "rgba(251, 243, 219, 1)",
		textColor: "rgba(203, 145, 47, 1)",
		mbtiTypes: ["ISTP", "ISFP", "ESTP", "ESFP"],
	},
];

const MBTI_COLUMN_DATA = MBTI_LIST.map((item, idx) => {
	return {
		...item,
		barColor: MBTI_BLOCK_DATA[parseInt(idx / 4)].barColor,
		textColor: MBTI_BLOCK_DATA[parseInt(idx / 4)].textColor,
	};
});

export { MBTI_LIST, MBTI_BLOCK_DATA, MBTI_COLUMN_DATA };
