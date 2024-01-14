import Link from 'next/link'
import { supabase } from './supabase'
import { Suspense } from 'react';

async function Quizzes() {
  const { data : quizzes } = await supabase
    .from('quiz')
    .select('*')
  ;
  return (
    <ul>
      {quizzes.map((quiz) => (
        <li key={quiz.id}>
          <Link href={`/quiz/${quiz.id}`}>
            {quiz.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p> Loaadingggg... </p>}>
        <Quizzes />
      </Suspense>
    </div>
  )
}
