import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReportResultPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="sm">
          <Link href="/report/new" className="flex items-center gap-1 text-xs">
            <ArrowLeft className="h-3 w-3" />
            다시 생성하기
          </Link>
        </Button>
        <div>
          <h1 className="text-xl font-semibold">AI 운동 리포트</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            AI가 분석한 월간 운동 통계와 부위별 그래프, 가장 많이 한 운동 TOP 5가
            이 페이지에 카드 형태로 표시됩니다.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-5 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
        다음 단계에서 AI 분석 결과와 Recharts 도넛 차트, 카드 이미지 다운로드
        기능을 연결할 예정입니다.
      </div>
    </div>
  );
}


