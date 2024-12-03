import { Footer, Sidebar, TopMenu } from '@/components';

export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen">

      <TopMenu />
      <Sidebar />

      {/* <div className="px-0 sm:px-10"> */}
      <div className="px-4 sm:px-10 mx-1 sm:mx-2">
        { children }

      </div>

      <Footer />
    </main>
  );
}