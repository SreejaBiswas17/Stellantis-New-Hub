import React, { useState } from 'react';
import { Sparkles, Zap, X, Shield, Bot, Send } from 'lucide-react';

export default function FloatingNexus({ selectedDomain, selectedRole }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: `Hello! I am your AI Hub Copilot for ${selectedDomain}. You are logged in as ${selectedRole}. How can I assist your shift operations today?`
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userText = query;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setQuery('');

    setTimeout(() => {
      let reply = `I've analyzed the telemetry for ${selectedDomain}. Current SLA health is at 99.1%. There are 2 high-priority cluster approvals awaiting your confirmation in Workflow Inbox.`;
      if (userText.toLowerCase().includes('kafka') || userText.toLowerCase().includes('incident')) {
        reply = `Kafka Cluster #881 partition rebalance has been simulated in the AI Experience Zone. Recommended action: Approve autonomous pod scaling.`;
      }
      setMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Right Edge Tab: SEL Nexus */}
      <div
        className="nexus-floating-tab"
        onClick={() => setDrawerOpen(true)}
        title="Open SEL Nexus Control Plane"
      >
        <Zap size={14} />
        <span>SEL Nexus</span>
      </div>

      {/* Floating AI Assistant Button at bottom-right */}
      <button
        className="ai-assistant-floating-btn"
        onClick={() => setDrawerOpen(true)}
        title="Ask AI Assistant"
      >
        <Sparkles size={16} />
        <span>AI Assistant</span>
      </button>

      {/* Slide-over Drawer */}
      {drawerOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '420px',
          maxWidth: '90vw',
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {/* Drawer Header */}
          <div style={{
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-surface-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                background: '#0e1e38',
                border: '1px solid #1a3a6e',
                padding: '6px',
                borderRadius: '8px'
              }}>
                <Bot size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>SEL Nexus AI Assistant</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Stellantis Enterprise Intelligence</div>
              </div>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages list */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '10px 12px',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Shield size={16} color="#10b981" />
              <span>Enterprise Guardrails Active • Governance Policy #GOV-901</span>
            </div>

            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.sender === 'user' ? 'var(--stellantis-blue)' : 'var(--bg-surface-secondary)',
                  color: m.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                  border: m.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '0.85rem',
                  lineHeight: '1.4'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input box */}
          <form
            onSubmit={handleSend}
            style={{
              padding: '12px 16px',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '8px',
              background: 'var(--bg-surface)'
            }}
          >
            <input
              type="text"
              placeholder={`Ask anything about ${selectedDomain}...`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '0.85rem',
                color: 'var(--text-primary)',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              className="st-btn st-btn-primary"
              style={{ padding: '8px 14px' }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
