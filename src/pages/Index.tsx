import LaunchpadEditor from '@/components/LaunchpadEditor';

const Index = () => {
  return (
    <div className="min-h-screen bg-launchpad-bg text-launchpad-text">
      <header className="p-6 border-b border-launchpad-button">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-launchpad-accent1 to-launchpad-accent2 inline-block text-transparent bg-clip-text">
          Launchpad Mini MK1 Configuration
        </h1>
      </header>
      <main className="container mx-auto py-8">
        <LaunchpadEditor />
      </main>
    </div>
  );
};

export default Index;