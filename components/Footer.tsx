const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Docs'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <a href="#" className="text-xl font-bold tracking-tight text-indigo-600">
              Starter
            </a>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Build something amazing with the all-in-one platform for modern teams.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-gray-900">{group.title}</h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Starter. All rights reserved.</p>
          <div className="flex gap-5">
            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-sm text-gray-400 hover:text-indigo-600 transition">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
