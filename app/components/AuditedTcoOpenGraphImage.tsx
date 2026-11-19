export default function AuditedTcoOpenGraphImage({ title }: { title: string }) {
  return (
    <div
      style={{
        alignItems: 'stretch',
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 52%, #172554 100%)',
        color: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        height: '100%',
        justifyContent: 'space-between',
        padding: '64px 72px',
        width: '100%',
      }}
    >
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ alignItems: 'center', display: 'flex', fontSize: 29, fontWeight: 800, letterSpacing: '-0.02em' }}>
          <span style={{ background: '#3b82f6', borderRadius: 12, display: 'flex', height: 34, marginRight: 15, width: 34 }} />
          StackEvalify
        </div>
        <div style={{ background: 'rgba(52, 211, 153, 0.13)', border: '1px solid rgba(110, 231, 183, 0.5)', borderRadius: 999, color: '#a7f3d0', display: 'flex', fontSize: 20, fontWeight: 700, padding: '11px 20px' }}>
          Independent CFO Audit
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1020 }}>
        <div style={{ color: '#93c5fd', display: 'flex', fontSize: 21, fontWeight: 800, letterSpacing: '0.13em', marginBottom: 22, textTransform: 'uppercase' }}>
          B2B procurement model
        </div>
        <div style={{ display: 'flex', fontSize: title.length > 27 ? 62 : 70, fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 1.02 }}>
          {title}
        </div>
        <div style={{ color: '#cbd5e1', display: 'flex', fontSize: 28, fontWeight: 600, lineHeight: 1.35, marginTop: 25 }}>
          Audited 12/24-Month TCO &amp; Hidden Deposit Model
        </div>
      </div>

      <div style={{ alignItems: 'center', borderTop: '1px solid rgba(148, 163, 184, 0.25)', color: '#94a3b8', display: 'flex', fontSize: 19, justifyContent: 'space-between', paddingTop: 24 }}>
        <span>Pricing assumptions separated from refundable cash exposure</span>
        <span style={{ color: '#dbeafe', fontWeight: 700 }}>stackevalify.com</span>
      </div>
    </div>
  );
}
