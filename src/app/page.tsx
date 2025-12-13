import LiquidEther from '@/components/LiquidEther';
import GradientText from '@/components/GradientText';
import TextType from '@/components/TextType';

export default function Home() {
  return (
    <div className="size-full w-screen h-screen relative bg-black text-white">
      <div className="absolute top-0 left-0 w-screen h-screen">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center">
        <GradientText
          className="text-5xl font-bold"
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        >
          RepoVault
        </GradientText>
        <TextType
          className="text-lg"
          text="Welcome to RepoVault - Your personal repository organizer"
          as="p"
          loop={false}
          showCursor={false}
        />
      </div>
    </div>
  );
}
