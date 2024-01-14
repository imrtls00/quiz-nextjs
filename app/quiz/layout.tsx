import Link from 'next/link'

export default function QuizPage({ 
    children
}: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <Link href="/">
            Go Back
        </Link>
        { children }
      </div>
    );
}