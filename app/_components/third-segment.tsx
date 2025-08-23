import SecondBubbleSVG from "@/components/svgs/second-bubble-svg";
import Image from "next/image";

const DownShade = () => {
	return (
		<div
			className="absolute bottom-0 left-0 w-full h-[38.6%]
 bg-gradient-to-b 
  from-transparent 
  via-[#F3F2EF/0] 
  via-[25.16%] 
  to-[#F3F2EF] 
  -scale-x-100
     "
		/>
	);
};

const SecondBubble = () => (
	<div className="absolute flex w-full top-[-38%] left-[-6.4%] @container">
		<div className="relative text-black w-[92%] aspect-[1.85] flex items-center justify-center">
			<SecondBubbleSVG />
			<span className="absolute z-10 mt-[-8%] w-[71.5%] max-h-[34.5%] text-xs @2xs:text-xs @xs:text-sm @sm:text-base @md:text-lg break-keep wrap-break-word text-center leading-[150%] flex items-center justify-center flex-col tracking-tight">
				<div>제가 oo님의 사주를</div>
				<div>보기 쉽게 표로 정리했어요</div>
			</span>
		</div>
	</div>
);

export default function ThirdSegment() {
	return (
		<div className="relative w-full aspect-[375/306]">
			<SecondBubble />
			<Image
				className="w-full h-full"
				src={"/third-segment.png"}
				alt=""
				width={375}
				height={306}
			/>
			<DownShade />
		</div>
	);
}
