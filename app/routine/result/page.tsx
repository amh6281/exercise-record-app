import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RoutineResultPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="sm">
          <Link href="/routine/new" className="flex items-center gap-1 text-xs">
            <ArrowLeft className="h-3 w-3" />
            다시 생성하기
          </Link>
        </Button>
        <div>
          <h1 className="text-xl font-semibold">AI 운동 루틴 결과</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            여기에서 AI가 생성한 오늘의 운동 루틴이 카드 형태로 표시됩니다.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-5 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
        아직 루틴 데이터가 연결되지 않았습니다. 다음 단계에서 AI API와
        연동하여 실제 루틴을 표시하고, 이미지 저장/공유 기능을 붙일 예정입니다.
      </div>
    </div>
  );
}


