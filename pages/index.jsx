export default function Home() {
  return (
    <div className="flex h-screen text-white">
      <div className="flex-none bg-gray-800 p-4">
        <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800">
          TW
        </div>
      </div>
      <div className="flex w-60 flex-col bg-gray-700  ">
        <div className="h-12 p-4 shadow-md">Tailwind CSS</div>
        <div className="flex-1 p-4 ">channels</div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-600">
        <div className="h-12 p-4 shadow-md">general</div>
        <div className="flex-1 p-4 ">messages</div>
      </div>
    </div>
  );
}
