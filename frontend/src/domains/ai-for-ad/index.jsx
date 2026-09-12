import React from 'react';
import { Layers, AlertTriangle, CheckCircle, FileText, Sparkles } from 'lucide-react';

/**
 * Domain Module: AI for AD (Automated Development)
 * Persona: Product Owner (Lavanya)
 * Lead Developer: Lavanya
 * 
 * IMPORTANT ARCHITECTURE NOTE:
 * This domain is isolated from AI for AMS and Engineering Leaders to ensure zero merge conflicts.
 * Lavanya can expand her Dashboard, Workflow Inbox, and Experience Zone inside this directory.
 */
export default function AiForAdDomain({ activeTab }) {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 3-Column PO Dashboard matching reference screenshot */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '20px',
        alignItems: 'start'
      }}>
        
        {/* COLUMN 1: ACTIVE EPICS & FEATURE RELEASES */}
        <div className="st-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-primary)' }}>
              Active Epics & Feature Releases
            </h3>
            <span style={{ fontSize: '0.72rem', background: 'var(--bg-subtle)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontWeight: 600 }}>
              Sprint 42 Backlog
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', textAlign: 'center' }}>
            <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px 6px', borderTop: '3px solid #ef4444' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ef4444' }}>1</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)' }}>Blocked</div>
            </div>
            <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px 6px', borderTop: '3px solid #f59e0b' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f59e0b' }}>4</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)' }}>In Review</div>
            </div>
            <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px 6px', borderTop: '3px solid #3b82f6' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#3b82f6' }}>9</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)' }}>In Progress</div>
            </div>
            <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px 6px', borderTop: '3px solid #64748b' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>15</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)' }}>Backlog</div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.85rem' }}>EPIC-104: Smart Claims Auto-Adjudication</strong>
              <span className="st-badge badge-success">Active</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              8/10 Stories completed &bull; AI Acceptance Criteria validation passed
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.85rem' }}>EPIC-108: Provider Portal Onboarding Flow</strong>
              <span className="st-badge badge-high">At Risk</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Pending compliance review on digital identity KYC
            </div>
          </div>
        </div>

        {/* COLUMN 2: BACKLOG ITEMS NEEDING PO INPUT */}
        <div className="st-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-primary)' }}>
              Backlog Items Needing PO Input
            </h3>
            <span style={{ fontSize: '0.72rem', background: 'var(--bg-subtle)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontWeight: 600 }}>
              3 PO Actions
            </span>
          </div>

          <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.85rem' }}>P2 &bull; User Story #409 requires AC clarification</strong>
              <button className="st-btn st-btn-outline" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>Review</button>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Member Claims Lookup &bull; Given-When-Then criteria drafted by AI
            </div>
            <div style={{ width: '100%', height: '4px', background: 'linear-gradient(90deg, #f59e0b, #ef4444)', borderRadius: '2px' }} />
          </div>

          <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.85rem' }}>P3 &bull; Scope Drift detected in Provider Directory Epic</strong>
              <span className="st-badge badge-high">At risk</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              3 new sub-tasks added during dev sprint without PO story points
            </div>
            <div style={{ width: '100%', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px' }} />
          </div>
        </div>

        {/* COLUMN 3: RELEASE & FEATURE SCOPE RISKS */}
        <div className="st-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-primary)' }}>
              Release & Feature Scope Risks
            </h3>
            <span style={{ fontSize: '0.72rem', background: 'var(--bg-subtle)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontWeight: 600 }}>
              Sprint 42 Target
            </span>
          </div>

          <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.85rem' }}>Release Target Slippage &bull; Member Portal v3 delayed by 3 days</strong>
              <span className="st-badge badge-critical">Critical</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              2 Epics blocked due to missing business compliance approval
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.85rem' }}>HIPAA Audit Trail Requirement Missing in Story #312</strong>
              <span className="st-badge badge-high">Elevated</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              AI audit detector flagged missing data encryption story criteria
            </div>
          </div>
        </div>

      </div>

      <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        Files located at: <code>frontend/src/domains/ai-for-ad/</code> &bull; Ready for Lavanya's implementation.
      </div>
    </div>
  );
}
