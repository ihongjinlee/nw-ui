type Tag = {
  text: string;
  onClick?: (taglabel: string) => void;
};

export default function Tag({ text, onClick = () => {} }: Tag) {
  return (
    <button
      onClick={() => onClick(text)}
      className={`bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg px-2 py-0.5 text-center`}
    >
      #{text}
    </button>
  );
}
