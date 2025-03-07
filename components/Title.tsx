import SpaceGrotesk500 from "@/components/TextComponents/SpaceGrotesk500";

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <SpaceGrotesk500
      style={{ fontSize: 29, color: "#FFFFFF", alignSelf: "center" }}
    >
      {text}
    </SpaceGrotesk500>
  );
}
