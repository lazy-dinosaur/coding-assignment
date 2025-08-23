import FirstSegment from "./_components/first-segment";
import SecondSegment from "./_components/second-segment";
import ThirdSegment from "./_components/third-segment";
import FourthSegment from "./_components/fourth-segment";

/*맨 첫 섹션의 높이는 652px 첫 이미지의 크기*/

export default function Home() {
	return (
		<div className="bg-[#F3F2EF] max-w-md w-full h-full mx-auto justify-center @container">
			<FirstSegment />
			<div className="relative w-full aspect-[375/120]" />
			<SecondSegment />
			<div className="relative w-full aspect-[375/40]" />
			<ThirdSegment />
			<FourthSegment />
		</div>
	);
}
