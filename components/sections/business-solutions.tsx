'use client';
import { MotionWrapper } from '../hoc/motion-wrapper';

export default function BusinessSolutions() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <MotionWrapper variant="slideLeft">
          <div className="">
            {' '}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Business Solutions With{' '}
              <span className="gradient-text">InnoX</span>
            </h2>
          </div>
        </MotionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg">
          <MotionWrapper variant="slideUp">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  role="img"
                  aria-label="Human Resource"
                  className="text-2xl"
                >
                  🧑‍💼
                </span>
                <span className="font-bold text-xl">Human Resource</span>
              </div>
              <div>
                Human Resource Management, Recruitment, Time & Attendance,
                Employee Self-Service
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper variant="slideUp">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span role="img" aria-label="Finance" className="text-2xl">
                  💲
                </span>
                <span className="font-bold text-xl">
                  Finance &amp; Accounting
                </span>
              </div>
              <div>
                Financials &amp; Accounting, Payroll Management, Budget
                Management, Procurement, Billing System
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper variant="slideUp">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  role="img"
                  aria-label="Administration"
                  className="text-2xl"
                >
                  📊
                </span>
                <span className="font-bold text-xl">Administration</span>
              </div>
              <div>
                Task Management, Project Management, Activity Reports, Document
                Management (gDocs)
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper variant="slideUp">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span role="img" aria-label="Legal" className="text-2xl">
                  📝
                </span>
                <span className="font-bold text-xl">Legal Compliance</span>
              </div>
              <div>
                Legal Management, Compliance Tracking, Case Management, Document
                Archiving, Laws &amp; Judgement Catalogues
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper variant="slideUp">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span role="img" aria-label="Power" className="text-2xl">
                  ⚡
                </span>
                <span className="font-bold text-xl">Power and Utilities</span>
              </div>
              <div>
                Power Apps, eLog Book, Telemetry (iTel), Planned Outage
                Management, PoSAM (Power Systems Asset Management)
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper variant="slideUp">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span role="img" aria-label="Safety" className="text-2xl">
                  🛡️
                </span>
                <span className="font-bold text-xl">Safety and Risk</span>
              </div>
              <div>
                Safety Management, Accident Reporting, PPE Requests, WASACO
                Audits, Safety Group Management
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
