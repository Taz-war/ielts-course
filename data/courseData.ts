import { Data } from '../types';

const courseData: Data = {
  slug: "ielts-course",
  id: 1,
  title: "IELTS Course by Munzereen Shahid",
  description: "<p>Master IELTS with Munzereen! Lifetime access, practical lessons, and expert instructors.</p>",
  media: [
    { url: "https://www.youtube.com/watch?v=ysz5S6PUM-U", type: "youtube" }
  ],
  checklist: [
    { text: "Lifetime access" },
    { text: "Certificate on completion" },
    { text: "Expert instructors" },
    { text: "24/7 support" }
  ],
  seo: {
    "og:title": "IELTS Course by Munzereen Shahid",
    "og:description": "Prepare for IELTS with our complete course."
  },
  cta_text: { en: "Enroll Now", bn: "এনরোল করুন" },
  sections: [
     {
    type: "instructor",
    title: "কোর্স ইন্সট্রাক্টর",
    instructors: [
      {
        name: "Munzereen Shahid",
        designation: "MSc (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5",
        image: "https://i.ibb.co/sqv3t9L/munzereen.jpg"
      }
    ]
  },
    {
      type: "features",
      title: "How the course is laid out",
      items: ["Structured modules", "Weekly live classes", "Quizzes & practice tests"]
    },
    {
      type: "pointers",
      title: "What you will learn",
      items: ["Reading skills", "Writing techniques", "Listening practice", "Speaking fluency"]
    },
    {
      type: "about",
      title: "About the Course",
      description: "<p>This course provides everything you need to score high in IELTS.</p>"
    }
  ]
};

export default courseData;
