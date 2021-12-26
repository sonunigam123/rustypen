import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="max-w-2xl mx-auto flex-row flex items-center justify-between mt-16 mb-16 md:mb-12">
      <Link href="/">
        <a className="text-4xl font-bold tracking-tighter leading-tight md:pr-8">
          Rustypen.
        </a>
      </Link>
    </h2>
  )
}
