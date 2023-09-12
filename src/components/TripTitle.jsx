export default function TripSelectTitle({
  question = '여행을 떠나시나요?',
  guide = '선택하세요.',
}) {
  return (
    <div className="flex flex-col items-center py-[1.875rem]">
      <h2 className="text-2xl font-bold text-contentsPrimary">{question}</h2>
      <h3 className="text-sm font-light text-gray-1">{guide}</h3>
    </div>
  );
}