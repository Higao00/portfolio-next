import dynamic from 'next/dynamic';

const DynamicHome = dynamic(() => import('@/components/Pages/Home'), {
  ssr: false,
  loading: () => (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0f172a'
    }}>
      <div style={{ color: 'white' }}>Carregando...</div>
    </div>
  )
});

export default DynamicHome;