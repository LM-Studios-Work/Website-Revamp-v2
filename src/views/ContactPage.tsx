"use client";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { WavyUnderline } from "@/components/WavyUnderline";
import { FormInput, FormTextarea } from "@/components/FormInput";
import { COLORS } from "@/constants/colors";
import { CONTACT_DETAILS } from "@/constants/contact";

export const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center min-h-screen pt-40 pb-20 px-6 overflow-hidden">
        <HeroVideoOverlay />

        <div className="relative z-30 max-w-[1200px] w-full mx-auto">
          <div className="max-w-[800px] animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white mb-8 text-left">
              Get a Free Web Design Quote
            </h1>

            <WavyUnderline color="limeButton" className="mb-12" />

            <p className="text-lg md:text-xl text-white/70 leading-relaxed text-left">
              Use the form below to get in touch with us about your project or
              inquiry. Whether you have questions, need a quote, or want to
              discuss your ideas, we're here to help. The information you provide
              will help us understand your needs and serve as a starting point for
              our conversation. Please note that any details shared here are for
              initial contact purposes only and do not represent a binding
              agreement or formal proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <form
            action={`https://formsubmit.co/${CONTACT_DETAILS.email}`}
            method="POST"
            className="space-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <FormInput label="Your Name" name="name" required />
              <FormInput label="Your Email" name="email" type="email" required />
              <FormInput label="Your Phone Number" name="phone" type="tel" placeholder="+27" />
              <FormInput label="Your Country" name="country" required />
              <FormInput label="Your Company" name="company" />
            </div>

            <FormInput label="Subject" name="subject" required />

            <FormTextarea
              label="Your Question"
              name="message"
              required
              placeholder="Please describe your website project or inquiry."
              rows={12}
            />

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="group flex items-center gap-3 bg-black border border-white/60 hover:border-[#b4eb2c] py-2 pl-6 pr-2 rounded-full transition-all"
              >
                <span className="font-medium">Submit</span>
                <div className="bg-[#b4eb2c] p-2 rounded-full group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
