import clsx from "clsx";

type NodeWrapperProps = React.PropsWithChildren & {
  title?: string;
  status?: 'init' | 'pending' | 'success' | 'error'
};

export function NodeWrapper({ children, title, status }: NodeWrapperProps) {
  return (
    <div className={clsx('shadow-md min-w-[280px] rounded-md bg-white border-2', {
      'border-stone-400': !status || status === 'init',
      'border-green-400': status === 'success',
      'border-red-400': status === 'error',
      'border-gray-600': status === 'pending',
    })}>
      <div className="px-4 py-4 flex items-center gap-2">
        <i className="pi pi-microchip-ai"></i>
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}
