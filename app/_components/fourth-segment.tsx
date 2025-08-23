import TitleLeftSVG from "@/components/svgs/title-left-svg";
import TitleRightSVG from "@/components/svgs/title-right-svg";
import Table from "./table";

const InnerLine = () => {
	return (
		<>
			<div className="absolute h-full border-1 border-[#2B557E] left-1" />
			<div className="absolute h-full border-1 border-[#2B557E] right-1" />
			<div className="absolute w-full border-1 border-[#2B557E] top-1" />
			<div className="absolute w-full border-1 border-[#2B557E] bottom-1" />
		</>
	);
};

const Title = () => {
	return (
		<div className="relative flex w-full items-center justify-between mt-[10%]">
			<div className="absolute left-[1.5px] w-[17%] aspect-[56/38] flex items-center justify-center">
				<TitleLeftSVG />
			</div>
			<div className="relative flex w-full items-center justify-center flex-col space-y-[1%]">
				<span className="text-[#424242] text-xs @2xs:text-sm @xs:text-base @sm:text-lg @md:text-xl">
					김로켓님의 사주
				</span>
				<span className="font-bold text-[#424242] text-sm @2xs:text-base @xs:text-lg @sm:text-xl @md:text-2xl">
					1980년 8월27일 08:10
				</span>
			</div>
			<div className="absolute right-[1.5px] top-[-25%] w-[17%] aspect-[56/38] flex items-center justify-center">
				<TitleRightSVG />
			</div>
		</div>
	);
};

export default function FourthSegment() {
	return (
		<div className="relative flex w-full h-full justify-center items-center mt-[-5%] @container pb-30">
			<div className="relative w-[93.6%]  bg-[#F5F3EC] border-3 border-[#1B2F49] flex items-center justify-center">
				<div className="w-full h-full p-1">
					<Title />
					<Table />
				</div>
				<InnerLine />
			</div>
		</div>
	);
}
