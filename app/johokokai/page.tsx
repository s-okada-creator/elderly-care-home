import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Phone, Printer } from "lucide-react"

export const metadata: Metadata = {
  title: "情報公開｜楠根の里｜社会福祉法人秋桜福祉会",
  description:
    "社会福祉法人秋桜福祉会の情報公開ページです。定款・現況報告書・計算書類・役員名簿・苦情相談窓口を掲載しています。",
}

const kessanFiles = [
  { year: "令和7年度", houjin: "/kessan-r7-houjin.pdf", kyoten: "/kessan-r7-kyoten.pdf" },
  { year: "令和6年度", houjin: "/kessan-r6-houjin.pdf", kyoten: "/kessan-r6-kyoten.pdf" },
  { year: "令和5年度", houjin: "/kessan-r5-houjin.pdf", kyoten: "/kessan-r5-kyoten.pdf" },
]

function PdfLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-[#6CB2F7] hover:underline"
    >
      <FileText className="h-4 w-4 shrink-0" />
      {label}（PDF）
    </a>
  )
}

export default function JohokokaiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-[#6CB2F7] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            楠根の里に戻る
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">楠根の里</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-10">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">情報公開</h1>
            <p className="text-gray-600">社会福祉法人秋桜福祉会</p>
            <p className="text-sm text-gray-500 mt-2">
              社会福祉法の規定に基づき、法人に関する情報を公開しています。
            </p>
          </div>

          {/* 定款 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">定款</h2>
            <ul className="space-y-2">
              <li>
                <PdfLink href="/teikan.pdf" label="社会福祉法人秋桜福祉会 定款" />
              </li>
              <li>
                <Link href="/teikan" className="inline-flex items-center gap-2 text-[#6CB2F7] hover:underline">
                  <Printer className="h-4 w-4 shrink-0" />
                  定款（Web版・印刷用）
                </Link>
              </li>
            </ul>
          </section>

          {/* 現況報告書・計算書類 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">現況報告書・計算書類</h2>
            <ul className="space-y-2 mb-6">
              <li>
                <PdfLink href="/genjyo-houkokusho.pdf" label="令和6年度 計算書類一式" />
              </li>
            </ul>
            <h3 className="text-lg font-semibold mb-3">資金収支計算書</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="py-2 px-3 text-left font-medium">年度</th>
                    <th className="py-2 px-3 text-left font-medium">法人単位</th>
                    <th className="py-2 px-3 text-left font-medium">拠点区分（グループホーム楠根の里）</th>
                  </tr>
                </thead>
                <tbody>
                  {kessanFiles.map((row) => (
                    <tr key={row.year} className="border-b">
                      <td className="py-3 px-3 whitespace-nowrap">{row.year}</td>
                      <td className="py-3 px-3">
                        <PdfLink href={row.houjin} label="法人単位 資金収支計算書" />
                      </td>
                      <td className="py-3 px-3">
                        <PdfLink href={row.kyoten} label="拠点区分 資金収支計算書" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 役員名簿 */}
          <section id="yakuin-meibo" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">役員名簿</h2>
            <p className="text-sm text-gray-500 mb-4">令和8年6月作成</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">監事</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>西村　伊一郎</li>
                  <li>中谷　廣一</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">理事</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>乾　栄嗣</li>
                  <li>香川　英生</li>
                  <li>久本　歩</li>
                  <li>長尾　喜一郎</li>
                  <li>川口　瑞穂</li>
                  <li>東森　毅</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">評議員</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>有馬　康夫</li>
                  <li>河野　正美</li>
                  <li>𠮷田　淳子</li>
                  <li>木下　亮希</li>
                  <li>松田　巧一</li>
                  <li>横山　卓史</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">評議員選任・解任委員会</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>西村　伊一郎（監事）</li>
                  <li>中谷　廣一（監事）</li>
                  <li>川口　清</li>
                  <li>杉藤　嘉明</li>
                  <li>夏野　真梨子</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 苦情相談窓口 */}
          <section id="kujo-sodan" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4 text-[#6CB2F7]">苦情相談窓口</h2>
            <p className="leading-relaxed mb-4">
              社会福祉法第82条の規定により、当法人では利用者様からの苦情に適切に対応する体制を整え、苦情解決に努めます。
            </p>
            <p className="leading-relaxed mb-6">
              ご相談や苦情などがございましたら、当事業所の窓口までご遠慮なくお申し出下さい。
            </p>
            <div className="rounded-lg border bg-gray-50 p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">相談窓口</h3>
                <p className="mb-1">グループホーム楠根の里</p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#6CB2F7]" />
                  電話：072-880-1165
                </p>
                <p className="ml-6">FAX：072-811-4165</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">苦情解決責任者</h3>
                <p>理事長　東森　毅</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">苦情受付担当者</h3>
                <p>管理者　川口　瑞穂</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">苦情解決の実績</h3>
                <p>令和7年度　相談件数：0件</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t text-center text-sm text-gray-500">
        <p>社会福祉法人秋桜福祉会</p>
        <p>〒572-0811 大阪府寝屋川市楠根南町24番22号</p>
      </footer>
    </div>
  )
}
