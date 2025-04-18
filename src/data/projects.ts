export interface Project {
  id: number;
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    category: "AI Resume Checker",
    tools: "Python, Hugging Face, Streamlit,NLP",
    image: "/images/placeholder.webp",
    link: "https://project1.com",
    description: "A real-time resume scoring and improvement tool built with Hugging Face and Streamlit. Provides actionable feedback to enhance resume quality."
  },
  {
    id: 2,
    title: "Project Two",
    category: "Attendance via Face Recognition",
    tools: "Python,OpenCV,TensorFlow,Flask",
    image: "/images/placeholder.webp",
    link: "https://project2.com",
    description: "A cross-platform attendance system that uses face recognition to track student attendance in real-time. Features a user-friendly interface and secure authentication."
  },
  {
    id: 3,
    title: "Project Three",
    category: "Women Safety App (SIH)",
    tools: "Flutter,Firebase,Google Maps API,Twilio",
    image: "/images/placeholder.webp",
    link: "https://project3.com",
    description: "A mobile app designed to enhance women's safety by providing a platform for reporting incidents, receiving real-time alerts, and accessing emergency services. Features a user-friendly interface and secure authentication."
  }
]; 