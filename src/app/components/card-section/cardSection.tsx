import Image from "next/image";

export default function CardSection() {
  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src="/logo.jpg"
          alt="Logo"
          className="w-1/5 h-1/5"
          width={500}
          height={100}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center content">
        <h3 className="font-bold text-xl">This is title</h3>
        <p>This is description</p>
      </div>
    </div>
  );
}
