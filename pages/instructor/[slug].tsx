import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchCourseData } from "../../utils/fetchCourseData";

interface Instructor {
    name: string;
    slug: string;
    image: string;
    description: string;
    short_description?: string;
}

export default function InstructorDetailPage() {
    const router = useRouter();
    const slug = router.query.slug as string;
    const [instructor, setInstructor] = useState<Instructor | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!router.isReady || !slug) return;

        const courseSlug = "ielts-course";
        fetchCourseData(courseSlug, "bn")
            .then((data) => {
                const section = data.sections?.find((s: any) => s.type === "instructors");
                const instr = section?.values?.find((i: Instructor) => i.slug === slug);
                if (instr) setInstructor(instr);
            })
            .finally(() => setLoading(false));
    }, [slug, router.isReady]);

    if (!router.isReady || loading) return <div>Loading...</div>;
    if (!instructor) return <div>Instructor not found.</div>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb] p-6">
            <div className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center">
                <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
                />
                <h1 className="text-3xl font-bold mb-2">{instructor.name}</h1>
                <div
                    className="text-gray-700 leading-relaxed text-base"
                    dangerouslySetInnerHTML={{
                        __html: instructor.description || "",
                    }}
                />
                {instructor.short_description && (
                    <div className="mt-4 text-green-600 text-sm font-semibold">
                        {instructor.short_description}
                    </div>
                )}
            </div>
        </div>
    );
}
