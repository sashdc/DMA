import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

export default function TestPage() {
  return (
    <div style={{ fontFamily: fredoka.style.fontFamily }}>
      This text uses the Fredoka font.
    </div>
  );
}
