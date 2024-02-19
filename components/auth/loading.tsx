import Image from 'next/image';

export interface ILoadingProps {}

export default function Loading(props: ILoadingProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image
        src={'/logo.svg'}
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
}
