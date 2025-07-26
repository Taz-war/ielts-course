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
    <button onClick={toggleLang} className="p-2 bg-gray-200 rounded float-right m-2">
      {lang === "en" ? "বাংলা দেখুন" : "Show English"}
    </button>
  );
}
