import List from './list';
import NewButton from './new-button';

export interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] text-white p-3 flex-col flex gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
}
