import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Leak Detection Lake Norman — Non-invasive leak detection for lakefront homes';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0D2137',
          backgroundImage: 'linear-gradient(135deg, #163352 0%, #0D2137 100%)',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#2E86AB' }} />
          <div style={{ color: '#2E86AB', fontSize: '24px', fontWeight: 700, letterSpacing: '4px' }}>
            LEAK DETECTION LAKE NORMAN
          </div>
        </div>
        <div style={{ color: '#FFFFFF', fontSize: '88px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>
          Leaks found.
        </div>
        <div style={{ color: '#C5D1DC', fontSize: '88px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>
          Lakefront protected.
        </div>
        <div style={{ color: '#A8B8C8', fontSize: '28px', marginTop: '28px' }}>
          Cornelius · Davidson · Mooresville · 980-405-4186
        </div>
      </div>
    ),
    { ...size }
  );
}
