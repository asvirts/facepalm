import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Image
          src="/public/assets/fp-logo.png"
          alt="Facepalm Logo"
          width={780}
          height={780}
        />
      </main>
    </div>
  );
}
