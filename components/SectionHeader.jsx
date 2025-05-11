export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">{subtitle}</div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{title}</h2>
      <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
    </div>
  )
}
