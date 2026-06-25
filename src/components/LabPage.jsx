import ButtonLink from "./ButtonLink.jsx";
import SectionNav from "./SectionNav.jsx";

function PageHero({ page }) {
  return (
    <section className="lab-page-hero">
      <div className="inside lab-page-hero-grid">
        <div className="lab-page-hero-copy">
          <span>{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
        </div>
        <div className="lab-page-hero-placeholder" aria-label={`${page.title} image placeholder`}>
          <span>Image area</span>
        </div>
      </div>
    </section>
  );
}

function Timeline({ items }) {
  return (
    <div className="profile-timeline">
      {items.map((item) => (
        <article className="profile-timeline-item" key={`${item.period}-${item.title}`}>
          <span>{item.period}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProfilePage({ page }) {
  return (
    <>
      <PageHero page={page} />
      <section className="lab-page-section profile-detail-section" id="about">
        <div className="inside profile-detail-grid">
          <aside className="professor-panel" id="contact">
            <div className="professor-photo-placeholder">
              <span>Professor photo</span>
            </div>
            <h2>{page.name}</h2>
            <p>{page.role}</p>
            <dl>
              {page.contact.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
          <div className="profile-history">
            <section id="career">
              <h2>Career</h2>
              <Timeline items={page.career} />
            </section>
            <section id="education">
              <h2>Education</h2>
              <Timeline items={page.education} />
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

function PublicationPage({ page }) {
  return (
    <>
      <PageHero page={page} />
      <section className="publication-stats-section" id="summary">
        <div className="inside publication-stats">
          {page.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="lab-page-section publication-list-section" id="publications">
        <div className="inside publication-list">
          {page.publications.map((paper) => (
            <article className="publication-row" key={paper.title}>
              <span>{paper.year}</span>
              <div>
                <h2>{paper.title}</h2>
                <p>{paper.authors}</p>
                <em>{paper.venue}</em>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ResearchPage({ page }) {
  return (
    <>
      <PageHero page={page} />
      <section className="lab-page-section research-topic-section" id="topics">
        <div className="inside research-topic-grid">
          {page.topics.map((topic, index) => (
            <article className="research-topic-card" key={topic.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{topic.title}</h2>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="lab-page-section research-project-section" id="projects">
        <div className="inside research-project-list">
          <h2>Current Projects</h2>
          {page.projects.map((project) => (
            <article className="research-project-row" key={project.title}>
              <div className="project-image-placeholder">
                <span>Project image</span>
              </div>
              <div>
                <span>{project.period}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function LecturePage({ page }) {
  return (
    <>
      <PageHero page={page} />
      <section className="lab-page-section lecture-section" id="schedule">
        <div className="inside lecture-layout">
          <div className="lecture-meta" id="notes">
            <span>{page.semester}</span>
            <h2>Weekly Timetable</h2>
            <ul>
              {page.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <div className="lecture-table">
            {page.courses.map((course) => (
              <article className="lecture-row" key={`${course.day}-${course.title}`}>
                <strong>{course.day}</strong>
                <span>{course.time}</span>
                <h3>{course.title}</h3>
                <p>{course.room}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MembersPage({ page }) {
  return (
    <>
      <PageHero page={page} />
      {page.groups.map((group) => (
        <section className="lab-page-section member-section" id={group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} key={group.title}>
          <div className="inside">
            <h2 className="member-group-title">{group.title}</h2>
            <div className="member-grid">
              {group.people.map((person) => (
                <article className="member-card" key={person.name}>
                  <div className="member-photo-placeholder">
                    <span>Photo</span>
                  </div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  <span>{person.interest}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function EventsPage({ page }) {
  return (
    <>
      <PageHero page={page} />
      <section className="lab-page-section event-section" id="events">
        <div className="inside event-grid">
          {page.events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-image-placeholder">
                <span>Event image</span>
              </div>
              <div>
                <time>{event.date}</time>
                <h2>{event.title}</h2>
                <p>{event.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PageBody({ page }) {
  if (page.type === "profile") return <ProfilePage page={page} />;
  if (page.type === "publication") return <PublicationPage page={page} />;
  if (page.type === "research") return <ResearchPage page={page} />;
  if (page.type === "lecture") return <LecturePage page={page} />;
  if (page.type === "members") return <MembersPage page={page} />;
  if (page.type === "events") return <EventsPage page={page} />;
  return <PageHero page={page} />;
}

export default function LabPage({ page }) {
  return (
    <main className={`lab-page lab-page-${page.type}`}>
      <PageBody page={page} />
      <div className="page-section-nav-wrap">
        <SectionNav title={page.title} items={page.nav} />
      </div>
      <section className="lab-page-cta">
        <div className="inside lab-page-cta-inner">
          <h2>Artificial Intelligence Convergence Software</h2>
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </section>
    </main>
  );
}
