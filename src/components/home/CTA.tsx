import Link from "next/link";

const CTA = () => {
  return (
    <section className="w-full max-w-2xl text-center">
      <Link
        href="/routine/beginner"
        className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
      >
        시작하기
      </Link>
    </section>
  );
};

export default CTA;
