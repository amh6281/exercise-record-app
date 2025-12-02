import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RoutineNewPage() {
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
          <h1 className="text-xl font-semibold">운동 루틴 생성기</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            오늘 운동할 부위와 시간만 선택하면, AI가 지금 컨디션에 맞는 루틴을
            만들어 드립니다.
          </p>
        </div>
      </div>

      <div className="grid gap-6 rounded-2xl border bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-xs font-semibold text-zinc-500">
          STEP 1 · 오늘 운동 계획 입력
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          이 페이지에서는 폼 UI만 제공됩니다. AI 연동과 실제 루틴 생성은 이후
          단계에서 연결됩니다.
        </p>
      </div>
    </div>
  );
}


