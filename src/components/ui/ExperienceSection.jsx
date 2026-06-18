import ExperienceIllustration from "./ExperienceIllustration";

function formatDate(date) {
  if (!date) return "";
  const cleaned = date.split("·")[0].trim();
  return `(${cleaned})`;
}

function roleLabel(role) {
  return role.split("·")[0].trim().toUpperCase();
}

export default function ExperienceCard({ item }) {
  const isCurrent = item.current;

  return (
    <article
      className={`experience-card group relative overflow-hidden rounded-xl p-5 sm:p-6${
        isCurrent ? " experience-card-active" : ""
      }`}
    >
      <p className="experience-date absolute right-4 top-4 font-mono text-xs sm:right-5 sm:top-5 sm:text-sm">
        {formatDate(item.date)}
      </p>

      <div className="flex items-start gap-4 pr-24 sm:gap-5 sm:pr-28">
        <div className="experience-icon flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border p-2 sm:h-16 sm:w-16">
          <img
            src={item.img}
            alt={item.company}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0 pt-1">
          <h3 className="experience-role text-sm font-bold tracking-wide sm:text-base">
            {roleLabel(item.role)}
          </h3>
          <p className="experience-company mt-2 text-sm sm:text-[0.95rem]">{item.company}</p>
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection({ items }) {
  return (
    <section id="experience" className="experience-section relative mt-20 scroll-mt-24 sm:mt-28">
      <div className="mb-10 flex justify-center">
        <span className="experience-pill">Experiences</span>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <ExperienceIllustration />

        <div className="space-y-5">
          {items.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
