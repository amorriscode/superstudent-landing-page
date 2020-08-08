import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-ss-blue md:bg-transparent pt-2 md:pt-5">
      <ul className="flex justify-between items-center container mx-auto p-5 ">
        <li>
          <Link href="/">
            <a className="leading-none text-white md:text-ss-blue font-logo text-5xl">
              SuperStudent
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
