"use client";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { WavyUnderline } from "@/components/WavyUnderline";
import { FormInput, FormTextarea } from "@/components/FormInput";
import { useFormStatus, useFormState } from "react-dom";
import { submitContactForm } from "@/actions/contact";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-end pt-4">
      <button
        type="submit"
        disabled={pending}
        className="group flex items-center gap-3 bg-black border border-white/60 hover:border-[#b4eb2c] py-2 pl-6 pr-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="font-medium">{pending ? "Sending..." : "Submit"}</span>
        <div className="bg-[#b4eb2c] p-2 rounded-full group-hover:scale-110 transition-transform">
          {pending ? (
            <svg
              className="animate-spin w-4 h-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export const ContactPage = () => {
  const [state, formAction] = useFormState(submitContactForm, {
    success: false,
    message: null,
  });

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
          {state.success ? (
             <div className="animate-[fadeInUp_0.8s_ease-out_0.2s_both] text-center p-12 bg-white/5 border border-white/20 rounded-2xl">
              <svg className="w-16 h-16 text-[#b4eb2c] mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
              <p className="text-white/70 text-lg">
                {state.message || "Thank you! Your message has been sent successfully. We'll be in touch soon."}
              </p>
            </div>
          ) : (
            <form
              action={formAction}
              className="space-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]"
            >
               {state.message && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-200">
                  {state.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <FormInput label="Your Name" name="name" required />
                <FormInput
                  label="Your Email"
                  name="email"
                  type="email"
                  required
                />
                <FormInput
                  label="Your Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+27"
                />
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

              <SubmitButton />
            </form>
          )}
        </div>
      </section>
    </>
  );
};
