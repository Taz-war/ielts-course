import { useRouter } from 'next/router';
import { fetchCourseData } from '../../utils/fetchCourseData';
import { useQuery } from '@tanstack/react-query';
import SeoHead from '../../components/SeoHead';
import About from '../../components/About';
import Pointers from '../../components/Pointers';
import LanguageSwitcher from '../../components/LanguageSwitcher';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import FeatureHighlights from '../../components/FeatureHighlights';

import Sidebar from '../../components/Sidebar';
import FadeInSection from '../../components/FadeInSection';
import Instructors from '../../components/Instructors';

export default function ProductPage() {
  const router = useRouter();
  const [lang, setLang] = useState<'en' | 'bn'>('en');
  const slug = router.query.slug as string || 'ielts-course'; // fallback for dev/test

  useEffect(() => {
    if (router.isReady) {
      setLang(router.query.lang === "bn" ? "bn" : "en");
    }
  }, [router.isReady, router.query.lang]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', slug, lang],
    queryFn: () => fetchCourseData(slug, lang), 
    enabled: !!slug, 
  });



  if (!router.isReady) return null;
  if (!router.isReady || isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Failed to load product.</div>;

  const getSection = (type: string) =>
    data.sections.find((s: any) => s.type === type);


  return (
    <>
      <SeoHead seo={data.seo} />
      {/* <LanguageSwitcher />
      <Navbar /> */}
      <div className="bg-white pb-10">
        <div className="container mx-auto px-4">
          <Navbar>
            <button className="text-sm bg-green-500 text-white px-4 py-1 rounded font-semibold hover:bg-green-600 transition">
              লগইন
            </button>
            <LanguageSwitcher />
          </Navbar>
          {/* Hero Section */}
          <Hero data={data} />
          <div className="block md:hidden mb-6 mt-2">
            <FadeInSection delay={0.1}>

            <Sidebar data={data} />
            </FadeInSection>
          </div>


          <div className="flex flex-col md:flex-row gap-8 mt-6">

            <div className="flex-1 min-w-0">
              <FadeInSection delay={0.1}>

              <Instructors section={getSection("instructors")} />
              </FadeInSection>
              <FadeInSection delay={0.1}>

              <FeatureHighlights section={getSection("features")} />
              </FadeInSection>
              <FadeInSection delay={0.1}>

              <Pointers section={getSection("pointers")} />
              </FadeInSection>
              <FadeInSection delay={0.1}>

              <About section={getSection("about")} />
              </FadeInSection>
            </div>


            <div className="relative w-full md:w-[450px] flex-shrink-0 hidden md:block">
              <div className="sticky top-[32px] z-30">
                <div className="md:mt-[-200px] md:mr-[2rem]">
                  <FadeInSection delay={0.1}>

                  <Sidebar data={data} />
                  </FadeInSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
