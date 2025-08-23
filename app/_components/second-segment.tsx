import SecondSegmentSvg from "@/components/svgs/second-segment-left";
import Image from "next/image";

export default function SecondSegment() {
	return (
		<div className="relative w-[93.6%] aspect-[351/285]">
			<div className="absolute aspect-[1.275] w-[43.6%] left-0 top-[44.5%]">
				<SecondSegmentSvg />
			</div>
			<Image
				className="absolute w-[45.8%] aspect-[0.55] h-full right-0 top-0"
				src={"/second-segment-right-image.png"}
				width={161}
				height={285}
				alt=""
			/>
		</div>
	);
}
