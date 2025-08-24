interface CellCharacter {
	kor: string;
	main: string;
	sub: string;
	bgColorClass: string; // Tailwind CSS 배경 클래스
	textColorClass: string; // Tailwind CSS 텍스트 색상 클래스
}

interface CellSimple {
	text: string;
	subText?: string; // 괄호 안의 작은 글씨
}

interface CellMulti {
	items: { text: string; subText?: string }[];
}

type CellContent = CellCharacter | CellSimple | CellMulti | string | null;

interface Row {
	label: string;
	subLabel?: string;
	hour: CellContent;
	day: CellContent;
	month: CellContent;
	year: CellContent;
}

const data: Row[] = [
	{
		label: "十星",
		subLabel: "(십성)",
		hour: { text: "傷官", subText: "(상관)" },
		day: { text: "比肩", subText: "(비견)" },
		month: { text: "傷官", subText: "(상관)" },
		year: { text: "傷官", subText: "(상관)" },
	},
	{
		label: "天干",
		subLabel: "(천간)",
		hour: {
			kor: "임",
			main: "壬",
			sub: "陽水",
			bgColorClass: "bg-[#2F2F2F]",
			textColorClass: "text-white",
		},
		day: {
			kor: "정",
			main: "丁",
			sub: "陰火",
			bgColorClass: "bg-[#C23030]",
			textColorClass: "text-white",
		},
		month: {
			kor: "계",
			main: "癸",
			sub: "陰水",
			bgColorClass: "bg-[#2F2F2F]",
			textColorClass: "text-white",
		},
		year: {
			kor: "계",
			main: "癸",
			sub: "陰水",
			bgColorClass: "bg-[#2F2F2F]",
			textColorClass: "text-white",
		},
	},
	{
		label: "地支",
		subLabel: "(지지)",
		hour: {
			kor: "인",
			main: "寅",
			sub: "陽木",
			bgColorClass: "bg-[#18868C]",
			textColorClass: "text-white",
		},
		day: {
			kor: "사",
			main: "巳",
			sub: "陰火",
			bgColorClass: "bg-[#C23030]",
			textColorClass: "text-white",
		},
		month: {
			kor: "해",
			main: "亥",
			sub: "陰水",
			bgColorClass: "bg-[#2F2F2F]",
			textColorClass: "text-white",
		},
		year: {
			kor: "유",
			main: "酉",
			sub: "陰金",
			bgColorClass: "bg-[#F9F9F9] border-[1px]",
			textColorClass: "text-black",
		}, // 酉는 흰색 배경에 검은 글씨
	},
	{
		label: "十星",
		subLabel: "(십성)",
		hour: { text: "比肩", subText: "(비견)" },
		day: { text: "劫財", subText: "(겁재)" },
		month: { text: "食神", subText: "(식신)" },
		year: { text: "偏財", subText: "(편재)" },
	},
	{
		label: "十二運星",
		subLabel: "(십이운성)",
		hour: { text: "死", subText: "(사)" },
		day: { text: "帝旺", subText: "(제왕)" },
		month: { text: "胎", subText: "(태)" },
		year: { text: "長生", subText: "(장생)" },
	},
	{
		label: "十二神殺",
		subLabel: "(십이신살)",
		hour: { text: "劫殺", subText: "(겁살)" },
		day: { text: "地殺", subText: "(지살)" },
		month: { text: "驛馬殺", subText: "(역마살)" },
		year: { text: "將星殺", subText: "(장성살)" },
	},
	{
		label: "貴人",
		subLabel: "(귀인)",
		hour: "(없음)",
		day: "(없음)",
		month: { text: "天乙", subText: "(천을귀인)" },
		year: {
			items: [
				{ text: "天乙", subText: "(천을귀인)" },
				{ text: "太極", subText: "(태극귀인)" },
				{ text: "文昌", subText: "(문창귀인)" },
			],
		},
	},
];

const renderCellContent = (
	content: Row[keyof Omit<Row, "label" | "subLabel">],
	idx: number,
	colKey: keyof Omit<Row, "label" | "subLabel">,
) => {
	if (content === null || content === undefined)
		return (
			<td
				className="border-r-[#8A8A8A] border-b-[1px] border-r-[0.5px] last:border-black last:border-r-[1px] bg-white"
				key={`${idx}-${colKey}`}
			/>
		);

	if (typeof content === "string")
		return (
			<td
				key={`${idx}-${colKey}`}
				className="text-[7px] @2xs:text-[8px] @xs:text-[9px] @sm:text-[11px] @md:text-[13px] border-r-[#8A8A8A] border-b-[1px] border-r-[0.5px] last:border-black last:border-r-[1px] bg-white"
			>
				{content}
			</td>
		);

	if ("main" in content && "sub" in content) {
		// SajuCellCharacter
		return (
			<td
				key={`${idx}-${colKey}`}
				className="border-r-[#8A8A8A] border-b-[1px] border-r-[0.5px] last:border-black last:border-r-[1px] bg-white"
			>
				<div
					className={`align-middle content-center aspect-square ${content.bgColorClass} ${content.textColorClass} m-1 p-1 rounded-lg @xs:rounded-xl @md:rounded-2xl leading-[1.1] `}
				>
					<div className="text-[5px] @2xs:text-[5px] @xs:text-[7px] @sm:text-[9px] @md:text-[11px]">
						{content.kor}
					</div>
					<div className="text-[20px] @2xs:text-[22px] @xs:text-[24px] @sm:text-[26px] @md:text-[28px]">
						{content.main}
					</div>
					<div className="text-[6px] @2xs:text-[7px] @xs:text-[8px] @sm:text-[10px] @md:text-[12px]">
						{content.sub}
					</div>
				</div>
			</td>
		);
	}
	if ("text" in content) {
		return (
			<td
				key={`${idx}-${colKey}`}
				className="border-r-[#8A8A8A] border-b-[1px] border-r-[0.5px] last:border-black last:border-r-[1px] bg-white p-[1%]"
			>
				<div className="text-[10px] @2xs:text-[12px] @xs:text-[14px] @sm:text-[16px] @md:text-[18px]">
					{content.text}
				</div>
				<div className="text-[7px] @2xs:text-[8px] @xs:text-[9px] @sm:text-[11px] @md:text-[13px]">
					{content?.subText}
				</div>
			</td>
		);
	}
	if ("items" in content) {
		return (
			<td
				key={`${idx}-${colKey}`}
				className="border-r-[#8A8A8A] border-b-[1px] border-r-[0.5px] last:border-black last:border-r-[1px] bg-white p-[1%] space-y-1"
			>
				{content.items.map((item, index) => {
					return (
						<div key={item.text + index}>
							<div className="text-[10px] @2xs:text-[12px] @xs:text-[14px] @sm:text-[16px] @md:text-[18px]">
								{item.text}
							</div>
							<div className="text-[7px] @2xs:text-[8px] @xs:text-[9px] @sm:text-[11px] @md:text-[13px]">
								{item?.subText}
							</div>
						</div>
					);
				})}
			</td>
		);
	}

	return (
		<td
			key={`${idx}-${colKey}`}
			className="border-r-[#8A8A8A] border-b-[1px] border-r-[0.5px] last:border-black last:border-r-[1px] bg-white"
		></td>
	);
};

export default function Table() {
	const columnHeaders = ["時", "日", "月", "年"];
	const columns: (keyof Omit<Row, "label" | "subLabel">)[] = [
		"hour",
		"day",
		"month",
		"year",
	];
	return (
		<div className="relative w-full h-full flex justify-center my-[8%]">
			<div className="relative border-1 w-[92.5%]">
				<table className="w-full text-black border-black align-middle items-center table-fixed">
					<colgroup>
						{/* 첫 번째 열만 너비 자동 */}
						<col className="w-2/14" />
						<col className="w-3/14" />
						<col className="w-3/14" />
						<col className="w-3/14" />
						<col className="w-3/14" />
					</colgroup>
					<thead className="">
						<tr className="text-sm @2xs:text-base @xs:text-lg @sm:text-xl @md:text-2xl">
							<th className="border-black border-r-[1px] border-b-[1px]"></th>
							{columnHeaders.map((header, idx) => (
								<th
									className="p-[3%] text-center border-r-[#8A8A8A] border-b-[1px] border-r-[0.5px] last:border-black last:border-r-[1px]"
									key={header + idx}
								>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="text-center">
						{data.map((row, idx) => {
							return (
								<tr
									className={
										idx == 1
											? "border-b-[#9B9B9B] border-b-[0.5px]"
											: "border-b-black border-b-1"
									}
									key={idx}
								>
									<td className="border-r-black border-r-1">
										{row.label.length > 2 ? (
											<>
												<div
													className={`text-[7px] @2xs:text-[8px] @xs:text-[9px] @sm:text-[10px] @md:text-[11px]`}
												>
													{row.label}
												</div>
											</>
										) : (
											<>
												<div
													className={`text-[11px] @2xs:text-[12px] @xs:text-[13px] @sm:text-[14px] @md:text-[15px]`}
												>
													{row.label}
												</div>
											</>
										)}
										<div className="text-[6px] @2xs:text-[7px] @xs:text-[8px] @sm:text-[9px] @md:text-[10px] font-bold">
											{row?.subLabel}
										</div>
									</td>
									{columns.map((colKey) =>
										renderCellContent(row[colKey], idx, colKey),
									)}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
