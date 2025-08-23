import FirstBubbleSVG from "@/components/svgs/first-bubble-svg";
import Image from "next/image";

const UpperShadow = () => (
	<div
		className={`absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent from-[25.16%] to-black to-100% rotate-180`}
	/>
);

const DownShade = () => (
	<div
		className={`absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent from-[25.16%] to-[#F3F2EF] to-100% scale-x-[-1]`}
	/>
);

const FirstBubble = () => {
	return (
		<div className="absolute flex w-full bottom-[-19%] left-0 @container">
			<div className="relative text-black w-[70.09%] aspect-[1.408] flex items-center justify-center">
				<FirstBubbleSVG />
				<span className="absolute z-10 leading-[150%] mt-[8%] w-[62.3%] max-h-[63%] text-xs @2xs:text-xs @xs:text-sm @sm:text-base @md:text-lg break-keep wrap-break-word text-center flex items-center justify-center flex-col tracking-tight">
					<div>이제 본격적으로</div>
					<div>oo님의 사주팔자를</div>
					<div>분석해볼 차례네요</div>
				</span>
			</div>
		</div>
	);
};

export default function FirstSegment() {
	return (
		<div className="relative flex w-full h-full">
			<UpperShadow />
			<Image
				className="w-full h-full"
				src={"/first-segment.png"}
				priority
				alt=""
				width={375}
				height={652}
			/>
			<DownShade />
			<FirstBubble />
		</div>
	);
}
