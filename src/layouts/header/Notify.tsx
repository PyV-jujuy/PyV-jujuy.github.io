const ECONOMIC_PLAN_LINK =
  'https://drive.google.com/file/d/14dsxnYKZ9EYarq1fYWeJYnwGBwwUKH2X/view'

export default function Notify() {
  return (
    <div className="flex w-full text-center justify-center bg-primary-blue p-2">
      <a
        className="btn"
        href={ECONOMIC_PLAN_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Plan Económico Peronista
      </a>
    </div>
  )
}
