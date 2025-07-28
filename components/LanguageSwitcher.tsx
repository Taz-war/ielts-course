import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const lang = router.query.lang === "bn" ? "bn" : "en";
  const toggleLang = () => {
    router.push(
      { pathname: router.pathname, query: { ...router.query, lang: lang === "en" ? "bn" : "en" } },
      undefined,
      { shallow: false }
    );
  };
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 px-3 py-1 rounded border border-gray-200 bg-gray-50 text-gray-700 hover:bg-green-50 hover:text-green-700 transition font-medium"
      title={lang === "en" ? "Switch to Bangla" : "Switch to English"}
    >
      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      {lang === "en" ? "বাংলা দেখুন" : "Show English"}
    </button>
  );
}
