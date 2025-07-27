import { useRouter } from 'next/router';
import { fetchCourseData } from '../../utils/fetchCourseData';
import { useQuery } from '@tanstack/react-query';
import SeoHead from '../../components/SeoHead';
import Trailer from '../../components/Trailer';
import CTA from '../../components/CTA';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Instructors from '../../components/Instructors';
import Checklist from '../../components/Checklist';
import Features from '../../components/Features';
import About from '../../components/About';
import Pointers from '../../components/Pointers';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import courseData from '../../data/courseData';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import CourseInfoCard from '../../components/CourseInfoCard';
import FeatureHighlights from '../../components/FeatureHighlights';
import PromoPDF from '../../components/PromoPDF';

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
    queryFn: () => fetchCourseData(slug, lang), // updated fetcher below!
    enabled: !!slug, // Don't fetch until slug is available
  });


  // Prevent SSR mismatch
  if (!router.isReady) return null;
  if (!router.isReady || isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Failed to load product.</div>;

  // Helper to extract section by type
  const getSection = (type: string) =>
    data.sections.find((s: any) => s.type === type);


  return (
    <>
      <SeoHead seo={courseData.seo} />
      <LanguageSwitcher />
      <Navbar />
      <div className="bg-white pb-10">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <Hero data={data} />
          {/* Main two columns */}
          <div className="flex flex-col md:flex-row gap-8 mt-6">
            {/* Main Content Column */}
            <div className="flex-1 min-w-0">
              {/* Instructor */}
              <Instructors section={getSection("instructors")} />
              {/* Feature Highlights as Cards */}
              <FeatureHighlights section={getSection("features")} />
              {/* Promo PDF */}
              <PromoPDF section={getSection("group_join_engagement")} />
              {/* What You’ll Learn (pointers) */}
              <Pointers section={getSection("pointers")} />
              {/* Curriculum Accordion */}
              <About section={getSection("about")} />
            </div>
            {/* Sidebar */}
            <div className="w-full md:w-[350px] flex-shrink-0 flex flex-col gap-4">
              <Trailer media={data.media} />
              <CourseInfoCard section={data} />
              <div className="md:sticky md:top-4 z-10">
                <Checklist checklist={data.checklist} />
              </div>
              <CTA cta={data.cta_text} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
