import Image from "next/image";

export function Conversation() {
  return (
    <section className="flex flex-col items-center mt-8">
      <h3 className="text-2xl">3,2,1 …GO!</h3>
      <h4 className="text-xl text-center">
        La tua conoscenza della lingua inizia con il prossimo click
      </h4>
      <Image
        className="my-8"
        src="/images/conv.png"
        alt="conversation"
        width={350}
        height={300}
        priority
      />
    </section>
  );
}
