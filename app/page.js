import Navbar from "./components/Navbar";
import Section1 from "./components/section1";

export default function Home() {
  return (
    <div classname='bg-background'>
      <div>
        <Navbar />
      </div>
      <div>
        <Section1 />
      </div>
    </div>
  );
}
