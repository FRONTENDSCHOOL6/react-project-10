import '@/components/Spinner/spinner.css';

export default function Spinner() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-[3.1875rem] -translate-y-[4.625rem]">
      <div className="spinner" />
      <span className="text-lg font-semibold">로딩 중 입니다</span>
    </div>
  );
}
