import React from 'react';
import { DOMAIN_PERSONA_MAP } from './WorkspaceBar';

export default function PersonaHero({ selectedDomain, selectedRole }) {
  const persona = DOMAIN_PERSONA_MAP[selectedDomain] || DOMAIN_PERSONA_MAP['AI for AMS'];

  return (
    <div style={{ marginBottom: '20px' }}>
      {/* Top Banner Card */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-sm)',
        gap: '20px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Left Title & Tagline */}
        <div style={{ flex: '1 1 auto', minWidth: '300px' }}>
          <h1 style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-display)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: 0
          }}>
            <span>{selectedDomain}</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span>{selectedRole}</span>
          </h1>
          <p style={{
            fontSize: '0.83rem',
            color: 'var(--text-muted)',
            marginTop: '3px',
            margin: 0
          }}>
            {persona.subtitle}
          </p>
        </div>

        {/* Right Section: Metadata & Info Chips Pinned to the Far Right */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexShrink: 0,
          marginLeft: 'auto'
        }}>
          {/* Metadata items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexShrink: 0 }}>
            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Platform</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{persona.platform}</div>
            </div>

            <div style={{ width: '1px', height: '26px', background: 'var(--border-color)' }} />

            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Shift</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{persona.shift}</div>
            </div>

            <div style={{ width: '1px', height: '26px', background: 'var(--border-color)' }} />

            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Shift Progress</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{persona.shiftProgress}</div>
            </div>
          </div>

          <div style={{ width: '1px', height: '30px', background: 'var(--border-color)' }} />

          {/* Context Info Chips — Pinned to the FAR RIGHT */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0
          }}>
            {persona.infoChips && persona.infoChips.map((chip, i) => (
              <div key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: chip.bg || 'var(--bg-subtle)',
                border: `1px solid ${chip.border || 'var(--border-color)'}`,
                borderRadius: 'var(--radius-full)',
                padding: '6px 14px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: chip.color || 'var(--text-primary)',
                whiteSpace: 'nowrap'
              }}>
                {chip.dot && <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: chip.dotColor || '#10b981', boxShadow: `0 0 6px ${chip.dotColor || '#10b981'}`, display: 'inline-block', flexShrink: 0 }} />}
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Greeting & Key KPI Row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Good morning, {persona.userName}
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            {persona.statusText}
          </p>
        </div>

        {/* Big KPI Metric Boxes */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {persona.kpis.map((kpi, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '8px 16px',
                minWidth: '130px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                {kpi.label}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: kpi.color, lineHeight: 1.2 }}>
                {kpi.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
