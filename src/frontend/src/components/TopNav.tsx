import { Link, useRouterState } from '@tanstack/react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function TopNav() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/little-sprouts', label: 'Little Sprouts' },
    { path: '/about', label: 'About' },
    { path: '/program', label: 'Program' },
    { path: '/tuition', label: 'Tuition' },
    { path: '/parent-handbook', label: 'Parent Handbook' },
    { path: '/contact', label: 'Contact / Interest List' },
  ];

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
            Modoc Street Garden Preschool
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap justify-center">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link to={item.path}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={currentPath === item.path}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
