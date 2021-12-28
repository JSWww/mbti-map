const MBTI_LIST = [
	{
		id: 0,
		title: "Analysts 분석가형",
		bgColor: "rgba(244, 240, 247, 0.8)",
		textColor: "rgba(144, 101, 176, 1)",
		types: [
			{ type: "INTJ", description: "용의주도한 전략가", keyword: "Architect" },
			{ type: "INTP", description: "논리적인 사색가", keyword: "Logician" },
			{ type: "ENTJ", description: "대담한 통솔자", keyword: "Commander" },
			{
				type: "ENTP",
				description: "뜨거운 논쟁을 즐기는 변론가",
				keyword: "Debater",
			},
		],
	},
	{
		id: 1,
		title: "Diplomats 외교관형",
		bgColor: "rgba(237, 243, 236, 1)",
		textColor: "rgba(68, 131, 97, 1)",
		types: [
			{ type: "INFJ", description: "선의의 옹호자", keyword: "Advocate" },
			{ type: "INFP", description: "열정적인 중재자", keyword: "Mediator" },
			{
				type: "ENFJ",
				description: "정의로운 사회운동가",
				keyword: "Protagonist",
			},
			{ type: "ENFP", description: "재기발랄한 운동가", keyword: "Campaigner" },
		],
	},
	{
		id: 2,
		title: "Sentinels 관리자형",
		bgColor: "rgba(231, 243, 248, 1)",
		textColor: "rgba(51, 126, 169, 1)",
		types: [
			{
				type: "ISTJ",
				description: "청렴결백한 논리주의자",
				keyword: "Logistician",
			},
			{ type: "ISFJ", description: "용감한 수호자", keyword: "Defender" },
			{ type: "ESTJ", description: "엄격한 관리자", keyword: "Executive" },
			{ type: "ESFJ", description: "사교적인 외교관", keyword: "Consul" },
		],
	},
	{
		id: 3,
		title: "Explorers 탐험가형",
		bgColor: "rgba(251, 243, 219, 1)",
		textColor: "rgba(203, 145, 47, 1)",
		types: [
			{ type: "ISTP", description: "만능 재주꾼", keyword: "Virtuoso" },
			{
				type: "ISFP",
				description: "호기심 많은 예술가",
				keyword: "Adventurer",
			},
			{
				type: "ESTP",
				description: "모험을 즐기는 사업가",
				keyword: "Entrepreneur",
			},
			{
				type: "ESFP",
				description: "자유로운 영혼의 연예인",
				keyword: "Entertainer",
			},
		],
	},
];

const DUMMY_DATA = [
	{
		id: 0,
		name: "test1",
		mbti: "INTJ",
		img: "nothing",
	},
	{
		id: 1,
		name: "test2",
		mbti: "INTJ",
		img: "nothing",
	},
	{
		id: 2,
		name: "testtest",
		mbti: "INTJ",
		img: "nothing",
	},
	{
		id: 3,
		name: "Seongwon",
		mbti: "ESTP",
		img: "nothing",
	},
	{
		id: 4,
		name: "ABCDEFGHIJKLMN",
		mbti: "ISFJ",
		img: "nothing",
	},
	{
		id: 5,
		name: "test",
		mbti: "ENTP",
		img: "nothing",
	},
	{
		id: 6,
		name: "test",
		mbti: "INTJ",
		img: "nothing",
	},
];

export { MBTI_LIST, DUMMY_DATA };
