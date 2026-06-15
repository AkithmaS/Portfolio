import { projectCategories } from '@/assets/data/projects'

export default function ProjectFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {projectCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${active === cat
              ? 'bg-gradient-to-r from-accent to-accentAlt text-white shadow-glow-sm'
              : 'border border-border text-textSecondary hover:border-accent hover:text-accent'}`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
