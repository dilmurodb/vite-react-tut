import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

export default function TaskOne() {
    return (
        <main>
            <h1>TaskOne Component</h1>
            <ol>
                <li>Great library</li>
                <li>Lots of materials to learn</li>
                <li>Easy to learn</li>
                <li>Lots of job opportunities</li>
            </ol>  
        </main>
        
    )
}

root.render(
    <TaskOne />
)