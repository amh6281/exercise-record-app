import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReportNewPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="sm">
          <Link href="/" className="flex items-center gap-1 text-xs">
            <ArrowLeft className="h-3 w-3" />
            홈으로
          </Link>
        </Button>
        <div>
          <h1 className="text-xl font-semibold">운동 리포트 생성기</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            그동안 기록해 둔 운동 내용을 붙여넣으면, 월간 운동 리포트를 AI가
            요약해 드립니다.
          </p>
        </div>
      </div>

      <div className="grid gap-6 rounded-2xl border bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-xs font-semibold text-zinc-500">
          STEP 1 · 운동 기록 텍스트 입력
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          이 페이지에서는 텍스트 입력 UI와 예시를 먼저 구성합니다. AI 분석과
          리포트 생성은 이후 단계에서 연결됩니다.
        </p>
      </div>
    </div>
  );
}


