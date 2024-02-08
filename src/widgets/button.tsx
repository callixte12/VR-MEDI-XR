import Link from "next/link"

interface PageProps {
    styles: String,
    label: String
}

const Button = ({ styles, label }: PageProps) => (
  <button type="button" className={`z-20 ${styles}`}>
    <Link href="#contact">
      {label}
    </Link>
  </button>
)

export default Button