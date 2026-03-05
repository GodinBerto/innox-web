import Navbar from '../navigation/navbar';
import Footer from '../navigation/footer';

export default function PageContainer({ children }: _IChildren) {
  return (
    <div className="h-screen ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
