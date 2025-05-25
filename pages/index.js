import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Chanverse</h1>
      <Link href="/generate">
        <button>Start Generating</button>
      </Link>
    </div>
  )
}