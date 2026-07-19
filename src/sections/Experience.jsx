import React from "react";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import { experience, internships, communityExperience } from "../portfolio";
import { useLanguage } from "../i18n/LanguageContext";

const MONTHS = {
  january: 0, february: 1, march: 2, april: 3, may: 4, mai: 4, june: 5,
  july: 6, jully: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

const parseDate = (raw) => {
  const match = raw.trim().toLowerCase().match(/([a-zé]+)\s+(\d{4})/);
  if (!match) return 0;
  return new Date(Number(match[2]), MONTHS[match[1]] ?? 0).getTime();
};

/** Sort most recent first: ongoing roles on top (by start date), then by end date. */
const byMostRecent = (items) =>
  [...items].sort((a, b) => {
    const [aStart, aEnd = ""] = a.date.split(/[–-]/);
    const [bStart, bEnd = ""] = b.date.split(/[–-]/);
    const aOngoing = /present/i.test(aEnd);
    const bOngoing = /present/i.test(bEnd);
    if (aOngoing !== bOngoing) return aOngoing ? -1 : 1;
    if (aOngoing && bOngoing) return parseDate(bStart) - parseDate(aStart);
    return parseDate(bEnd) - parseDate(aEnd);
  });

const XpCard = ({ item, delay }) => {
  const { tItem } = useLanguage();

  return (
    <Reveal delay={delay}>
      <article className="cine-glass cine-tilt xp-card">
        <div className="xp-card-head">
          <img className="xp-logo" src={item.companylogo} alt={`${item.company} logo`} />
          <div>
            <h3 className="xp-role">{tItem(item.company, "role", item.role)}</h3>
            <p className="xp-company">{item.company}</p>
          </div>
        </div>
        <p className="xp-date">{item.date}</p>
        <p className="xp-desc">{tItem(item.company, "desc", item.desc)}</p>
      </article>
    </Reveal>
  );
};

const Group = ({ title, items }) => (
  <div className="xp-group">
    <Reveal as="h3" className="xp-group-title">
      {title}
    </Reveal>
    <div className="xp-grid">
      {byMostRecent(items).map((item, i) => (
        <XpCard key={`${item.company}-${item.role}`} item={item} delay={(i % 2) * 100} />
      ))}
    </div>
  </div>
);

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="cine-section" id="experience">
      <div className="cine-container">
        <SectionHead eyebrow={t.xp.eyebrow} title={t.xp.title} lead={t.xp.lead} />

        <Group title={t.xp.groups.pro} items={experience} />
        <Group title={t.xp.groups.internships} items={internships} />
        <Group title={t.xp.groups.community} items={communityExperience} />
      </div>
    </section>
  );
};

export default Experience;
