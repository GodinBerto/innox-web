import ClientNavigationSheet from '@/components/navigation/client-nav-sheet';
import Footer from '@/components/navigation/footer';
import Navbar from '@/components/navigation/navbar';

export default function SharedLayout({ children }: _IChildren) {
  return (
    <div className="h-screen">
      <Navbar />
      <ClientNavigationSheet />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
