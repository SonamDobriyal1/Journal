import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/lib/site-config";

export default function EditorialPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          Editorial team
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
          The editorial team brings together scholars committed to rigorous peer review
          and the dissemination of high-quality research.
        </p>

        <section className="mt-12 border-t border-[var(--journal-border)] pt-10">
          <h2 className="font-serif text-xl font-semibold text-[var(--journal-heading)]">
            Dr. Japji Kaur
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
            <p>
              Dr. Japji Kaur is a data-driven research and analytics professional with a
              Ph.D. in Economics from Delhi Technological University. She specializes in
              empirical data analysis, quantitative research, and insight generation to
              support strategic decision-making across business and technology
              environments.
            </p>
            <p>
              With strong expertise in data analytics, statistical modeling, and consumer
              insight analysis, Dr. Kaur has experience transforming complex datasets into
              actionable insights that can support product development, marketing
              strategy, and technology-driven decision processes. She is proficient in
              analytical and programming tools including SPSS, STATA, R, Python, NVivo,
              and SmartPLS, enabling advanced data modeling, predictive analysis, and
              behavioral insights.
            </p>
            <p>
              Currently working as a Research Manager at Athena Education, Gurgaon, she
              leads research initiatives involving data analysis, market insights, and
              performance evaluation to guide strategic planning and innovation. Her
              professional experience also includes over six years of teaching and
              research at Delhi Technological University and academic collaboration with
              BML Munjal University, where she developed strong capabilities in data
              interpretation, research design, and analytical problem-solving.
            </p>
            <p>
              Dr. Kaur is particularly interested in roles at the intersection of
              technology, data analytics, and strategy, including marketing analytics,
              product analytics, research consulting, and technology development teams,
              where she can leverage data-driven methodologies to optimize business
              performance and user engagement.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--journal-border)] pt-10">
          <h2 className="font-serif text-xl font-semibold text-[var(--journal-heading)]">
            Dr. Tayyaba Rani
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
            <p>
              Dr. Tayyaba Rani is an applied economics researcher with a Ph.D. from
              Xi’an Jiaotong University, China, specializing in energy economics,
              environmental sustainability, and financial development. Her research
              focuses on the dynamic interplay between digitalization, green investment,
              financial inclusion, and sustainable economic growth, with a particular
              emphasis on South Asian and emerging economies.
            </p>
            <p>
              With extensive expertise in empirical and quantitative research, Dr. Rani
              is proficient in advanced econometric techniques and statistical tools,
              including R, Stata, and EViews, enabling robust data analysis and
              policy-relevant insights. She has authored more than 19 publications in
              high-impact international journals such as{" "}
              <em>Technology in Society</em>, <em>Energy Policy</em>,{" "}
              <em>Resources Policy</em>, and{" "}
              <em>Environmental Progress &amp; Sustainable Energy</em>.
            </p>
            <p>
              Dr. Rani also brings valuable academic experience, having taught finance,
              accounting, and economics courses at both undergraduate and graduate
              levels. Her research contributions aim to inform evidence-based
              policymaking and promote sustainable development through interdisciplinary
              and data-driven approaches.
            </p>
            <p>
              Her editorial and research interests lie at the intersection of energy
              economics, environmental policy, digital transformation, and sustainable
              development, where she seeks to contribute to advancing high-quality
              academic scholarship and impactful research dissemination.
            </p>
          </div>
        </section>

        <p className="mt-12 border-t border-[var(--journal-border)] pt-8 text-sm text-[var(--journal-muted)]">
          Contact:{" "}
          <a className="text-[var(--journal-accent)] hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </p>
      </div>
    </AppShell>
  );
}
