import { Outlet } from '@tanstack/react-router';
import TopNav from './TopNav';

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
