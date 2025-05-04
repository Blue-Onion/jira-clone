import TrueFocus from "@/components/FocusText";
import RotatingText from "@/components/RotatingText";
import SpotlightCard from "@/components/SpotlightCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { BarChart, Calendar, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const faqs = [
  {
    question: "What is ZCRUM?",
    answer:
      "ZCRUM is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
  },
  {
    question: "How does ZCRUM compare to other project management tools?",
    answer:
      "ZCRUM offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
  },
  {
    question: "Is ZCRUM suitable for small teams?",
    answer:
      "Absolutely! ZCRUM is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from ZCRUM's features.",
  },
  {
    question: "What key features does ZCRUM offer?",
    answer:
      "ZCRUM provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
  },
  {
    question: "Can ZCRUM handle multiple projects simultaneously?",
    answer:
      "Yes, ZCRUM is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes ZCRUM ideal for organizations juggling multiple projects or clients.",
  },
  {
    question: "Is there a learning curve for new users?",
    answer:
      "While ZCRUM is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
  },
];
const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="">
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold flex flex-col items-center justify-center text-[gray-200]">
          <RotatingText
            texts={[
              "Streamline Now ",
              "Plan It Clearly",
              "Track All Tasks",
              "Boost Workflow ",
              "Deliver On Time",
              "Manage Projects",
              "Smarter Teams ",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#6E7AAB] text-[#DEE6F2] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <span className="flex items-center text-4xl gradient-title justify-center gap-4 mt-4">
            with{" "}
          </span>
          <span className="flex items-center gradient-title justify-center gap-4">
            ZCRUM
          </span>
          <p className="text-2xl mx-auto text-gray-400 mt-8 max-w-2xl">
            Empowering teams to achieve more with less effort.
          </p>
          <div className="flex gap-6 ">
            <Link href={"/dashboard"}>
              <Button
                variant={"outline"}
                className="font-bold text-xl  text-[#DEE6F2] px-12 py-6 rounded-lg"
              >
                Get Started
              </Button>
            </Link>
            <Link href={"#features"}>
              <Button className="font-bold text-xl  text-black px-12 py-6 rounded-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </h1>
      </section>
      <section id="features" className="p-10">
        <div className="">
          <h3 className="text-center text-4xl gradient-title">Key Feature</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
            {features.map((feature, index) => (
              <SpotlightCard
                key={index}
                className="custom-spotlight-card"
                spotlightColor="rgba(110, 122, 171, 0.5)"
              >
                <div className="flex flex-col items-center gap-4 mb-6">
                  <feature.icon className="h-8 w-8 text-[#6E7AAB]" />

                  <h4 className="text-xl font-semibold text-[#6E7AAB]">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 gradient-title text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="py-20 px-5">
        <div className="container mx-auto">
          <Link href={"/dashboard"}>
          <TrueFocus

            sentence="Start Now"
            manualMode={false}
            blurAmount={5}
            borderColor="violet"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          </Link>
        </div>
      </section>
    </div>
  );
}
