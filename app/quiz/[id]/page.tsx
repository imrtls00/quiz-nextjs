import { supabase } from '../../supabase'

async function Quiz( id ) {
    const { data : quiz } = await supabase
        .from('quiz')
        .select('*')
        .eq('id', id.quiz)
        .single()
    ;
    return (
        <div>
            <h1>{quiz.name}</h1>
        </div>
  )
}

export default function QuizPage({ params }) {
    return (
      <div>
        <Quiz quiz={ params.id } />
        <p>This is the quiz # { params.id }.</p>
      </div>
    );
}