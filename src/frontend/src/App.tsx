import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import TuitionPage from './pages/TuitionPage';
import ParentHandbookPage from './pages/ParentHandbookPage';
import ContactInterestListPage from './pages/ContactInterestListPage';
import LittleSproutsPage from './pages/LittleSproutsPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const programRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/program',
  component: ProgramPage,
});

const tuitionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tuition',
  component: TuitionPage,
});

const handbookRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/parent-handbook',
  component: ParentHandbookPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactInterestListPage,
});

const littleSproutsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/little-sprouts',
  component: LittleSproutsPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  programRoute,
  tuitionRoute,
  handbookRoute,
  contactRoute,
  littleSproutsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
