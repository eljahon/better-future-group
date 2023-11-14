import Image from "next/image";
const SlickIItem = (props) => {
  const { text, icon, btnText, link, top } = props;
  return (
    <div>
      <div className="flex justify-center text-base">
        <Image src={icon} alt="img" />
      </div>
      <p className={top ? "mt-[64px] text-center" : "mt-4 text-center"}>
        {text}
      </p>
      <div className="mx-auto mt-5 text-base flex items-center justify-center bg-greey w-3/4 py-2.5 px-5">
        <a className="text-link" href={link} target={"_blank"}>
          {btnText}
        </a>
      </div>
    </div>
  );
};
export default SlickIItem;
