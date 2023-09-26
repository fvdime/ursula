import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TanStackProvider from "@/context/TanStackProvider";

export default function SectionLayout({ children }) {
  return (
    <html>
      <body>
        <TanStackProvider>
          <Navbar/>
          {children}
          <Footer/>
        </TanStackProvider>
      </body>
    </html>
  )
}