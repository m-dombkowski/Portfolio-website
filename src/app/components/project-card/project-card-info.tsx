import Image from "next/image";
import testowyImg from "../../../../public/images/bafi.jpg";

export default function ProjectInfo({ description }: { description: string }) {
  return (
    <div className="px-4 flex flex-col gap-6">
      <p className="text-base text-center">{description}</p>
      <div className="max-w-[450px] m-auto ">
        <Image
          src={testowyImg}
          alt="placeholder"
          className="h-full w-full rounded-xl"
        />
      </div>
      <div>
        <h2 className="text-2xl mb-3">Description</h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aperiam
          quaerat doloribus eligendi animi vero architecto ipsa assumenda eius
          temporibus odit, iste dolores nostrum distinctio perferendis ducimus
          repellendus rem saepe.
        </p>
      </div>
      <div>
        <h2 className="text-2xl mb-3">Technologies</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fuga
          repellat nisi aperiam tempore culpa amet quibusdam! Maxime ratione,
          aliquam fuga velit aperiam dolore minus rerum, iusto temporibus itaque
          tenetur.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fuga
          repellat nisi aperiam tempore culpa amet quibusdam! Maxime ratione,
          aliquam fuga velit aperiam dolore minus rerum, iusto temporibus itaque
          tenetur.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fuga
          repellat nisi aperiam tempore culpa amet quibusdam! Maxime ratione,
          aliquam fuga velit aperiam dolore minus rerum, iusto temporibus itaque
          tenetur.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fuga
          repellat nisi aperiam tempore culpa amet quibusdam! Maxime ratione,
          aliquam fuga velit aperiam dolore minus rerum, iusto temporibus itaque
          tenetur.
        </p>
      </div>
    </div>
  );
}
